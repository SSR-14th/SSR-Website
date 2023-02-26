from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from board.domain.board import PostInfo
from board.repositories.base import Base

from datetime import datetime

from board.utils import ToEntity

class DBForms(Base):
  __tablename__ = 'forms'

  id: Column(Integer, primary_key=True)
  num: Column(Integer, nullable=False)
  name: Column(String, nullable=False)
  phone: Column(String, nullable=False)
  mail: Column(String, nullable=False)
  q0: Column(String, nullable=False)
  q1: Column(String, nullable=False)
  q2: Column(String, nullable=False)
