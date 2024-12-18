import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import useExpenseStore from "../../../../state/ExpensesGlobalState";
import ExpenseDetailScreen from "../../../../components/ExpenseDetail";

export default function DetailScreen() {
  const { slug } = useLocalSearchParams();
  const items = useExpenseStore((state) => state.expenses.items);
  const [currentExpense] = items.filter((item) => item.slug === slug);

  return (
    <>
      <Stack.Screen options={{ title: "Expense Details" }} />
      <ExpenseDetailScreen
        id={currentExpense.id}
        category={currentExpense.category}
        date={currentExpense.date}
        description={currentExpense.description}
        price={currentExpense.price}
        slug={currentExpense.slug}
      />
    </>
  );
}

const styles = StyleSheet.create({});
