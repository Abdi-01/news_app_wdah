import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Post from '../Components/Post'

let API_URL = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=56e93abee1e94703a4c99090376efa3b`
const Home = (props) => {
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        try {
            let response = await axios.get(API_URL)
            console.log(response.data)
            setNewsList(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    const renderNews = () => {
        return newsList.map((val, idx) => {
            return <Post article={val} />
        })
    }

    return (
        <View style={{ backgroundColor: "#c0392b" }}>
            <ScrollView>
                {renderNews()}
            </ScrollView>
        </View>
    )
}

export default Home