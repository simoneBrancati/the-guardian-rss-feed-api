#!/bin/bash

API_KEY=$1

if [ -z "$API_KEY" ]; then
    echo "ERROR: The Guardian Api Key must be set"
    exit 1
fi

THE_GUARDIAN_API_KEY=$API_KEY docker compose -f docker-compose.development.yml up --build