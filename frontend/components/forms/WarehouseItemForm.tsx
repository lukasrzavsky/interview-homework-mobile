import { ScrollView, StyleSheet } from "react-native";
import { Button, ButtonProps } from "../button/Button";
import ImageInput from "../input/ImageInput";
import { Input } from "../input/Input";
import { KeyboardAvoidingWrapper } from "../keyboardAvoidingWrapper/KeyboardAvoidingWrapper";
import { ThemedText } from "../ThemedText";

type Props = {
	title: string;
	buttonProps: ButtonProps;
};

export const WarehouseItemForm: React.FC<Props> = ({ title, buttonProps }) => (
	<KeyboardAvoidingWrapper>
		<ThemedText type="title" style={styles.header}>
			{title}
		</ThemedText>
		<ScrollView contentContainerStyle={styles.form}>
			<Input name="name" placeholder="Name" />
			<Input name="description" placeholder="Description" />
			<Input
				name="quantity"
				keyboardType="numeric"
				placeholder="Quantity"
			/>
			<Input
				name="unitPrice"
				keyboardType="numeric"
				placeholder="Price"
			/>
			<ImageInput name="imageUrl" label="Image" />
			<Button {...buttonProps} />
		</ScrollView>
	</KeyboardAvoidingWrapper>
);

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	form: {
		gap: 12,
		paddingHorizontal: 24,
		paddingBottom: 36,
	},
});
