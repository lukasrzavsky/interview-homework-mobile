import { Stack } from "expo-router";

const ShipmentLayout = () => {
	return (
		<Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
		</Stack>
	);
};

export default ShipmentLayout;
