from . import http_adapter_factory
from Adapters import IHttpAdapterBase, Express


class HttpAdapterExpressFactory(http_adapter_factory.IHttpAdapterFactory):
    def __init__(self) -> None:
        print("Adapter created to express")

    def make_adapter(self) -> IHttpAdapterBase:
        return Express()
