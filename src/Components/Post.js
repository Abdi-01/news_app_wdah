import React from 'react';
import { Button, Card, Text } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Link } from 'react-router-native';

const Post = ({ article }) => {

    return (
        <Card containerStyle={{ margin: 0, marginBottom: hp("1%") }}>
            <Card.Title>{article.title}</Card.Title>
            <Card.Divider color="red" />
            <Card.Image source={{ uri: article.urlToImage }} />
            <Text style={{ textAlign: "justify", marginVertical: hp("2%") }}>
                {article.description}
            </Text>
            <Card.Divider color="red" />
            <Link to="/detail">
                <Text style={{ textAlign: "center", backgroundColor: "gray", color: "white", paddingVertical: hp("1%") }}>
                    Read More
                </Text>
            </Link>
        </Card>
    )
};

export default Post;