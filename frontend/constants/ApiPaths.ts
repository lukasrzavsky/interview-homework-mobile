export const ApiPaths = {
	warehouseItem: {
		list: "/warehouseItems",
		create: "/warehouseItems",
		edit: (itemId: number) => `/warehouseItems/${itemId}`,
		delete: (itemId: number) => `/warehouseItems/${itemId}`,
		detail: (itemId: number) => `/warehouseItems/${itemId}`,
	},
	shipments: {
		list: "/shipments",
		delete: (itemId: number) => `/shipments/${itemId}`,
		detail: (itemId: number) => `/shipments/${itemId}`,
	},
};
