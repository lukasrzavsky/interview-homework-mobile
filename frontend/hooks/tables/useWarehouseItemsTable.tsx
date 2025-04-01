import { WarehouseItem } from "@/models/WarehouseItem";
import { createColumnHelper } from "@tanstack/react-table";
import { useCallback, useState } from "react";
import { useThemeColor } from "../useThemeColor";

import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ProductsMock } from "@/mocks/Products.mock";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const useWarehouseItemsTable = () => {
	const [products, setProducts] = useState<WarehouseItem[]>(ProductsMock);

	const iconTintColor = useThemeColor({}, "icon");

	const columnHelper = createColumnHelper<WarehouseItem>();

	// const { mutate, isPending } = useRemoveWarehouseItem();

	const handleEdit = (item: WarehouseItem) => {
		console.log("Edit item:", item);
	};

	const handleDelete = useCallback(
		(id: number) => {
			// mutate(id);
			setProducts((previousProducts) =>
				previousProducts.filter((product) => product.id !== id),
			);
		},
		[setProducts],
	);

	const columns = [
		columnHelper.accessor("id", {
			header: "ID",
			cell: (info) => (
				<ThemedText style={styles.cellText}>
					{info.getValue()}
				</ThemedText>
			),
			size: 80,
		}),
		columnHelper.accessor("name", {
			header: "Name",
			cell: (info) => (
				<ThemedText style={styles.cellText}>
					{info.getValue()}
				</ThemedText>
			),
			size: 150,
		}),
		columnHelper.accessor("quantity", {
			header: "Quantity",
			cell: (info) => (
				<ThemedText style={styles.cellText}>
					{info.getValue()}
				</ThemedText>
			),
			size: 150,
		}),
		columnHelper.accessor("unitPrice", {
			header: "Unit Price",
			cell: (info) => (
				<ThemedText style={styles.cellText} numberOfLines={1}>
					{info.getValue()}
				</ThemedText>
			),
			size: 250,
		}),
		columnHelper.display({
			id: "actions",
			header: "Actions",
			cell: ({ row }) => (
				<View style={styles.actionContainer}>
					<TouchableOpacity
						// disabled={isPending}
						onPress={() => handleEdit(row.original)}
						style={styles.actionButton}
					>
						<IconSymbol name="edit" color={iconTintColor} />
					</TouchableOpacity>
					<TouchableOpacity
						// disabled={isPending}
						onPress={() => handleDelete(row.original.id)}
						style={styles.actionButton}
					>
						<IconSymbol name="delete" color={iconTintColor} />
					</TouchableOpacity>
				</View>
			),
			size: 100,
		}),
	];

	return { products, columns };
};

const styles = StyleSheet.create({
	cellText: {
		textAlign: "center",
		color: "#495057",
	},
	actionContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	actionButton: {
		marginHorizontal: 4,
	},
});
