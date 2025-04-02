import { Stack } from "expo-router";

const WarehouseItemLayout = () => (
	<Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
		<Stack.Screen name="index" />
		<Stack.Screen name="edit" />
	</Stack>
);

export default WarehouseItemLayout;
