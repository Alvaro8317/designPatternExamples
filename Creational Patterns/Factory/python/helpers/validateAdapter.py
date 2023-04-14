from . import available_adapters
from Factory import ExpressFactory, FastifyFactory, AdapterFactory
def validate_adapter(adapter: available_adapters.Adapters) -> AdapterFactory:
    match(adapter):
        case 'fastify':
            return FastifyFactory()
        case 'express':
            return ExpressFactory()
        case _:
            raise ValueError("Not supported that adapter")