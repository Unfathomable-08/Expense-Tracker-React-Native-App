import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Typo from '@/components/Typo'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import { Ionicons } from '@expo/vector-icons'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const router = useRouter();

    const handleSubmit = async () => {
        if (!nameRef.current || !emailRef.current || !passwordRef.current) {
            Alert.alert("Error", "Please enter all the fields");
            return;
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton />

                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typo size={30} fontWeight={"800"}>Let's</Typo>
                    <Typo size={30} fontWeight={"800"}>Get Started</Typo>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>
                        Create an account to track your expenses
                    </Typo>

                    <Input
                        placeholder='Enter your name'
                        icon={<Ionicons name="person-outline" size={verticalScale(20)} color={colors.textLighter} />}
                        onChangeText={(value) => nameRef.current = value}
                    />

                    <Input
                        placeholder='Enter your email'
                        icon={<Ionicons name="mail-outline" size={verticalScale(20)} color={colors.textLighter} />}
                        onChangeText={(value) => emailRef.current = value}
                    />

                    <Input
                        placeholder='Enter your password'
                        secureTextEntry
                        icon={<Ionicons name="lock-closed-outline" size={verticalScale(20)} color={colors.textLighter} />}
                        onChangeText={(value) => passwordRef.current = value}
                    />

                    <Button loading={isLoading} onPress={handleSubmit} >
                        <Typo fontWeight={'700'} color={colors.black} size={21}>Sign Up</Typo>
                    </Button>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Typo size={15}>Already have an account?</Typo>
                    <Pressable onPress={() => router.navigate('/(auth)/login')}>
                        <Typo size={15} fontWeight={'700'} color={colors.primary}>
                            Login
                        </Typo>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text
    },
    form: {
        gap: spacingX._20
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    footerText: {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15)
    }
})