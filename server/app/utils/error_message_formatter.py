import time


def format_error_message(type: str, message: str) -> str:
    if type == "stripe":
        return (
            message
            + ", please try again. Contact support ref: "
            + str(int(time.time()))
            + "."
        )
    if type == "validation":
        formattedMessage = (
            message[0].capitalize()
            + message[1:-1]
            + message[-1].replace(
                ".", ", please try again. Contact support ref: " + str(int(time.time()))
            )
            + "."
        )
        return formattedMessage
    if type == "exception":
        return message + ". Contact support ref: " + str(int(time.time())) + "."
    return message
