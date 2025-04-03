import {
	ColumnDef,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
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
		<ScrollView>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.scrollViewContent}
			>
				<View>
					<TableHeader table={table} />
					{!data.length ? (
						<ThemedText
							type="subtitle"
							style={styles.emptyDataText}
						>
							No data to display
						</ThemedText>
					) : (
						<TableBody table={table} />
					)}
				</View>
			</ScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollViewContent: {
		flexGrow: 1,
	},
	emptyDataText: {
		padding: 24,
	},
});
