export const ApiPaths = {
	warehouseItem: {
		list: "/warehouseItems",
		delete: (itemId: string) => `/warehouseItems/${itemId}`,
	},
	shipments: {
		list: "/shipments",
	},
};
