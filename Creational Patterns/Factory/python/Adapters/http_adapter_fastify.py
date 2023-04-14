from . import http_adapter_base

# Step 2 - Implement concrete products sub classes that implements the base product class/interface


class HttpAdapterFastify(http_adapter_base.IHttpAdapterBase):
    def __init__(self):
        print("Http adapter with nest.js created successfully")

    def get(self) -> None:
        print("You're using get with fastify!")

    def post(self) -> None:
        print("You're using post with fastify!")

    def put(self) -> None:
        print("You're using put with fastify!")

    def delete(self) -> None:
        print("You're using delete with fastify!")

    @staticmethod
    def test_static() -> str:
        print("I'm a static method with fastify!")
