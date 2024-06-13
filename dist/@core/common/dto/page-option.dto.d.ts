import { OrderType } from '../types/basic-filters';
export declare class PageOptionsDto {
    readonly order?: OrderType;
    readonly page?: number;
    readonly take?: number;
    get skip(): number;
}
