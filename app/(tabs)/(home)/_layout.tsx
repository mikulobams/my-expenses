import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="expenses"
        options={{ headerShown: true, title: "Expense Details" }}
      />
    </Stack>
  );
}
