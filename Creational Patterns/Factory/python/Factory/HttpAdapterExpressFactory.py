from . import IHttpAdapterFactory
from Adapters import IHttpAdapterBase, httpAdapterExpress


class HttpAdapterExpressFactory(IHttpAdapterFactory):
    def __init__() -> None:
        pass

    def makeAdapter(self) -> IHttpAdapterBase:
        return httpAdapterExpress()
