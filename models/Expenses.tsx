export enum Category {
  Food = "FOOD",
  Health = "HEALTH",
  School = "SCHOOL",
  Bills = "BILLS",
  Shopping = "SHOPPING",
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
