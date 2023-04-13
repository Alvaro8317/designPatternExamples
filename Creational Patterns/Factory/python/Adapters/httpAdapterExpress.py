from . import httpAdapterBase

# Step 2 - Implement concrete products sub classes that implements the base product class/interface


class HttpAdapterExpress(httpAdapterBase.IHttpAdapterBase):
    def __init__(self):
        print("Http adapter with express.js created successfully")

    def get(self) -> None:
        pass

    def post(self) -> None:
        pass

    def put(self) -> None:
        pass

    def delete(self) -> None:
        pass
