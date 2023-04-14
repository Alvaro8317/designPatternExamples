from . import http_adapter_base

# Step 2 - Implement concrete products sub classes that implements the base product class/interface


class HttpAdapterExpress(http_adapter_base.IHttpAdapterBase):
    def __init__(self):
        print("Http adapter with express.js created successfully")

    def get(self) -> None:
        print("You're using get with express.js!")

    def post(self) -> None:
        print("You're using post with express.js!")

    def put(self) -> None:
        print("You're using put with express.js!")

    def delete(self) -> None:
        print("You're using delete with express.js!")
