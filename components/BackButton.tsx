import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, radius } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({
    style,
    iconSize = 26
}: BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
        <Ionicons name="chevron-back-outline" size={verticalScale(iconSize)} color={colors.white} />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: 'flex-start',
        borderRadius: radius._12,
        borderCurve: 'continuous',
        padding: 5
    }
})