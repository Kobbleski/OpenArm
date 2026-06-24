from fastapi import FastAPI

app = FastAPI(
    title="OpenArm API",
    version="0.1.0"
)

@app.get("/")
def root():
    return {
        "project": "OpenArm",
        "status": "running"
    }