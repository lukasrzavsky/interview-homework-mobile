import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { QueryKeys } from "@/constants/QueryKeys";

import { WarehouseItem } from "@/models/WarehouseItem";
import { useQuery } from "@tanstack/react-query";

export const useGetWarehouseItems = () => {
	const getWarehouseItems = async (): Promise<WarehouseItem[]> => {
		const response = await axiosInstance.get(ApiPaths.warehouseItem.list);

		return response.data;
	};

	return useQuery({
		queryKey: [QueryKeys.warehouseItems],
		queryFn: getWarehouseItems,
	});
};
