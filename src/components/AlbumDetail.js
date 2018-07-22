import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';


const AlbumDetail = (props) => (
    <Card>
    <CardItem>
      <View style={styles.headerContentStyle}>
        <Text> {props.mathy.title}</Text>
        <Text> {props.mathy.artist}</Text>
      </View>
      </CardItem>
    </Card>
  );

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};
/*

const AlbumDetail = (props) => {
  return (
    <View>
      <Text> {props.mathy.title}</Text>
    </View>
  );

};
*/
export default AlbumDetail;
