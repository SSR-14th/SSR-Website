#!/usr/bin/sh

cp test_env .env
docker-compose build
docker-compose up
