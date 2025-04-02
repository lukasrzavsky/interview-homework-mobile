import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const HEADER_HEIGHT = 150;
export const KeyboardAvoidingWrapper: React.FC<PropsWithChildren> = ({
	children,
}) => (
	<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={styles.container}
		keyboardVerticalOffset={Platform.OS === "ios" ? HEADER_HEIGHT : 0}
	>
		{children}
	</KeyboardAvoidingView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
