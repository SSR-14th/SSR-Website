#!/bin/sh

gunicorn -k uvicorn.workers.UvicornWorker --access-logfile ./gunicorn-access.log app.main:app --bind 0.0.0.0:8000 --workers 2 --daemon
