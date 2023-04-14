from . import http_adapter_factory
from Adapters import IHttpAdapterBase, Fastify


class HttpAdapterFastifyFactory(http_adapter_factory.IHttpAdapterFactory):
    def __init__(self) -> None:
        print("Adapter created to fastify")

    def make_adapter(self) -> IHttpAdapterBase:
        return Fastify()
