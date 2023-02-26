from fastapi import FastAPI

app = FastAPI()

@app.post("/api/form")
def root():
    return {"hello root"}
