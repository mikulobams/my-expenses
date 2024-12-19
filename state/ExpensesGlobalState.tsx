import { create } from "zustand";
import slugify from "slugify";
import { Category, Expense, Expenses } from "../models/Expenses";
import sampleExpenses from "../assets/data/SampleExpenses";

/**
 * The model of an expense
 */
interface ExpenseState {
  expenses: Expenses;
  addExpense: (expense: Omit<Expense, "slug">) => void;
  removeExpense: (id: string) => void;
}

/**
 * The global state of the expenses store.
 */
const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: { items: sampleExpenses.items },
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

export default useExpenseStore;
