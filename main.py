import typing

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import karabo_data

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/info/{path:path}")
def read_item(path: str):
    return {
        "@id": f'file:///{path}',
        "http://github.com/saulshanabrook/icalepcs-2019-jupyterlab/#n-train-id": len(
            karabo_data.H5File(path).train_ids
        ),
    }
