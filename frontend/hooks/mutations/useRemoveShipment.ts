import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/api/axiosInstance";

import { ApiPaths } from "@/constants/ApiPaths";
import { MutationKeys } from "@/constants/MutationKeys";
import { QueryKeys } from "@/constants/QueryKeys";
import Toast from "react-native-toast-message";

export const useRemoveShipment = () => {
	const queryClient = useQueryClient();

	const removeShipment = async (itemId: string): Promise<void> => {
		const response = await axiosInstance.delete(
			ApiPaths.shipments.delete(itemId),
		);

		return response.data;
	};

	return useMutation({
		mutationFn: removeShipment,
		mutationKey: [MutationKeys.shipment.remove],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.shipment.list],
			});

			Toast.show({
				type: "success",
				text1: "Shipment has been successfully removed!",
			});
		},
		onError: () => {
			Toast.show({
				type: "error",
				text1: "Failed to remove Shipment!",
			});
		},
	});
};
