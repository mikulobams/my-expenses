/**
 * This file contains the types for Category, Expense and Expenses.
 */

/**
 * Category is an enum that represents the different categories of expenses.
 */
export enum Category {
  Food = "FOOD",
  Health = "HEALTH",
  School = "SCHOOL",
  Bills = "BILLS",
  Shopping = "SHOPPING",
}

/**
 * Expense is an interface that represents the structure of an expense.
 */
export type Expense = {
  id: string;
  date: Date;
  description: string;
  category: Category;
  price: number;
  slug: string;
};

/**
 * Expenses is an interface that represents the structure of a list of expenses.
 */
export type Expenses = {
  items: Expense[];
};
