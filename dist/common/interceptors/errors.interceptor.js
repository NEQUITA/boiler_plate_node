"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)((error) => {
            const message = (Array.isArray(error?.response?.message)
                ? error?.response?.message?.[0]
                : error?.response?.message) || error.message;
            if (error?.status) {
                switch (error.status) {
                    case common_1.HttpStatus.BAD_REQUEST:
                        throw new common_1.BadRequestException(message);
                    case common_1.HttpStatus.NOT_FOUND:
                        throw new common_1.NotFoundException(message);
                    case common_1.HttpStatus.GATEWAY_TIMEOUT:
                        throw new common_1.GatewayTimeoutException(message);
                    case common_1.HttpStatus.CONFLICT:
                        throw new common_1.ConflictException(message);
                    case common_1.HttpStatus.BAD_GATEWAY:
                        throw new common_1.BadGatewayException(message);
                    default:
                        throw new common_1.InternalServerErrorException(message);
                }
            }
            else {
                throw error;
            }
        }));
    }
};
exports.ErrorsInterceptor = ErrorsInterceptor;
exports.ErrorsInterceptor = ErrorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorsInterceptor);
//# sourceMappingURL=errors.interceptor.js.map