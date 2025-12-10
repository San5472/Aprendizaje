from fastapi import FastAPI

app = FastAPI()

@app.get('/api')
def hola_mundo():
    return {"message": "Prubas para server en node"}