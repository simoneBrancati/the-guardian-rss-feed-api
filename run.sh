#!/bin/bash

THE_GUARDIAN_API_KEY=$1
if [ -z "$THE_GUARDIAN_API_KEY" ]; then
    echo "ERROR: The Guardian Api Key must be set"
    exit 1
fi

docker compose up