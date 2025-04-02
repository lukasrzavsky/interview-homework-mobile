import { NUMBERS_REGEX } from "@/constants/Regexes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const WarehouseItemSchema = yup.object().shape({
	imageUrl: yup.string().required("Image is missing"),
	name: yup.string().required("Item name is missing"),
	description: yup.string().required("Item description is missing"),
	quantity: yup
		.string()
		.matches(NUMBERS_REGEX, "Must contain only numbers")
		.required("Quantity is missing"),
	unitPrice: yup
		.string()
		.matches(NUMBERS_REGEX, "Must contain only numbers")
		.required("Price is missing"),
});

export type WarehouseItemFormType = yup.InferType<typeof WarehouseItemSchema>;

export const useWarehouseItemForm = () => {
	return useForm<WarehouseItemFormType>({
		defaultValues: {
			imageUrl: "",
			name: "",
			description: "",
			quantity: "",
			unitPrice: "",
		},
		resolver: yupResolver(WarehouseItemSchema),
	});
};
