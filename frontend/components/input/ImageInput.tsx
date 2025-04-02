import { useThemeColor } from "@/hooks/useThemeColor";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "../button/Button";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "../ui/IconSymbol";

type Props = {
	name: string;
	label: string;
};

const ImageInput = ({ name, label }: Props) => {
	const iconTintColor = useThemeColor({}, "icon");

	const { control } = useFormContext();
	const { field, fieldState } = useController({ control, name });

	const pickImage = async () => {
		try {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();

			if (status !== "granted") {
				Alert.alert(
					"Permission Denied",
					"Sorry, we need camera permissions to make this work!",
				);
				return;
			}

			const result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.8,
				selectionLimit: 1,
			});

			if (!result.canceled) {
				field.onChange(result.assets[0].uri);
			}
		} catch (_) {
			Alert.alert("Error", "Failed to pick image");
		}
	};

	const removeImage = () => field.onChange(null);

	return (
		<View style={styles.container}>
			<ThemedText type="defaultSemiBold">{label}</ThemedText>
			<View style={styles.inputContainer}>
				{field.value ? (
					<View style={styles.imageContainer}>
						<Image
							source={{ uri: field.value }}
							style={styles.image}
						/>
						<TouchableOpacity
							style={styles.removeButton}
							onPress={removeImage}
						>
							<IconSymbol name="close" size={24} color="red" />
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.placeholderContainer}>
						<IconSymbol
							name="picture"
							size={48}
							color={iconTintColor}
						/>
						<ThemedText type="description">
							No image selected
						</ThemedText>
					</View>
				)}

				<View style={styles.buttonContainer}>
					<Button label="Pick image" onPress={pickImage} />
				</View>
			</View>

			{fieldState.error && (
				<ThemedText type="description" lightColor="#FF0000">
					{fieldState.error.message}
				</ThemedText>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	inputContainer: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		padding: 12,
		overflow: "hidden",
	},
	placeholderContainer: {
		alignItems: "center",
		justifyContent: "center",
		height: 150,
		borderRadius: 8,
	},
	imageContainer: {
		position: "relative",
		marginBottom: 10,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 8,
	},
	removeButton: {
		position: "absolute",
		top: 10,
		right: 10,
		backgroundColor: "#fff",
		borderRadius: 12,
	},
	buttonContainer: {
		marginTop: 10,
		alignItems: "center",
	},
});

export default ImageInput;
