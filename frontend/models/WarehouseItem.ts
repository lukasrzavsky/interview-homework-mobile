import { ImageSourcePropType } from "react-native";

export interface WarehouseItem {
	id: number;
	imageUrl?: ImageSourcePropType; // Temp solution, once we have data from be, the type should be string
	name: string;
	description: string;
	quantity: number;
	unitPrice: number;
}
