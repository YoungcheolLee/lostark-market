export interface MarketOption {
  Categories: Category[];
  Classes: string[];
  ItemGrades: string[];
  ItemTiers: number[];

}

interface Category {
  Subs: CategoryItem[];
  Code: number;
  CodeName: string;
}

interface CategoryItem {
  Code: number;
  CodeName: string;
}
