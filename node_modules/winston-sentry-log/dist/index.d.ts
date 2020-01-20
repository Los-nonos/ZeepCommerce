import sentry from '@sentry/node';
import TransportStream = require('winston-transport');
export default class Sentry extends TransportStream {
    protected name: string;
    protected tags: {
        [s: string]: any;
    };
    protected sentryClient: typeof sentry;
    protected levelsMap: any;
    constructor(opts: any);
    log(info: any, callback: any): any;
}
