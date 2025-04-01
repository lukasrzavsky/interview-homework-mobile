export const ApiPaths = {
	warehouseItem: {
		list: "/warehouseItems",
		create: "/warehouseItems",
		edit: (itemId: number) => `/warehouseItems/${itemId}`,
		delete: (itemId: string) => `/warehouseItems/${itemId}`,
		detail: (itemId: string) => `/warehouseItems/${itemId}`,
	},
	shipments: {
		list: "/shipments",
		delete: (itemId: string) => `/shipments/${itemId}`,
		detail: (itemId: string) => `/shipments/${itemId}`,
	},
};
