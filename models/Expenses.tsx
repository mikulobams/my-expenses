enum Category {
  Food,
  Health,
  School,
  Bills,
  Shopping,
}

type Expense = {
  id: string;
  date: Date;
  description: string;
  category: Category;
  price: number;
};

type Expenses = {
  items: Expense[];
};

export default Expenses;
