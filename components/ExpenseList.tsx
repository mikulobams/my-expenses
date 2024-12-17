import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useExpenseStore from "../state/ExpensesGlobalState";
import { Expense } from "../models/Expenses";
import { Link } from "expo-router";

const ExpenseList = () => {
  const items = useExpenseStore((state) => state.expenses.items);
  const renderItem = ({ item }: { item: Expense }) => {
    return (
      <Link href={`../app/expenses/${item.slug}`} style={styles.expense}>
        <View>
          <Text>Category: {item.category}</Text>
          <Text>Cost in GBP: {item.price}</Text>
          <Text>Date: {item.date.toString()}</Text>
        </View>
      </Link>
    );
  };

  if (!items) {
    return (
      <SafeAreaView>
        <View>
          <Text>
            You have no current expenses. Please click{" "}
            <Link href="../app/(tabs)/addExpense.tsx">Add Expense</Link>
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  expense: {
    padding: 20,
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
  },
});
