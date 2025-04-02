import { WarehouseItemForm } from "@/components/forms/WarehouseItemForm";
import Layout from "@/components/layout/Layout";
import {
	WarehouseItemFormType,
	useWarehouseItemForm,
} from "@/hooks/forms/useWarehouseItemForm";
import { useEditWarehouseItem } from "@/hooks/mutations/useEditWarehouseItem";
import { ProductsMock } from "@/mocks/Products.mock";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";

const EditWarehouseItemScreen = () => {
	const { id } = useLocalSearchParams<{ id: string }>();

	const currentMockProductID = +id - 1;

	const data = ProductsMock[currentMockProductID];

	const formMethods = useWarehouseItemForm();

	const { mutate, isPending } = useEditWarehouseItem();

	const { handleSubmit, reset } = formMethods;

	const handleOnSubmitPress = ({
		imageUrl,
		name,
		description,
		quantity,
		unitPrice,
	}: WarehouseItemFormType) =>
		mutate({
			imageUrl,
			name,
			description,
			quantity: +quantity,
			unitPrice: +unitPrice,
			id: +id,
		});

	useEffect(() => {
		if (!data) {
			return;
		}

		const { imageUrl, name, description, quantity, unitPrice } = data;

		reset({
			imageUrl, // imageUrl is not currently working because we don't have correct URl => would be fixed once BE is sending the imageUrl
			name,
			description,
			quantity: String(quantity),
			unitPrice: String(unitPrice),
		});
	}, [data]);

	return (
		<Layout>
			<FormProvider {...formMethods}>
				<WarehouseItemForm
					title={`Edit Item - ${data.name}`}
					buttonProps={{
						label: "Edit",
						onPress: handleSubmit(handleOnSubmitPress),
						isLoading: isPending,
					}}
				/>
			</FormProvider>
		</Layout>
	);
};

export default EditWarehouseItemScreen;
