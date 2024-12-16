export enum Category {
  Food,
  Health,
  School,
  Bills,
  Shopping,
}

export type Expense = {
  id: string;
  date: Date;
  description: string;
  category: Category;
  price: number;
  slug: string;
};

export type Expenses = {
  items: Expense[];
};
