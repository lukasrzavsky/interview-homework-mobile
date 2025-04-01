import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";

const TabsLayout = () => {
	const tabBarActiveTintColor = useThemeColor({}, "tabIconSelected");

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor,
				headerShown: false,
			}}
			backBehavior="history"
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Status",
					tabBarIcon: ({ color }) => (
						<IconSymbol name="table" color={color} />
					),
					href: "/",
				}}
			/>
			<Tabs.Screen
				name="shipments"
				options={{
					title: "Shipment",
					tabBarIcon: ({ color }) => (
						<IconSymbol name="export" color={color} />
					),
					href: "/shipments",
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
