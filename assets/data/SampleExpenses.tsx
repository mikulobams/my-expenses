import { Category, Expense, Expenses } from "../../models/Expenses";

const sampleExpenses: Expenses = {
  items: [
    {
      id: "1",
      date: new Date("2024-12-01T08:30:42"),
      description: "Grocery shopping at Tesco",
      category: Category.Food,
      price: 45.99,
      slug: "grocery-shopping-at-tesco",
    },
    {
      id: "2",
      date: new Date("2024-12-02T15:45"),
      description: "Doctor visit",
      category: Category.Health,
      price: 80.0,
      slug: "doctor-visit",
    },
    {
      id: "3",
      date: new Date("2024-12-03T21:21:16"),
      description: "School supplies for kids",
      category: Category.School,
      price: 25.5,
      slug: "school-supplies-for-kids",
    },
    {
      id: "4",
      date: new Date("2024-12-04T23:45:21"),
      description: "Utility bill payment",
      category: Category.Bills,
      price: 120.0,
      slug: "utility-bill-payment",
    },
    {
      id: "5",
      date: new Date("2024-12-05T22:34"),
      description: "Online shopping at Amazon",
      category: Category.Shopping,
      price: 75.0,
      slug: "online-shopping-at-amazon",
    },
  ],
};

export default sampleExpenses;
