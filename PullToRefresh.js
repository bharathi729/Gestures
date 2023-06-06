import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
const DATA = [
  {id: '1',title: 'Take coffee',},
  {id: '2',title: 'Write some code',},
  {id: '3',title: 'Take the test',},
  {id: '4',title: 'Excercise',},
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function PullToRefresh() {
    const nav=useNavigation();
  const [refreshing, setrefreshing] = useState(false);
  const [data, setdata] = useState(DATA);

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setdata((data) => [...data,
        {id: '5',title: 'Take a walk in the park',},
        {id: '6',title:'javascript',},
        {id: '7',title:'ReactJs',},
        {id: '8',title:'React-Native',},
        {id: '9',title:'DJango',},
        {id: '10',title:'Flutter',},
        {id: '11',title:'Vue',},
        {id: '12',title:'Flask',},
    
    
    
    ]);
      setrefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <Button title='SwipeGesture' onPress={()=> nav.navigate("SwipeGesture")} /> 
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,

    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginTop:24,
    padding:30,
    backgroundColor:'aqua',
    fontSize:24,
    marginHorizontal:10,
  },
  title: {
    fontSize: 20,
  },
});