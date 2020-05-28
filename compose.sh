#!/bin/bash

source ./docker.env

exec docker-compose "$@"
