import { Stack } from "expo-router";

const StatusLayout = () => (
	<Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
		<Stack.Screen name="index" />
		<Stack.Screen name="add-warehouse-item" />
		<Stack.Screen name="[id]" />
		<Stack.Screen
			name="remove-item-confirmation-modal"
			options={{
				presentation: "transparentModal",
				headerShown: false,
				animation: "fade",
				contentStyle: styles.modalBackgroundColor,
			}}
		/>
	</Stack>
);

const styles = {
	modalBackgroundColor: {
		backgroundColor: "transparent",
	},
};

export default StatusLayout;
