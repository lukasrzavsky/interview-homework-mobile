export const ApiPaths = {
	warehouseItem: {
		list: "/warehouseItems",
		delete: (itemId: string) => `/warehouseItems/${itemId}`,
		detail: (itemId: string) => `/warehouseItems/${itemId}`,
	},
	shipments: {
		list: "/shipments",
		detail: (itemId: string) => `/shipments/${itemId}`,
	},
};
