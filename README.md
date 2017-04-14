tempr
====
Proof-of-concept setup with TICK-stack. Logging of temperatures with Telegraf, stored in InfluxDB, visualization with Chronograf and optionally processing with Kapacitor.

*N.B: All security-related features (authorization, authentication, etc) are disabled in this setup. Keep this as far as possible away from any production-like use.*

Prerequisites
-------------
* docker
* docker-compose

Get started
-----------
1. docker-compose up
2. Access Chronograf GUI @ http://<DOCKER-HOST-IP>:8888
3. Configure Chronograf's InfluxDB connection to http://influxdb:8086
4. Configure Chronograf's Kapacitor conneciton to http://kapacitor:9092

Configure
---------
1. Configure input plugins in Telegraf through etc/telegraf.conf
2. Re-start according to "Get started" section above
