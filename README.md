tempr
====
Proof-of-concept setup with [TICK-stack](https://www.influxdata.com/products/open-source/). Logging of temperatures from [Telldus Live](https://live.telldus.com/) with [Telegraf](https://docs.influxdata.com/telegraf), stored in [InfluxDB](https://docs.influxdata.com/influxdb), visualization with [Chronograf](https://docs.influxdata.com/chronograf) and optionally processing with [Kapacitor](https://docs.influxdata.com/kapacitor).

*N.B: All security-related features (authorization, authentication, etc) are disabled in this setup. Keep this as far as possible away from any production-like use.*

Prerequisites
-------------
* [docker](https://www.docker.com/community-edition)
* [docker-compose](https://docs.docker.com/compose/overview/)
* [Telldus Live](https://live.telldus.com/) account.
* [OAuth tokens for Telldus API](http://api.telldus.com/keys/index) from your Telldus Live account.

Get started
-----------
1. Save OAuth tokens to ./telldus/telldus-secrets.json (se details below)
2. docker-compose up
3. Access Chronograf GUI @ http://localhost:8888 (substitute localhost for docker host IP)
4. Configure Chronograf's InfluxDB connection to http://influxdb:8086
5. Configure Chronograf's Kapacitor conneciton to http://kapacitor:9092

Configure
---------
1. Configure graphs and dashboards in Chronograf GUI

Save OAuth tokens
-----------------
1. Get OAuth tokens from api.telldus.com
2. Create file ./telldus/telldus-secrets.json using template below, input your token data.

```JSON
{
  "telldusPublicKey": "...",
  "telldusPrivateKey": "...",
  "telldusToken": "...",
  "telldusTokenSecret": "..."
}
```

