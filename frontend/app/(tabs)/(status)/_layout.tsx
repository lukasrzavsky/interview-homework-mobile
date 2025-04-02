import { Stack } from "expo-router";

const StatusLayout = () => (
	<Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
		<Stack.Screen name="index" />
		<Stack.Screen name="add-warehouse-item" />
	</Stack>
);

export default StatusLayout;
