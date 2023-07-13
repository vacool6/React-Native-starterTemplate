import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
//
import Header from "../components/header";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
