"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./config/server.config");
async function bootstrap() {
    const server = new server_config_1.ServerConfig();
    await server.init();
}
bootstrap();
//# sourceMappingURL=main.js.map