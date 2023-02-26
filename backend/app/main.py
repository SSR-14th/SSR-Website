from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Data(BaseModel):
  num: int
  name: str
  phone: str
  mail: str
  q0: str
  q1: str
  q2: str

@app.post("/api/form")
async def form(data: Data):
  return {"hello root"}
