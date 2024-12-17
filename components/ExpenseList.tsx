import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useExpenseStore from "../state/ExpensesGlobalState";
import { Expense } from "../models/Expenses";
import { Link } from "expo-router";

function ExpenseList() {
  const items = useExpenseStore((state) => state.expenses.items);
  /**
   *
   * @param param0
   * @returns
   */
  const renderItem = ({ item }: { item: Expense }) => {
    return (
      <Link href={`/expenses/${item.slug}`} style={styles.expense}>
        <View>
          <Text style={styles.text}>Category: {item.category}</Text>
          <Text>Cost in GBP: {item.price}</Text>
          <Text>Date: {item.date.toString()}</Text>
        </View>
      </Link>
    );
  };

  if (items.length == 0) {
    return (
      // <SafeAreaView>
      //   <View>
      //     <Text>
      //       You have no current expenses. Please click{" "}
      //       <Link href="/addExpense" style={styles.link}>
      //         Add Expense
      //       </Link>{" "}
      //       to add an expense.
      //     </Text>
      //   </View>
      // </SafeAreaView>

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
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default ExpenseList;

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
});
