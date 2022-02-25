import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import NewsCard from "./components/NewsCard";

import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json";
export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                key={bannerNews.id}
                style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: "#eceff1",
  },
  banner_image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 2,
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 45,
    marginLeft: 10,
  },
});
