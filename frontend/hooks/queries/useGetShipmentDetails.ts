import axiosInstance from "@/api/axiosInstance";
import { ApiPaths } from "@/constants/ApiPaths";
import { QueryKeys } from "@/constants/QueryKeys";
import { Shipment } from "@/models/Shipment";
import { useQuery } from "@tanstack/react-query";

export const useGetShipmentDetails = (shipmentId: string) => {
	const getShipmentDetails = async (): Promise<Shipment> => {
		const response = await axiosInstance.get(
			ApiPaths.shipments.detail(shipmentId),
		);

		return response.data;
	};

	return useQuery({
		queryKey: [QueryKeys.shipment.details, shipmentId],
		queryFn: getShipmentDetails,
	});
};
