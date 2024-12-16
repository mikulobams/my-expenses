import { create } from "zustand";
import slugify from "slugify";
import { Category, Expense, Expenses } from "../src/models/Expenses";

interface ExpenseState {
  expenses: Expenses;
  addExpense: (expense: Omit<Expense, "slug">) => void;
  removeExpense: (id: string) => void;
}

const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: { items: [] },
  addExpense: (expense) =>
    set((state) => {
      const slug = slugify(expense.description, { lower: true });
      const newExpense: Expense = { ...expense, slug };
      return { expenses: { items: [...state.expenses.items, newExpense] } };
    }),
  removeExpense: (id) =>
    set((state) => ({
      expenses: {
        items: state.expenses.items.filter((expense) => expense.id !== id),
      },
    })),
}));
