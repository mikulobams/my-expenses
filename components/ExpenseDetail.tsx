import { Expense } from "../models/Expenses";
import { StyleSheet, View, Text } from "react-native";

export default function ExpenseDetailScreen({
  id,
  category,
  date,
  description,
  price,
  slug,
}: Expense) {
  return (
    <View style={styles.expense}>
      <Text style={styles.text}>Expense ID: {id}</Text>
      <Text style={styles.text}>Category: {category}</Text>
      <Text style={styles.text}>Price: £{price}</Text>
      <Text>Date: {date.toLocaleDateString()}</Text>
      <Text>Time: {date.toLocaleTimeString()}</Text>
      <Text>Description: {description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  expense: {
    flex: 1,
    padding: 20,
    borderColor: "blue",
    borderWidth: 2,
    margin: 5,
    borderRadius: 20,
  },

  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
});
