import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/api/axiosInstance";

import { ApiPaths } from "@/constants/ApiPaths";
import { MutationKeys } from "@/constants/MutationKeys";
import { QueryKeys } from "@/constants/QueryKeys";
import Toast from "react-native-toast-message";

export const useRemoveWarehouseItem = () => {
	const queryClient = useQueryClient();

	const removeWarehouseItem = async (itemId: number): Promise<void> => {
		const response = await axiosInstance.delete(
			ApiPaths.warehouseItem.delete(itemId),
		);

		return response.data;
	};

	return useMutation({
		mutationFn: removeWarehouseItem,
		mutationKey: [MutationKeys.warehouseItems.remove],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.warehouseItems.list],
			});

			Toast.show({
				type: "success",
				text1: "Item has been successfully removed!",
			});
		},
		onError: () => {
			Toast.show({
				type: "error",
				text1: "Failed to remove item!",
			});
		},
	});
};
