import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Category, Expense } from "../../models/Expenses";
import useExpenseStore from "../../state/ExpensesGlobalState";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddExpenseScreen = () => {
  const { addExpense } = useExpenseStore();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<Category>(Category.Food);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = () => {
    if (!description || !price || !category || !date) return;
    const newExpense: Omit<Expense, "slug"> = {
      id: Date.now().toString(),
      date,
      description,
      category,
      price: parseFloat(price),
    };
    addExpense(newExpense);
    setDescription("");
    setPrice("");
    setCategory(Category.Food);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {Object.values(Category).map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>

      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default AddExpenseScreen;
