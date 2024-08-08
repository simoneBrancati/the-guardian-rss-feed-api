#!/bin/bash

API_KEY=$1
if [ -z "$API_KEY" ]; then
    echo "ERROR: The Guardian Api Key must be set"
    exit 1
fi

if [ -z "$2" ] || [ "$2" = "0" ] ; then
    DEBUG_MODE=0
else
   echo "DEBUG Mode Activated"
   DEBUG_MODE=1
fi

THE_GUARDIAN_API_KEY=$API_KEY DEBUG_MODE=$DEBUG_MODE docker compose up