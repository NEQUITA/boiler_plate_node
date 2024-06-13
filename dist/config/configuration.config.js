"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {};
        this.envConfig.service = {
            title: process.env.SERVICE_TITLE,
            description: process.env.SERVICE_DESCRIPTION,
            version: process.env.SERVICE_VERSION,
            tag: process.env.SERVICE_TAG,
        };
        this.envConfig.server = {
            port: +process.env.SERVICE_PORT || 3000,
            isEnabled: process.env.NODE_ENV === 'development',
            prefix: '/api',
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=configuration.config.js.map