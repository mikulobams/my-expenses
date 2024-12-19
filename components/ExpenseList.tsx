import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useExpenseStore from "../state/ExpensesGlobalState";
import { Expense } from "../models/Expenses";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

/**
 * ExpenseList is a component that displays a list of expenses.
 * @returns ExpenseList component
 */
export default function ExpenseList() {
  const items = useExpenseStore((state) => state.expenses.items);
  const deleteExpense = useExpenseStore((state) => state.removeExpense);
  const router = useRouter();

  const renderItem = ({ item }: { item: Expense }) => {
    return (
      <Link href={`/expenses/${item.slug}`} style={styles.expense}>
        <View>
          <Text style={styles.text}>Category: {item.category}</Text>
          <Text>Cost in GBP: {item.price}</Text>
          <Text>Date: {item.date.toString()}</Text>
          <View>
            <Button title="Delete" onPress={() => deleteExpense(item.id)} />
            <Button title="Details" onPress={() => deleteExpense(item.id)} />
          </View>
        </View>
      </Link>
    );
  };

  const total = items.reduce((tot, item) => tot + item.price, 0);

  if (items.length == 0) {
    return (
      <View style={styles.container}>
        <Text>
          You have no current expenses. Please click{" "}
          <Link href="/addExpense" style={styles.link}>
            Add Expense
          </Link>{" "}
          to add an expense.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListFooterComponent={
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: £{total}</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  expense: {
    flex: 1,
    padding: 20,
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
  },

  link: {
    color: "blue",
    borderWidth: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "black",
    fontWeight: "bold",
  },

  footer: {
    padding: 20,
    alignItems: "center",
  },

  totalText: {
    padding: 20,
    fontWeight: "900",
    color: "white",
    backgroundColor: "red",
    fontSize: 24,
    borderRadius: 20,
  },
});
