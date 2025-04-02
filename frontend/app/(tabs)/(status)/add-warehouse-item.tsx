import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import Layout from "@/components/layout/Layout";
import { ThemedText } from "@/components/ThemedText";
import {
	CreateWarehouseItemFormType,
	useCreateWarehouseItemForm,
} from "@/hooks/forms/useCreateWarehouseItemForm";
import { useCreateWarehouseItem } from "@/hooks/mutations/useCreateWarehouseItem";
import { FormProvider } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const AddWarehouseItem = () => {
	const formMethods = useCreateWarehouseItemForm();

	const { mutate, isPending } = useCreateWarehouseItem();

	const { handleSubmit } = formMethods;

	const handleOnSubmitPress = (args: CreateWarehouseItemFormType) =>
		mutate(args);

	return (
		<Layout>
			<ThemedText type="title" style={styles.header}>
				Add Item
			</ThemedText>
			<FormProvider {...formMethods}>
				<View style={styles.form}>
					<Input name="name" placeholder="Name" />
					<Input name="imageUrl" placeholder="Url" />
					<Input name="description" placeholder="Description" />
					<Input
						name="quantity"
						keyboardType="numeric"
						placeholder="Quantity"
					/>
					<Input
						name="unitPrice"
						keyboardType="numeric"
						placeholder="Price"
					/>
					<Button
						label="Add"
						onPress={handleSubmit(handleOnSubmitPress)}
						isLoading={isPending}
					/>
				</View>
			</FormProvider>
		</Layout>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	form: {
		gap: 12,
		paddingHorizontal: 24,
	},
});

export default AddWarehouseItem;
