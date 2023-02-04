import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from './src/data';
import * as Animatable from 'react-native-animatable'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../stores/action/actionCreator';
const Games = ({ navigation, route }) => {
  const categories = useSelector((state) => state)
  const theAnimations = [ "fadeIn", "fadeInUp", "fadeInDown", "fadeInDownBig", "fadeInUpBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight",  "fadeInRightBig", "flipInX", "flipInY", "slideInDown", "slideInUp", "slideInLeft", "slideInRight", "zoomIn", "zoomInDown", "zoomInUp", "zoomInLeft", "zoomInRight"]
  const animation = theAnimations[Math.floor(Math.random() * theAnimations.length)]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  console.log(categories)
  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
        <View style={styles.listContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Ini games ", index)
              navigation.navigate('games') //Insert Category ID games as route
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Play!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello</Text> */}
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Categories</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  listContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: undefined, aspectRatio: 1 },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#62513E',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
