#!/usr/bin/sh

./env_gen.py
docker-compose -f docker-compose.deploy.yml build
docker-compose -f docker-compose.deploy.yml up
