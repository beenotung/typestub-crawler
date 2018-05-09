export = Crawler

declare interface CrawlerResult {
    $: CheerioSelector;
    statusCode: number;
    options: {
        uri: string
        method: "GET" | "POST" | string
        autoWindowClose: boolean,
        forceUTF8: boolean,
        gzip: boolean,
        incomingEncoding: null,
        jQuery: boolean,
        priority: number,
        referer: boolean,
        retries: number,
        retryTimeout: number,
        timeout: number,
        callback: Function,
        headers: any,
        release: Function
    }
}

declare interface CrawlerOptions {
    callback?: (err, res: CrawlerResult, done: () => void) => void
    release?: () => void

    autoWindowClose?: boolean,
    forceUTF8?: boolean,
    gzip?: boolean,
    incomingEncoding?: any,
    jQuery?: boolean,
    maxConnections?: number,
    method?: 'GET' | string,
    priority?: number
    priorityRange?: number,
    rateLimit?: number
    referer?: boolean,
    retries?: number
    retryTimeout?: number,
    timeout?: number,
    skipDuplicates?: boolean,
    rotateUA?: boolean,
    homogeneous?: boolean
}

declare class Crawler {
    constructor(params?: CrawlerOptions);

    init(options: CrawlerOptions);

    setLimiterProperty(limiter, property, value);

    _inject(response, options, callback);

    isIllegal(options);

    direct(options);

    queue(options: string[] | string);

    _pushToQueue(options);

    _buildHttpRequest(options);

    _onContent(error, options, response);

    _injected(errors, response, options, $);

    _doEncoding(options, response);

    _parseCharset(res);
}
