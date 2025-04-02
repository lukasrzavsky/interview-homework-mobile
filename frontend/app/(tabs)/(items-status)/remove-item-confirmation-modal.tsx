import { Button } from "@/components/button/Button";
import { ModalLayout } from "@/components/layout/ModalLayout";
import { ThemedText } from "@/components/ThemedText";
import { useRemoveWarehouseItem } from "@/hooks/mutations/useRemoveWarehouseItem";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const RemoveItemConfirmationModalScreen = () => {
	const { itemId } = useLocalSearchParams<{ itemId: string }>();

	const { mutate, isPending } = useRemoveWarehouseItem();

	const handleOnRemoveItem = () =>
		mutate(+itemId, {
			onSuccess: router.back,
		});

	return (
		<ModalLayout>
			<View style={styles.container}>
				<ThemedText type="title" style={styles.centeredText}>
					Are you sure you want to remove the item?
				</ThemedText>
				<ThemedText style={styles.centeredText}>
					Confirm to delete the item
				</ThemedText>
				<Button
					label="Remove"
					isLoading={isPending}
					onPress={handleOnRemoveItem}
				/>
			</View>
		</ModalLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 12,
		paddingVertical: 32,
		paddingHorizontal: 16,
	},
	centeredText: {
		textAlign: "center",
	},
});

export default RemoveItemConfirmationModalScreen;
