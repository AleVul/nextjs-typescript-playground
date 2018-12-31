/** Interface for next.js page context */
export interface PageContext {
    /** path section of URL */
    pathname: String,

    /** query string section of URL parsed as an object */
    query: object,

    /** String of the actual path (including the query) shows in the browser */
    asPath: String,

    /** HTTP request object (server only) */
    req?: Request,

    /** HTTP response object (server only) */
    res?: Response,

    /** Fetch Response object (client only) */
    jsonPageRes: Object,

    /** Error object if any error is encountered during the rendering */
    err: object
}

export interface Page {
    /** this should be static */
    getInitialProps?: (ctx: PageContext) => Promise<Object>
}