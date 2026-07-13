import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius } from '@/constants/theme';
import { CustomButtonProps } from '@/types';
import { verticalScale } from '@/utils/styling';

const Button = ({
    children,
    style,
    loading,
    onPress
}: CustomButtonProps) => {

    return (
        <TouchableOpacity style={[style, styles.button]} onPress={onPress}>{children}</TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: "continuous",
        height: verticalScale(52),
        justifyContent: "center",
        alignItems: "center"
    }
})