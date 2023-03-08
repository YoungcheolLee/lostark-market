export interface MarketOption {
    Categories: Category[];
    ItemGrades: string[];
    ItemTiers: number[];
    Classes: string[];
}

interface Category extends CategoryItem{
    Subs: CategoryItem[];
}

interface CategoryItem {
    Code: number;
    CodeName: string;
}