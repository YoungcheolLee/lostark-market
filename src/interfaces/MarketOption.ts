export interface MarketOption {
  Categories: Category[];
  Classes: string[];
  
  ItemGrades: string[];
  ItemTiers: number[]; // 0 / 1 / 2 / 3
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
