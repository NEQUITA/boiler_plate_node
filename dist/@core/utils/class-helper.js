"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityFactory = void 0;
const EntityFactory = (Class, data) => Object.entries(data).reduce((entity, [key, value]) => {
    entity[key] = value;
    return entity;
}, new Class());
exports.EntityFactory = EntityFactory;
//# sourceMappingURL=class-helper.js.map