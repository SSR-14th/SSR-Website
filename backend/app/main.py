from typing import List, Optional

from fastapi import FastAPI, Response, status
from pydantic import BaseModel, parse_obj_as

from app.config import *
from app.model import *

app = FastAPI()

class Data(BaseModel):
  num: int
  name: str
  phone: str
  mail: str
  q0: str
  q1: str
  q2: str

class Key(BaseModel):
  key: str

@app.post("/api/form", status_code=status.HTTP_201_CREATED)
async def form(data: Data):
  with SessionContext() as session:
    Form = DBForm(num=data.num, name=data.name, phone=data.phone, mail=data.mail, q0=data.q0, q1=data.q1, q2=data.q2)
    session.add(Form)
    session.commit()
  return {"OK"}

@app.post("/api/admin")
async def admin(key: Key, response: Response):
  if key.key == KEY:
    with SessionContext() as session:
      res = session.query(DBForm).all()
    ret = []
    for i in res:
      tmp = {
        "num": i.num,
        "name": i.name,
        "phone": i.phone,
        "mail": i.mail,
        "q0": i.q0,
        "q1": i.q1,
        "q2": i.q2,
      }
      ret.append(tmp)
    return parse_obj_as(List[Data], ret)
  else:
    response.status_code = status.HTTP_201_CREATED
    return {"Auth fail"}

