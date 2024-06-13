"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
const errors_interceptor_1 = require("../common/interceptors/errors.interceptor");
const swagger_service_1 = require("../common/swagger/swagger.service");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const configuration_config_1 = require("./configuration.config");
const app_module_1 = require("../app.module");
class ServerConfig {
    constructor() {
        this.configService = new configuration_config_1.ConfigService();
        this.swaggerService = new swagger_service_1.SwaggerService();
    }
    async init() {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        app.useGlobalInterceptors(new errors_interceptor_1.ErrorsInterceptor());
        app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
        app.setGlobalPrefix(this.configService.get('server').prefix);
        this.swaggerService.init(app);
        const port = +process.env.PORT || 3000;
        await app
            .listen(port)
            .then(() => {
            console.log(`Listening on port: http://localhost:${port}`);
        })
            .catch((err) => {
            console.log(`Unable to stabilish connection:: ${err.message}`);
        });
    }
}
exports.ServerConfig = ServerConfig;
//# sourceMappingURL=server.config.js.map