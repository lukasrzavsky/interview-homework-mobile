import { flexRender, Table } from "@tanstack/react-table";
import { StyleSheet, Text, View } from "react-native";

type Props<T> = {
	table: Table<T>;
};

export const TableHeader = <T,>({ table }: Props<T>) => (
	<View style={styles.headerRow}>
		{table.getHeaderGroups().map((headerGroup) => (
			<View key={headerGroup.id} style={styles.headerRowInner}>
				{headerGroup.headers.map((header) => (
					<View
						key={header.id}
						style={[
							styles.headerCell,
							{
								width: header.column.getSize(),
							},
						]}
					>
						<Text style={styles.headerText} numberOfLines={1}>
							{flexRender(
								header.column.columnDef.header,
								header.getContext(),
							)}
						</Text>
					</View>
				))}
			</View>
		))}
	</View>
);

const styles = StyleSheet.create({
	headerRow: {
		backgroundColor: "#000",
		borderBottomWidth: 1,
		borderBottomColor: "#cecece",
	},
	headerRowInner: {
		flexDirection: "row",
	},
	headerCell: {
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderRightWidth: 1,
		borderRightColor: "#cecece",
	},
	headerText: {
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
	},
});
