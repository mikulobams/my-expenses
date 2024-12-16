import { create } from "zustand";
import { Category, Expenses, Expense } from "../models/Expenses";

interface ExpenseState {
  expenses: Expenses;
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
}

export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: { items: [] },
  addExpense: (expense) =>
    set((state) => ({
      expenses: { items: [...state.expenses.items, expense] },
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: {
        items: state.expenses.items.filter((expense) => expense.id !== id),
      },
    })),
}));
