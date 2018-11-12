import { StyleSheet } from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
    imageBlk: {
    	alignItems: 'center', width:'100%', marginBottom:45
    },
    img:{
    	width:130, height:130, alignItems: 'center'
    },
    row:{
    	flexDirection: 'row',
    	borderBottomWidth:1,
    	borderColor:config.borderColor,
    	width:'100%',
    	marginBottom:15,
    },
    col:{
    	width:'50%'
    }
});