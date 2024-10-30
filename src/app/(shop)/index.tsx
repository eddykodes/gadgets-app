import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flatList: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  flatListContent: { paddingBottom: 20 },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
