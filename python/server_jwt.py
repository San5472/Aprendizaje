from fastapi import FastAPI, Request, HTTPException
from jose import jwt

app = FastAPI()

clave = jwt_user

@app.get('/api/protegido')
def protegido(request: Request):
    auth_header = request.headers.get("Authorization");

    if not auth_header:
        raise HTTPException(status_code=401, detail="Falta el token de autorización");

        try:
            token = auth_header.split("")[1]

            return {
                "status": "ok",
                "mensaje": "Token valido" ,
                "usuario": data["usuario"]
            }

        except Exception:
            raise HTTPException(status_code=401, detail="Token invalido");