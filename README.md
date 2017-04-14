tempr
====
Proof-of-concept setup with [TICK-stack](https://www.influxdata.com/products/open-source/). Logging of temperatures with [Telegraf](https://docs.influxdata.com/telegraf), stored in [InfluxDB](https://docs.influxdata.com/influxdb), visualization with [Chronograf](https://docs.influxdata.com/chronograf) and optionally processing with [Kapacitor](https://docs.influxdata.com/kapacitor).

*N.B: All security-related features (authorization, authentication, etc) are disabled in this setup. Keep this as far as possible away from any production-like use.*

Prerequisites
-------------
* [docker](https://www.docker.com/community-edition)
* [docker-compose](https://docs.docker.com/compose/overview/)

Get started
-----------
1. docker-compose up
2. Access Chronograf GUI @ http://localhost:8888 (substitute localhost for docker host IP)
3. Configure Chronograf's InfluxDB connection to http://influxdb:8086
4. Configure Chronograf's Kapacitor conneciton to http://kapacitor:9092

Configure
---------
1. Configure input plugins in Telegraf through etc/telegraf.conf
2. Re-start according to "Get started" section above
3. Configure graphs in Chronograf GUI
