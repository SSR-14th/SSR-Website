#!/usr/bin/env python3
import os
import string
import random

ENV = """ADMIN_KEY=%s
POSTGRES_USER=%s
POSTGRES_PASSWORD=%s
POSTGRES_DB=%s
"""

def rand_str(length):
  return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

if not os.path.isfile(".env"):
  ADMIN_KEY = rand_str(64)
  POSTGRES_USER = "user_sql_admin"
  POSTGRES_PASSWORD = rand_str(64)
  POSTGRES_DB = "ssr_db"
  text = ENV % (ADMIN_KEY, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB)
  fp = open(".env", "wt")
  fp.write(text)
  fp.close()
  print("ADMIN_KEY : %s" % ADMIN_KEY)
