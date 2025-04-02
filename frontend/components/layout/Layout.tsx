import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import React, { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconSymbol } from "../ui/IconSymbol";

type Props = {
	hasBackButton?: boolean;
};

const Layout: React.FC<PropsWithChildren<Props>> = ({
	children,
	hasBackButton = true,
}) => {
	const router = useRouter();

	const insets = useSafeAreaInsets();

	const iconTintColor = useThemeColor({}, "icon");

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					paddingTop: insets.top,
				},
			]}
		>
			<View style={{ flex: 1 }}>
				{hasBackButton && (
					<TouchableOpacity
						onPress={router.back}
						style={styles.backButtonContainer}
					>
						<IconSymbol
							name="left"
							color={iconTintColor}
							size={32}
						/>
					</TouchableOpacity>
				)}
				{children}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
	backButtonContainer: {
		paddingHorizontal: 16,
	},
});

export default Layout;
