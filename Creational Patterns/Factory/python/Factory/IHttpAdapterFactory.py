from abc import abstractmethod, ABCMeta
from Adapters import IHttpAdapterBase


class IHttpAdapterFactory(metaclass=ABCMeta):
    @abstractmethod
    def makeAdapter(self) -> IHttpAdapterBase:
        pass
