export interface MarketOption {
    Categories: Category[];
    ItemGrades: string[];
    ItemTiers: number[];
    Classes: string[];
}

interface Category{
    Subs: CategoryItem[];
    Code: number;
    COdeName: string;
}

interface CategoryItem {
    Code: number;
    CodeName: string;
}