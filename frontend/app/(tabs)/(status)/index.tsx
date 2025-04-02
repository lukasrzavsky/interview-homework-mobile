import Layout from "@/components/layout/Layout";
import { Table } from "@/components/table/Table";
import { ThemedText } from "@/components/ThemedText";
import { useWarehouseItemsTable } from "@/hooks/tables/useWarehouseItemsTable";
import { Link } from "expo-router";

import React from "react";
import { StyleSheet, View } from "react-native";

const WarehouseStatusScreen: React.FC = () => {
	const { products, columns } = useWarehouseItemsTable();

	return (
		<Layout hasBackButton={false}>
			<View style={styles.headerContainer}>
				<ThemedText type="title">Items</ThemedText>
				<Link href="/(tabs)/(status)/add-warehouse-item">
					<ThemedText type="link">Add Item</ThemedText>
				</Link>
			</View>
			<Table data={products} columns={columns} />
		</Layout>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
});

export default WarehouseStatusScreen;
