import {MarketItem} from "./"

export interface MarketList {
    PageNo: number;
    PageSize: number;
    TotalCount: number;
    Items: MarketItem[]
}