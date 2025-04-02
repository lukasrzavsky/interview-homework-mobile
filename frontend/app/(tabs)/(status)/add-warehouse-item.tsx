import { Button } from "@/components/button/Button";
import ImageInput from "@/components/input/ImageInput";
import { Input } from "@/components/input/Input";
import { KeyboardAvoidingWrapper } from "@/components/keyboardAvoidingWrapper/KeyboardAvoidingWrapper";
import Layout from "@/components/layout/Layout";
import { ThemedText } from "@/components/ThemedText";
import {
	CreateWarehouseItemFormType,
	useCreateWarehouseItemForm,
} from "@/hooks/forms/useCreateWarehouseItemForm";
import { useCreateWarehouseItem } from "@/hooks/mutations/useCreateWarehouseItem";
import { FormProvider } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";

const AddWarehouseItem: React.FC = () => {
	const formMethods = useCreateWarehouseItemForm();

	const { mutate, isPending } = useCreateWarehouseItem();

	const { handleSubmit } = formMethods;

	const handleOnSubmitPress = (args: CreateWarehouseItemFormType) =>
		mutate(args);

	return (
		<Layout>
			<KeyboardAvoidingWrapper>
				<ThemedText type="title" style={styles.header}>
					Add Item
				</ThemedText>
				<FormProvider {...formMethods}>
					<ScrollView contentContainerStyle={styles.form}>
						<Input name="name" placeholder="Name" />
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
						<ImageInput name="imageUrl" label="Image" />
						<Button
							label="Add"
							onPress={handleSubmit(handleOnSubmitPress)}
							isLoading={isPending}
						/>
					</ScrollView>
				</FormProvider>
			</KeyboardAvoidingWrapper>
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
		paddingBottom: 36,
	},
});

export default AddWarehouseItem;
