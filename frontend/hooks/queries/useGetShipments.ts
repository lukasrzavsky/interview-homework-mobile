import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { QueryKeys } from "@/constants/QueryKeys";
import { Shipment } from "@/models/Shipment";

import { useQuery } from "@tanstack/react-query";

export const useGetShipments = () => {
	const getShipments = async (): Promise<Shipment[]> => {
		const response = await axiosInstance.get(ApiPaths.shipments.list);

		return response.data;
	};

	return useQuery({
		queryKey: [QueryKeys.shipments],
		queryFn: getShipments,
	});
};
