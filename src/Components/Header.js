import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Header, Text } from 'react-native-elements';

const HeaderComp = (props) => {

    const [user, setUser] = useState("")
    useEffect(() => {
        getData()
    })

    const getData = async () => {
        try {
            let check = await AsyncStorage.getItem("data")
            if (check) {
                setUser(check)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Header
            containerStyle={{ backgroundColor: "#c0392b" }}
            leftComponent={{ icon: 'menu', color: 'white' }}
            centerComponent={{
                text: `Hello ${user}`, style: { color: 'white' }
            }}
        />
    )
}

export default HeaderComp