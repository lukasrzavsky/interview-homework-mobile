import { WarehouseItemForm } from "@/components/forms/WarehouseItemForm";
import Layout from "@/components/layout/Layout";
import {
	WarehouseItemFormType,
	useWarehouseItemForm,
} from "@/hooks/forms/useWarehouseItemForm";
import { useCreateWarehouseItem } from "@/hooks/mutations/useCreateWarehouseItem";
import { router } from "expo-router";
import { FormProvider } from "react-hook-form";

const AddWarehouseItem: React.FC = () => {
	const formMethods = useWarehouseItemForm();

	const { mutate, isPending } = useCreateWarehouseItem();

	const { handleSubmit } = formMethods;

	const handleOnSubmitPress = (args: WarehouseItemFormType) =>
		mutate(args, { onSuccess: router.back });

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

export default AddWarehouseItem;
