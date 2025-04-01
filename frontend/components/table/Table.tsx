import {
	ColumnDef,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

type Props<T> = {
	columns: ColumnDef<T, any>[];
	data: T[];
};

export const Table = <T,>({ data, columns }: Props<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<ThemedText type="title">Items</ThemedText>
				<Link href="/(tabs)/(status)/add-warehouse-item">
					<ThemedText type="link">Add Item</ThemedText>
				</Link>
			</View>
			<ScrollView>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewContent}
				>
					<View>
						<TableHeader table={table} />
						<TableBody table={table} />
					</View>
				</ScrollView>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	scrollViewContent: {
		flexGrow: 1,
	},
});
