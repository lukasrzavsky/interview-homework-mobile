import { flexRender, Table } from "@tanstack/react-table";
import { StyleSheet, View } from "react-native";

type Props<T> = {
	table: Table<T>;
};

export const TableBody = <T,>({ table }: Props<T>) => {
	return (
		<View>
			{table.getRowModel().rows.map((row) => (
				<View key={row.id} style={styles.row}>
					<View style={styles.rowInner}>
						{row.getVisibleCells().map((cell) => (
							<View
								key={cell.id}
								style={[
									styles.cell,
									{
										width: cell.column.getSize(),
									},
								]}
							>
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext(),
								)}
							</View>
						))}
					</View>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		borderBottomWidth: 1,
		borderBottomColor: "#e9ecef",
	},
	rowInner: {
		flexDirection: "row",
	},
	cell: {
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderRightWidth: 1,
		borderRightColor: "#e9ecef",
	},
});
