import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name={"(home)"}
        options={{
          headerShown: false,
          title: "Expenses",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons name="attach-money" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name={"addExpense"}
        options={{
          headerShown: true,
          title: "Add Expense",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "add-circle" : "add-circle-outline";
            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
