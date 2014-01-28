#!/bin/bash

mkdir -p "$APP_HOME/logs"
exec >> "$APP_HOME/logs/ems.out"
exec 2>&1

echo "INSTANCE DIRECTORY IS: $APPSH_INSTANCE_HOME"

CLASSPATH="$APP_HOME/current/lib/*:$APP_HOME/current/jetty.jar"

ARGS="-DAPP_HOME=$APP_HOME -cp $CLASSPATH jetty.Jetty"

echo "Starting jetty with classpath: $CLASSPATH"

# Plainly pass any argument in the "jetty" group to EMS.
for line in $(app cat-conf -g jetty | cut -f 2- -d .)
do
  ARGS="$ARGS -D$line"
done
exec java ${ARGS} \
   2>&1