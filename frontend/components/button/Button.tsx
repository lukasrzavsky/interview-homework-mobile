import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
	onPress: VoidFunction;
	label: string;
	disabled?: boolean;
	isLoading?: boolean;
};

export const Button: React.FC<Props> = ({
	onPress,
	label,
	disabled = false,
	isLoading = false,
}) => {
	const isDisabled = disabled || isLoading;

	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={[styles.container, isDisabled ? styles.disabled : undefined]}
			onPress={onPress}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color="#FFF" />
			) : (
				<ThemedText type="defaultSemiBold" lightColor="#FFF">
					{label}
				</ThemedText>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderWidth: 1.5,
		borderColor: "#040404",
		borderRadius: 32,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#040404",
	},
	disabled: {
		opacity: 40,
	},
});
