import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { MutationKeys } from "@/constants/MutationKeys";
import { QueryKeys } from "@/constants/QueryKeys";
import { WarehouseItem } from "@/models/WarehouseItem";
import Toast from "react-native-toast-message";

// TODO: infer from form type
type Body = Omit<WarehouseItem, "id">;

export const useCreateWarehouseItem = () => {
	const queryClient = useQueryClient();

	const createWarehouseItem = async (body: Body): Promise<void> => {
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
