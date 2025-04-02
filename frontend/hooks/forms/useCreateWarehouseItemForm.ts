import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CreateWarehouseItemSchema = yup.object().shape({
	imageUrl: yup.string().required("Image is missing"),
	name: yup.string().required("Item name is missing"),
	description: yup.string().required("Item description is missing"),
	quantity: yup.string().required("Quantity is missing"),
	unitPrice: yup.string().required("Price is missing"),
});

export type CreateWarehouseItemFormType = yup.InferType<
	typeof CreateWarehouseItemSchema
>;

export const useCreateWarehouseItemForm = () => {
	return useForm<CreateWarehouseItemFormType>({
		defaultValues: {
			imageUrl: "",
			name: "",
			description: "",
			quantity: "",
			unitPrice: "",
		},
		resolver: yupResolver(CreateWarehouseItemSchema),
	});
};
