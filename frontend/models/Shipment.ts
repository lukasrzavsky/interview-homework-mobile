import { WarehouseItem } from "./WarehouseItem";

export interface Shipment {
	id: number;
	customerName: string;
	address: string;
	price: string;
	items: WarehouseItem[];
}
