import { useController, useFormContext } from "react-hook-form";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = Omit<TextInputProps, "onChangeText, value"> & {
	name: string;
};

export const Input = ({ name, ...rest }: Props) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({ control, name });

	const { onChange, value } = field;

	return (
		<View style={styles.container}>
			<View style={styles.inputWrapper}>
				<TextInput
					{...rest}
					style={styles.input}
					value={value}
					onChangeText={onChange}
					placeholderTextColor="#000"
				/>
			</View>
			{fieldState.error && (
				<ThemedText
					type="description"
					lightColor="#FF0000"
					style={styles.error}
				>
					{fieldState.error.message}
				</ThemedText>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 5,
	},
	inputWrapper: {
		borderWidth: 1,
		borderRadius: 32,
		alignItems: "center",
	},
	input: {
		fontSize: 16,
		paddingHorizontal: 24,
		paddingVertical: 20,
		width: "100%",
	},
	error: {
		paddingHorizontal: 24,
	},
});
