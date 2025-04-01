import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { MutationKeys } from "@/constants/MutationKeys";
import { QueryKeys } from "@/constants/QueryKeys";
import { WarehouseItem } from "@/models/WarehouseItem";
import Toast from "react-native-toast-message";

export const useEditWarehouseItem = () => {
	const queryClient = useQueryClient();

	const editWarehouseItem = async ({
		id,
		...rest
	}: WarehouseItem): Promise<void> => {
		const response = await axiosInstance.put(
			ApiPaths.warehouseItem.edit(id),
			rest,
		);

		return response.data;
	};

	return useMutation({
		mutationFn: editWarehouseItem,
		mutationKey: [MutationKeys.warehouseItems.edit],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.warehouseItems.list],
			});
			Toast.show({
				type: "success",
				text1: "Item has been succesfully updated!",
			});
		},
		onError: () => {
			Toast.show({
				type: "error",
				text1: "Failed to update item!",
			});
		},
	});
};
