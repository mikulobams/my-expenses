import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="expenses"
        options={{ headerShown: false, title: "Expense Details" }}
      />
      <Stack.Screen
        name="total"
        options={{ headerShown: false, title: "Total" }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
