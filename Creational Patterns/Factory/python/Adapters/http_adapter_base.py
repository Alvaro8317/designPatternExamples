from abc import abstractmethod, ABCMeta

# STEP 1 - Declare a base interface
class IHttpAdapterBase(metaclass=ABCMeta):
    @abstractmethod
    def get(self) -> None:
        pass

    @abstractmethod
    def post(self) -> None:
        pass

    @abstractmethod
    def put(self) -> None:
        pass

    @abstractmethod
    def delete(self) -> None:
        pass

