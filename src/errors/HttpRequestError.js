export default class HttpRequestError extends Error {
    constructor(code, message) {
        this.name = "HttpRequestError";
        this.code = code;
        this.message = message;
    }
}
