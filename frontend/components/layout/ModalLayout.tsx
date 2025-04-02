import { router } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";
import {
	Dimensions,
	LayoutChangeEvent,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Animated, {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const SHORT_ANIMATION_DURATION = 200;
const MEDIUM_ANIMATION_DURATION = 250;
const LONG_ANIMATION_DURATION = 300;

export const ModalLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const [contentHeight, setContentHeight] = useState(0);

	const fadeAnim = useSharedValue(0);
	const slideAnim = useSharedValue(WINDOW_HEIGHT);

	const handleModalPress = (event: any) => {
		event.stopPropagation();
	};

	const onContentLayout = (event: LayoutChangeEvent) => {
		const { height } = event.nativeEvent.layout;
		const screenHeight = WINDOW_HEIGHT;

		const maxHeight = screenHeight * 0.8;
		const newHeight = Math.min(height, maxHeight);
		setContentHeight(newHeight);
	};

	const overlayStyle = useAnimatedStyle(() => {
		return {
			opacity: fadeAnim.value,
		};
	});

	const modalStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: slideAnim.value }],
			maxHeight: contentHeight > 0 ? contentHeight : "80%",
		};
	});

	useEffect(() => {
		fadeAnim.value = withTiming(1, { duration: LONG_ANIMATION_DURATION });

		slideAnim.value = withTiming(0, { duration: LONG_ANIMATION_DURATION });
	}, []);

	const closeModal = () => {
		fadeAnim.value = withTiming(0, { duration: SHORT_ANIMATION_DURATION });

		slideAnim.value = withTiming(
			contentHeight || WINDOW_HEIGHT,
			{ duration: MEDIUM_ANIMATION_DURATION },
			() => {
				runOnJS(router.back)();
			},
		);
	};

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					StyleSheet.absoluteFillObject,
					styles.overlay,
					overlayStyle,
				]}
			>
				<TouchableWithoutFeedback onPress={closeModal}>
					<View style={styles.touchableOverlay} />
				</TouchableWithoutFeedback>
			</Animated.View>
			<Animated.View style={[modalStyle, styles.modal]}>
				<TouchableWithoutFeedback onPress={handleModalPress}>
					<View onLayout={onContentLayout}>{children}</View>
				</TouchableWithoutFeedback>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "transparent",
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	touchableOverlay: {
		height: "100%",
		width: "100%",
	},
	modal: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
});
