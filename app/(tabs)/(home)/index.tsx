import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../../../components/ExpenseList";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View>
      <StatusBar style="dark" hidden={false} animated={true} />
      <ExpenseList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
