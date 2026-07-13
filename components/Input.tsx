import { TouchableOpacity, StyleSheet, ActivityIndicator, View } from 'react-native';
import { colors, radius, spacingX } from '@/constants/theme';
import { InputProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import { TextInput } from 'react-native-gesture-handler';

const Input = (props: InputProps) => {
    return (
        <View
            style={[styles.container, props.containerStyle && props.containerStyle]}
        >
            {props.icon && <View>{props.icon}</View>}
            <TextInput
                style={[styles.input, props.inputStyle]}
                placeholderTextColor={colors.neutral400}
            // ref={props.inputRef && props.inputRef }
            ></TextInput>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: verticalScale(54),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: "continuous",
        paddingHorizontal: spacingX._15,
        gap: spacingX._10
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: verticalScale(14)
    }
})