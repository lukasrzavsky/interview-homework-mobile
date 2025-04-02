import { Button } from "@/components/button/Button";
import Layout from "@/components/layout/Layout";
import { Table } from "@/components/table/Table";
import { ThemedText } from "@/components/ThemedText";
import { useWarehouseItemsTable } from "@/hooks/tables/useWarehouseItemsTable";
import { router } from "expo-router";

import React from "react";
import { StyleSheet, View } from "react-native";

const WarehouseStatusScreen: React.FC = () => {
	const { products, columns } = useWarehouseItemsTable();

	const handleOnAddItemPress = () =>
		router.push("/(tabs)/(status)/add-warehouse-item");

	return (
		<Layout hasBackButton={false}>
			<View style={styles.headerContainer}>
				<ThemedText type="title">Items</ThemedText>
				<Button label="Add Item" onPress={handleOnAddItemPress} />
			</View>
			<Table data={products} columns={columns} />
		</Layout>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
});

export default WarehouseStatusScreen;
