type Sort = "GRADE" | "YDAY_AVG_PRICE" | "RECENT_PRICE" | "CURRENT_MIN_PRICE"
type SortCondition = "ASC" | "DESC"

export interface RequestMarketItems {
    // 반영되는 검색 옵션
    CategoryCode?: number;
    CharacterClass?: string;

    // 미반영 옵션
    ItemTier?: number;
    ItemGrade?: string;
    ItemName?: string;

    Sort?: Sort;
    PageNo?: number;
    SortCondition?: SortCondition;
}