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
				name="(status)"
				options={{
					title: "Status",
					tabBarIcon: ({ color }) => (
						<IconSymbol name="table" color={color} />
					),
					href: "/(tabs)/(status)",
				}}
			/>
			<Tabs.Screen
				name="(shipment)"
				options={{
					title: "Shipment",
					tabBarIcon: ({ color }) => (
						<IconSymbol name="export" color={color} />
					),
					href: "/(tabs)/(shipment)",
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
