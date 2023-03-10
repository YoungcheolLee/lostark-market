
type Sort = "GRADE" | "YDAY_AVG_PRICE" | "RECENT_PRICE" | "CURRENT_MIN_PRICE "
type SortCondition = "ASC" | "DESC"

export interface RequestMarketItems {
    Sort?: Sort;
    CategoryCode: number;
    CharacterClass?: string;
    ItemTier?: number;
    ItemGrade?: string;
    ItemName?: string;
    PageNo?: number;
    SortCondition?: SortCondition;
}