import { WarehouseItemForm } from "@/components/forms/WarehouseItemForm";
import Layout from "@/components/layout/Layout";
import {
	WarehouseItemFormType,
	useWarehouseItemForm,
} from "@/hooks/forms/useWarehouseItemForm";
import { useCreateWarehouseItem } from "@/hooks/mutations/useCreateWarehouseItem";
import { FormProvider } from "react-hook-form";
import { StyleSheet } from "react-native";

const AddWarehouseItem: React.FC = () => {
	const formMethods = useWarehouseItemForm();

	const { mutate, isPending } = useCreateWarehouseItem();

	const { handleSubmit } = formMethods;

	const handleOnSubmitPress = (args: WarehouseItemFormType) => mutate(args);

	return (
		<Layout>
			<FormProvider {...formMethods}>
				<WarehouseItemForm
					title="Add Item"
					buttonProps={{
						label: "Add",
						onPress: handleSubmit(handleOnSubmitPress),
						isLoading: isPending,
					}}
				/>
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
		paddingBottom: 36,
	},
});

export default AddWarehouseItem;
