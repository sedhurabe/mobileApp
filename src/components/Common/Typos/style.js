import { StyleSheet } from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
    titleH1: {
        color: config.white,
        fontSize: config.fsXL,
        fontFamily: config.fontBoldType,
        lineHeight: config.fsXL+4,
        paddingBottom: 20,
    },
     titleH2: {
        color: config.white,
        fontSize: config.fsLarge,
        fontFamily: config.fontBoldType,
        lineHeight: config.fsLarge+4,
        paddingBottom: 20,
    },
     titleH3: {
        color: config.white,
        fontSize: config.fsMedium,
        fontFamily: config.fontBoldType,
        lineHeight: config.fsMedium+4,
        paddingBottom: 20,
    },
     titleH4: {
        color: config.white,
        fontSize: config.fsRegular,
        fontFamily: config.fontBold,
        lineHeight: config.fsMedium+4,
        paddingBottom: 20,
    },
    paragraph: {
        color: config.white,
        fontSize: config.fsRegular,
        fontFamily: config.fontPrimary,
        lineHeight:24,
        paddingBottom: 20,
    },
    lastChild:{
        borderBottomWidth:0
    }
});