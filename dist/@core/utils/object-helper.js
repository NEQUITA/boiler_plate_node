"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectHelper = void 0;
class ObjectHelper {
    static changeKey(obj, newKey, oldKey) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
        return obj;
    }
    static arrayToObject(arr) {
        return arr.reduce((acc, item) => {
            Object.entries(item).forEach(([key, value]) => {
                acc[key] = value;
            });
            return acc;
        }, {});
    }
}
exports.ObjectHelper = ObjectHelper;
//# sourceMappingURL=object-helper.js.map