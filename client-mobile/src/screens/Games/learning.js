import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import * as Speech from "expo-speech";
import Voice from "@react-native-voice/voice";
import { useEffect, useState } from "react";
import { getGame } from "../../stores/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
export default function Learning() {
  const speak = () => {
    const thingToSay = game.question
    Speech.speak(thingToSay);
  };

  const dispatch = useDispatch()

  const game = useSelector((state) => state.games.game)

  useEffect(() => {
     dispatch(getGame(60))
  },[])

  if(!game){
     return <Text>Loading bang........</Text>
  }

  // console.log(game)

  const [pitch, setPitch] = useState("");
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    const onSpeechStart = (e) => {
      console.log("onSpeechStart: ", e);
      setStarted("√");
    };

    const onSpeechEnd = (e) => {
      console.log("onSpeechEnd: ", e);
      setEnd("√");
    };

    const onSpeechError = (e) => {
      setError(JSON.stringify(e.error));
    };

    const onSpeechResults = (e) => {
      console.log("onSpeechResults: ", e);
      setResults(e.value);
    };

    const onSpeechPartialResults = (e) => {
      console.log("onSpeechPartialResults: ", e);
      setPartialResults(e.value);
    };

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    // Voice.onSpeechVolumeChanged = onSpeechVolumeChanged
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // const onSpeechVolumeChanged = (e) => {
  //   console.log('onSpeechVolumeChanged: ', e )
  //   setPitch(e.value)
  // }

  console.log(results, "ini jawaban<<<<<<<<<<")

  if(results){
    if(results[0] == "two two" || results[1] == "two two"|| results[2] == "two two" || results[3] == "two two" || results[0] == "2 2" || results[1] == "2 2"|| results[2] == "2 2" || results[3] == "2 2"){
      console.log('jawaban benar')
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Congrats! this is dialog box success',
        button: 'close',
      })
    }
  }

  const startRecognizing = async () => {
    try {
      await Voice.start("en-US");
      setPitch("");
      setError("");
      setStarted("");
      setResults([]);
      setPartialResults([]);
      setEnd("");
    } catch (error) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    try {
      await Voice.destroy();
      setPitch("");
      setError("");
      setStarted("");
      setResults([]);
      setPartialResults([]);
      setEnd("");
    } catch (error) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (error) {
      console.error(e);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9c%2F64%2F34%2F9c643412786b1a847ed93e7ad8fc4c8a.jpg&f=1&nofb=1&ipt=28237e356b85b5da5c160eb931e06af90303745b0040f29051cf1a4c910fb484&ipo=images",
      }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Faiq%2Fogn%2Faiqognj5T.gif&f=1&nofb=1&ipt=e7ba6031e1a0a4e38356f00456e0f752161d1b5d62ec8e3ecfe13491bc726507&ipo=images",
            }}
            style={{ width: 130, height: 130, margin: 20 }}
          />
        </View>

        <View style={styles.question}>
          <Text style={styles.titleText}>
            {game.question}
          </Text>
        </View>

        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            <ImageBackground
              source={{
                uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Ftranslucent-clouds-clipart-3.png&f=1&nofb=1&ipt=985a29675be6463bd8190daec6ce91f17e927b177fa0afbfc1f15a5609ba5d61&ipo=images",
              }}
              style={{
                width: 300,
                height: 200,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <View style={styles.icon}>
              <TouchableHighlight onPress={startRecognizing}>
                <Image
                  style={styles.imageButton}
                  source={{
                    uri: `https://images-ext-2.discordapp.net/external/e1j8ABJNN9q8AwDWVskV_OquWxMJoXuS35UNUlWa01A/https/media.tenor.com/N1wfdrdcXeEAAAAi/mic-jumping.gif`,
                  }}
                />
              </TouchableHighlight>
              <TouchableHighlight onPress={speak}>
                <Image
                  source={{
                    uri: "https://media2.giphy.com/media/PBMzWRByLMFNLY1qfS/giphy.gif?cid=6c09b952155a08df80cc5b5eb0c322bdd7b288c12f9a740c&rid=giphy.gif&ct=s",
                  }}
                  style={{width: 70, height: 70, marginTop: 30}}
                  />
              </TouchableHighlight>
                  </View>
            </ImageBackground>
          </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#000",
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  horizontalView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    padding: 12,
  },
  imageButton: {
    width: 80,
    height: 90,
    marginHorizontal: 10
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: "center",
    color: "#B0171F",
  },
  question: {
    flex: 0.5,
    justifyContent: "center",
    width: 300,
    height: 170,
  },
  background: {
    flex: 1,
  },
  icon: {
    flexWrap: "nowrap",
    flexDirection: "row",
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
