import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon, Image, Input } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Redirect } from 'react-router';

const LoginPage = (props) => {

    // menyimpan value input
    const [username, setUsername] = useState("")
    // untuk redirect
    const [redirect, setRedirect] = useState(false)

    const btLogin = async () => {
        try {
            // console.log(username)
            await AsyncStorage.setItem("data", username, async (err) => {
                try {
                    let check = await AsyncStorage.getItem("data")
                    console.log(check)
                    if(check){
                        setRedirect(true)
                    }
                } catch (error) {
                    console.log(error)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    if(redirect){
        return <Redirect to="/home"/>
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: hp("4%") }}>
            <Image source={{ uri: "https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png" }}
                style={{ width: wp("60%"), height: hp("30%") }}
            />
            <View style={{ width: wp("70%") }}>
                <Input
                    onChangeText={(e) => setUsername(e)}
                    leftIcon={
                        <Icon
                            name="user"
                            size={24}
                            type="feather"
                            color="#c0392b"
                        />
                    }
                    placeholder="Your Name"
                />
                <Button
                    title="Login"
                    buttonStyle={{ backgroundColor: "#c0392b" }}
                    onPress={btLogin}
                />
            </View>
        </View>
    )
}

export default LoginPage