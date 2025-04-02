import { WarehouseItem } from "@/models/WarehouseItem";
import { createColumnHelper } from "@tanstack/react-table";
import { useCallback, useState } from "react";
import { useThemeColor } from "../useThemeColor";

import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ProductsMock } from "@/mocks/Products.mock";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const useWarehouseItemsTable = () => {
	const [products, setProducts] = useState<WarehouseItem[]>(ProductsMock);

	// NOTE: all these comments are by purpose, I want to show how it will work with BE endpoints
	// const {data, isLoading, isError} = useGetWarehouseItems();

	const iconTintColor = useThemeColor({}, "icon");

	const columnHelper = createColumnHelper<WarehouseItem>();

	// const { mutate, isPending } = useRemoveWarehouseItem();

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
			cell: (info) => {
				const itemId = info.getValue();

				return (
					<Link href={`/(tabs)/(status)/${itemId}`}>
						<ThemedText style={styles.cellText}>
							{itemId}
						</ThemedText>
					</Link>
				);
			},
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
					<Link href={`/(tabs)/(status)/${row.original.id}/edit`}>
						<IconSymbol name="edit" color={iconTintColor} />
					</Link>
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

	// useEffect(() => {
	//   if(isError) {
	// 	Toast.show({
	// 		type: 'error',
	// 		text1: 'Failed to load warehouse items!'
	// 	  });
	//   }

	// }, [isError, Toast])

	// return { products: data, columns, isLoading };
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
