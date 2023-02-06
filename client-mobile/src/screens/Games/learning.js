import { View, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight, } from 'react-native';
import * as Speech from 'expo-speech';
import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';
;

export default function Learning(){
  const speak = () => {
    const thingToSay = 'ada berapa jumlah hewan';
    Speech.speak(thingToSay);
  };

  const [pitch, setPitch] = useState('')
  const [error, setError] = useState('')
  const [end, setEnd] = useState('')
  const [started, setStarted] = useState('')
  const [results, setResults] = useState([])
  const [partialResults, setPartialResults] = useState([])

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e)
    setStarted('√')
  }

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e)
    setEnd('√')
  }

  const onSpeechError = (e) => {
    setError(JSON.stringify(e.error))
  }

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e)
    setResults(e.value)
  }
  
  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e)
    setPartialResults(e.value)
  }

  const onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e )
    setPitch(e.value)
  }

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US')
      setPitch('')
      setError('')
      setStarted('')
      setResults([])
      setPartialResults([])
      setEnd('')
    } catch (error) {
      console.error(e)
    }
  }

  const stopRecognizing = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.error(e)
    }
  }

  const destroyRecognizer = async () => {
    try {
      await Voice.destroy()
      setPitch('')
      setError('')
      setStarted('')
      setResults([])
      setPartialResults([])
      setEnd('')
    } catch (error) {
      console.error(e)
    }
  }

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel()
    } catch (error) {
      console.error(e)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Speech to text conversion
        </Text>
        <Text style={styles.textStyle}>
          Click on Mic
        </Text>

        <TouchableHighlight onPress={startRecognizing}>
          <Image style={styles.imageButton} 
          source={{uri: `https://static.vecteezy.com/system/resources/thumbnails/000/573/392/small/vector60-6741-01.jpg`}} />
        </TouchableHighlight>
        <Text style={styles.textStyle}>
          Partial results
        </Text>
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text key={`partial-result-${index}`} >
                {result}
              </Text>
            )
          })}
        </ScrollView>

        <Text style={styles.textStyle}>
          results
        </Text>
        <ScrollView style={{marginBottom: 42}}>
          {results.map((result, index) => {
            return (
              <Text key={`result-${index}`} >
                {result}
              </Text>
            )
          })}
        </ScrollView>
        
        <View style={styles.horizontalView}>
          <TouchableHighlight onPress={stopRecognizing}
          style={styles.buttonStyle}>
            <Text>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={cancelRecognizing}
          style={styles.buttonStyle}>
            <Text>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={destroyRecognizer}
          style={styles.buttonStyle}>
            <Text>Destroy</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#000',
    marginRight: 2,
    marginLeft: 2
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center'
  },
  horizontalView: {
    flexDirection: 'row',
    position:'absolute',
    bottom: 0
  }, 
  textStyle: {
    textAlign: 'center',
    padding: 12
  }
  , imageButton: {
    width: 50,
    height: 50
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F'
  }
})