import { Table } from "@/components/table/Table";
import { useWarehouseItemsTable } from "@/hooks/tables/useWarehouseItemsTable";

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const WarehouseStatusScreen: React.FC = () => {
	const { products, columns } = useWarehouseItemsTable();

	return (
		<SafeAreaView style={styles.container}>
			<Table data={products} columns={columns} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default WarehouseStatusScreen;
