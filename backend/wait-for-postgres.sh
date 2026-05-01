#!/bin/sh

# If DB_HOST is set, try to wait for it. Otherwise, just start the app.
# DB_HOST defaults to 'postgres' for local docker-compose compatibility.
HOST="${SPRING_DATASOURCE_URL:-postgres}"
# Extract host from jdbc:postgresql://host:port/db
CLEAN_HOST=$(echo $HOST | sed -e 's/jdbc:postgresql:\/\///' -e 's/:.*//' -e 's/\/.*//')

echo "Waiting for database at $CLEAN_HOST..."

# Only try to wait if nc is available and we are in a local-like environment
if command -v nc >/dev/null 2>&1 && [ "$CLEAN_HOST" = "postgres" ]; then
  while ! nc -z $CLEAN_HOST 5432; do
    echo "Database is unavailable - sleeping"
    sleep 1
  done
  echo "Database is up - starting app"
fi

exec java -jar app.jar
