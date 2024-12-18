import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useExpenseStore from "../../../../state/ExpensesGlobalState";
import ExpenseDetailScreen from "../../../../components/ExpenseDetail";
import { useNavigation } from "expo-router";

export default function DetailScreen() {
  const { slug } = useLocalSearchParams();
  const items = useExpenseStore((state) => state.expenses.items);
  const [currentExpense] = items.filter((item) => item.slug === slug);
  const navigation = useNavigation();

  return (
    <ExpenseDetailScreen
      id={currentExpense.id}
      category={currentExpense.category}
      date={currentExpense.date}
      description={currentExpense.description}
      price={currentExpense.price}
      slug={currentExpense.slug}
    />
  );
}

const styles = StyleSheet.create({});
