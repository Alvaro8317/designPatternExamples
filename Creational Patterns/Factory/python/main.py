from helpers import validator
from helpers import available_adapters

def main(adapter_http_to_validate: available_adapters.Adapters) -> None:
    try:
        provider = validator(adapter_http_to_validate)
        http_adapter = provider.make_adapter()
        http_adapter.get()
        http_adapter.post()
        http_adapter.put()
        http_adapter.delete()
    except:
        print("Unexpected error")


if __name__ == "__main__":
    main("fastify")
