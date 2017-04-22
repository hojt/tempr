console.log("Telldus-fetcher is running!");

var telldus_secrets = require('./telldus-secrets.json');
var telldus2graphite_config = require('./telldus2graphite.config.json');

    // merge configurations
    var config = {};
    Object.assign(config, telldus2graphite_config, telldus_secrets);

    var logger = require('telldus2graphite/lib/logger')(config).getLogger(__filename);
    config.logger = logger;

    var telldus = require('telldus-live-promise');

function fetch_sensors() {
    console.log("fetch_sensors()...");

    var api = telldus.API(config);
    var sensors = telldus.Sensors(api);

    var graphite = require('telldus2graphite/lib/graphite.js')(config);

    function read(list) {
        return list.sensor.filter(function(sensor) {
            return sensor.id && sensor.name;
        }).map(sensors.info);
    }

    function log(list) {
        Promise.all(list).then(graphite.logAll).catch(function(data) {
            logger.error(data);
        });
    }

    sensors.list().then(read).then(log);
}

fetch_sensors();

var cron = require('node-cron');
cron.schedule('*/5 * * * *', fetch_sensors);
