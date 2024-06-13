"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const configuration_config_1 = require("../../config/configuration.config");
let SwaggerService = class SwaggerService {
    constructor() {
        this.configService = new configuration_config_1.ConfigService();
    }
    init(app) {
        if (!this.configService.get('server').isEnabled)
            return;
        const config = new swagger_1.DocumentBuilder()
            .setTitle(this.configService.get('service').title)
            .setDescription(this.configService.get('service').description)
            .setVersion(this.configService.get('service').version)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup(`${this.configService.get('server').prefix}/docs`, app, document);
    }
};
exports.SwaggerService = SwaggerService;
exports.SwaggerService = SwaggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SwaggerService);
//# sourceMappingURL=swagger.service.js.map