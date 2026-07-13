import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors, spacingX, spacingY } from '@/constants/theme';
import ScreenWrapper from '@/components/ScreenWrapper';
import { verticalScale } from '@/utils/styling';
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import Typo from '@/components/Typo';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

const Welcome = () => {
    const router = useRouter()

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/(auth)/login")}>
                        <Typo fontWeight={500}>Sign in</Typo>
                    </TouchableOpacity>

                    <Animated.Image
                        entering={FadeIn.duration(1000)}
                        source={require("../../assets/images/welcome.png")}
                        style={styles.welcomeImage}
                        resizeMode="contain"
                    />
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Animated.View
                        entering={FadeInDown.duration(1000).springify().damping(12)}
                        style={{ alignItems: "center" }}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Typo fontWeight={"800"} size={30}>Always take control</Typo>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Typo fontWeight={"800"} size={30}>of your finances</Typo>
                        </View>
                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.delay(100).duration(1000).springify().damping(12)}
                        style={{ alignItems: "center", gap: 2 }}
                    >
                        <Typo>Finances must be arranged to set a better</Typo>
                        <Typo>lifestyle in future.</Typo>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify().damping(12)}
                        style={styles.buttonContainer}
                    >
                        <Button onPress={() => router.push("/(auth)/register")}>
                            <Typo size={22} color={colors.neutral900}>Get Started</Typo>
                        </Button>
                    </Animated.View>
                </View>

            </View>
        </ScreenWrapper>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: spacingY._7
    },
    welcomeImage: {
        width: "100%",
        height: verticalScale(300),
        alignSelf: "center",
        marginTop: verticalScale(100)
    },
    loginButton: {
        alignSelf: "flex-end",
        marginRight: spacingX._20
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: "center",
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: { width: 0, height: -10 },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25
    }
})