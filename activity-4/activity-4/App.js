import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar , TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'kumain',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'ayos higaan',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'kumain',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'maligo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'maligo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'maligo',
  },
  
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
  
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
      <Text style={styles.boldText}>  Morning</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'red',
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 15,
    textAlign: 'right',
  },
  title: {
    fontSize: 36,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
  },
});

export default App;