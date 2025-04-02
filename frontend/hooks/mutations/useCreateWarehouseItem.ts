import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { MutationKeys } from "@/constants/MutationKeys";
import { QueryKeys } from "@/constants/QueryKeys";
import Toast from "react-native-toast-message";
import { WarehouseItemFormType } from "../forms/useWarehouseItemForm";

export const useCreateWarehouseItem = () => {
	const queryClient = useQueryClient();

	const createWarehouseItem = async (
		body: WarehouseItemFormType,
	): Promise<void> => {
		const response = await axiosInstance.post(
			ApiPaths.warehouseItem.create,
			body,
		);

		return response.data;
	};

	return useMutation({
		mutationFn: createWarehouseItem,
		mutationKey: [MutationKeys.warehouseItems.create],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.warehouseItems.list],
			});
			Toast.show({
				type: "success",
				text1: "Item has been succesfully created!",
			});
		},
		onError: () => {
			Toast.show({
				type: "error",
				text1: "Failed to create item!",
			});
		},
	});
};
