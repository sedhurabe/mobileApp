import { StyleSheet } from 'react-native';
import {config} from '../../../../theme/config';

export const styles = StyleSheet.create({
    input:{
        width:'100%',
        position:'relative' 
    },
    inputText:{
        height:52,
        paddingVertical:10,
        paddingHorizontal: 15,
        marginBottom:20,
        fontSize: 16, 
        color: config.white,
        borderWidth: 2,
        width:'100%',
        borderColor:config.borderColor,
    }
});