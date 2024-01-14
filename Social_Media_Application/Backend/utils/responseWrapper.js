const Error = (statusCode, result) => {
    return {
        status: 'error',
        statusCode,
        result
    }
}

const success = (statusCode, result) => {
    return {
        status: 'ok',
        statusCode,
        result
    }
}

module.exports = { Error, success };