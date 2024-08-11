import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {AsyncStorage} from 'react-native';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg",
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJX7iGz9Zx7w2XkptdJ_kajrtZUlKDl_gRg&usqp=CAU",
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhzvyZJGYDG-EFUHFEqMdZrdUGV5m02p0vA&usqp=CAU',
        backgroundColor: '#22bcb5',
    }
];


const OnBoarding = () => {

    useEffect(()=>{
        setStorage()
    },[])
    
    const setStorage = async () =>{
        await AsyncStorage.setItem(
            'show',
            'true',
          );
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>

                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.overlay}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>

            </View>

        );
    }



   
        return  <AppIntroSlider
                renderItem={renderItem}
                data={slides}
                showSkipButton={true}
                activeDotStyle={{
                    backgroundColor : "blue"
                }}
                dotStyle={{
                    backgroundColor : "white"
                }}
                // renderSkipButton={()=>{
                //     return(
                //         <View>
                //             <Button title='Skip Slide'></Button>
                //         </View>
                //     )
                // }}
                // renderNextButton={()=>{
                //     return(
                //         <View>
                //             <Button title='Next'></Button>
                //         </View>
                //     )
                // }}
                />
              
        

    }

export default OnBoarding;

const  styles = StyleSheet.create({
    slide : {
        backgroundColor : "grey",
        flex:1
    }
,
    image : {

        flex:1,
        width : '100%',
        height:'100%',
    },
    title: {
        fontSize: 35,
        color: 'white',
        marginBottom: 16,
        fontWeight: "bold"
    },

    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})
