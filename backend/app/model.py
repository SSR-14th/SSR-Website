import os

from app.config import *

from sqlalchemy import *
from sqlalchemy.orm import *

Base = declarative_base()
engine = create_engine(DSN, echo = True)

class DBForm(Base):
  __tablename__ = "form"

  id = Column(Integer, primary_key=True)
  num = Column(Integer, nullable=False)
  name = Column(String, nullable=False)
  phone = Column(String, nullable=False)
  mail = Column(String, nullable=False)
  q0 = Column(String, nullable=False)
  q1 = Column(String, nullable=False)
  q2 = Column(String, nullable=False)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)

class SessionContext:
  session = None

  def __enter__(self):
    self.session = Session()
    return self.session

  def __exit__(self, exc_type, exc_value, traceback):
    self.session.close()
