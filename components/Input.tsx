import { StyleSheet, View, TextInput } from 'react-native';
import { colors, radius, spacingX } from '@/constants/theme';
import { InputProps } from '@/types';
import { verticalScale } from '@/utils/styling';

const Input = (props: InputProps) => {
    return (
        <View
            style={[styles.container, props.containerStyle && props.containerStyle]}
        >
            {props.icon && <View>{props.icon}</View>}
            <TextInput
                {...props}
                placeholderTextColor={colors.neutral400}
                style={[styles.input, props.inputStyle]}
                ref={props.inputRef && props.inputRef }
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
        fontSize: verticalScale(14),
    }
})