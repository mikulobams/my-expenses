import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: true, title: "My Expenses" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "Categories" }}
      />
      <Stack.Screen
        name="expenses"
        options={{ headerShown: true, title: "Expense Details" }}
      />
      <Stack.Screen
        name="total"
        options={{ headerShown: true, title: "Total" }}
      />
    </Stack>
  );
}
