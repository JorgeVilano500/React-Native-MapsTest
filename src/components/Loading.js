import React from 'react'
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';

const Loading = ({size}) => {
    return (
        <MotiView 
        from={
            {
                width: size, 
                height: size, 
                borderRadius: size/2,
                shadowOpacity: 0.5,
                borderWidth: 0
            }
        }
        animate={{
            width: size + 20, 
            height: size + 20, 
            borderRadius: (size + 20) / 2,
            shadowOpacity: 1,
            borderWidth: size / 10
        }}
        transition={{
            type: 'timing',
            duration: 1000, 
            loop: true
        }}
        style={{
            width: size, 
            height: size, 
            borderRadius: size / 2, 
            borderWidth: size/ 10, 
            borderColor: '#fff',
            shadowOffset: {width: 0, heigth: 0},
            shadowOpacity: 1, 
            shadowRadius: 10, 
        }}
        />
    )
}


const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1
    }
})

export default Loading;