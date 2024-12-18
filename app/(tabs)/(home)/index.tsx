import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../../../components/ExpenseList";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" hidden={false} animated={true} />
      <ExpenseList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
