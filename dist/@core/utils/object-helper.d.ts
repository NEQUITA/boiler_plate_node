export declare class ObjectHelper {
    static changeKey(obj: any, newKey: string, oldKey: string): any;
    static arrayToObject<T extends Record<string, any>>(arr: T[]): Record<string, T[keyof T]>;
}
