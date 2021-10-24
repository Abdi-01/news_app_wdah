import React, { useEffect, useState } from 'react';
import { Header, Text } from 'react-native-elements';

const HeaderComp = (props) => {

    return (
        <Header
            containerStyle={{ backgroundColor: "#c0392b" }}
            leftComponent={{ icon: 'menu', color: 'white' }}
            centerComponent={{
                text: 'Hello Abdi', style: { color: 'white' }
            }}
        />
    )
}

export default HeaderComp