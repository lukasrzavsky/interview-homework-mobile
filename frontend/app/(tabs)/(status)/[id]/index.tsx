import Layout from "@/components/layout/Layout";
import { ThemedText } from "@/components/ThemedText";
import { ProductsMock } from "@/mocks/Products.mock";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

const WarehouseItemDetailScreen = () => {
	const { id } = useLocalSearchParams<{ id: string }>();

	const currentMockProductID = +id - 1;

	const { imageUrl, name, description, quantity, unitPrice } =
		ProductsMock[currentMockProductID];

	// NOTE: all these comments are by purpose, I want to show how it will work with BE endpoints
	// const {data, isLoading, isError} = useGetWarehouseItemDetails(id);

	// useEffect(() => {
	//   if(isError) {
	// 	Toast.show({
	// 		type: 'error',
	// 		text1: 'Failed to load item details!'
	// 	  });
	//   }

	// }, [isError, Toast])

	return (
		<Layout>
			{/* {isLoading ? (
				<ThemedText>Loading...</ThemedText>
			) : (
				<View style={styles.container}>
					{imageUrl && (
						<Image
							source={require("../../../../assets/images/react-logo.png")}
							className="h-full w-full"
							resizeMode="cover"
						/>
					)}
					<ThemedText type="title" style={styles.centeredText}>
						{name}
					</ThemedText>
					<ThemedText style={styles.centeredText}>
						{description}
					</ThemedText>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<ThemedText>{`Quantity: ${quantity}`}</ThemedText>
						<ThemedText>{`Price: ${unitPrice} $`}</ThemedText>
					</View>
				</View>
			)} */}
			<View style={styles.container}>
				{imageUrl && (
					<Image
						alt="item-image"
						// @ts-ignore // Temp solution, once we have data from BE, the param will use {uri: imageUrl}
						source={imageUrl}
						className="h-full w-full"
						resizeMode="cover"
					/>
				)}
				<ThemedText type="title" style={styles.centeredText}>
					{name}
				</ThemedText>
				<ThemedText style={styles.centeredText}>
					{description}
				</ThemedText>
				<View style={styles.priceAndQuantityContainer}>
					<ThemedText>{`Quantity: ${quantity}`}</ThemedText>
					<ThemedText>{`Price: ${unitPrice} $`}</ThemedText>
				</View>
			</View>
		</Layout>
	);
};

export default WarehouseItemDetailScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 24,
		alignItems: "center",
		gap: 16,
		paddingHorizontal: 16,
	},
	centeredText: { textAlign: "center" },
	priceAndQuantityContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
});
