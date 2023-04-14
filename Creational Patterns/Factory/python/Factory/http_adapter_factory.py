from abc import abstractmethod, ABCMeta
from Adapters import IHttpAdapterBase

# Step 3 - Declare base factory interface that returns objects that match the base product, not the concrete ones.
class IHttpAdapterFactory(metaclass=ABCMeta):
    @abstractmethod
    def make_adapter(self) -> IHttpAdapterBase:
        pass
