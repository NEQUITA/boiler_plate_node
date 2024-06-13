"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class CustomLogger {
    static EventInfo(message) {
        common_1.Logger.log(`[${new Date().toISOString()}] Event - ${message}`);
    }
    static EventError(message) {
        common_1.Logger.error(`[${new Date().toISOString()}] Event - ${message}`);
    }
}
exports.default = CustomLogger;
//# sourceMappingURL=logger.js.map