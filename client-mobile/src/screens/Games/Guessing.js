import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const options = [
  {
    id: 1,
    text: "A",
    image:
      "https://i.pinimg.com/originals/2b/2b/9e/2b2b9e6898f62e41d32056e7cfe492e1.gif",
  },
  {
    id: 2,
    text: "B",
    image:
      "https://i.pinimg.com/originals/32/14/15/3214157614e454626c5c6e7d58c0e68b.gif",
  },
  {
    id: 3,
    text: "C",
    image:
      "https://2.bp.blogspot.com/-2OIk0vcoUH8/XKGckf1y6JI/AAAAAAAV6-Q/1vwfypSpZCwh8HsQHQFopar06MJV02pFACLcBGAs/s1600/AW3819936_00.gif",
  },
  {
    id: 4,
    text: "D",
    image:
      "https://media0.giphy.com/media/URuzxahV9KeIORFGy5/200w.gif?cid=82a1493b4b4m47js3jzw9496z2kdsdqm1m5azmrvcrmza55d&rid=200w.gif&ct=s",
  },
];

const Guessing = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSpeakOption = () => {
    // code to play audio for the selected option
  };
  return (
    <View style={styles.container}>
        <View style={styles.questionContainer}>
           <Text style={styles.question}>Question Here</Text> 
        </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption?.id === options[0].id && styles.selectedOption,
          ]}
          onPress={() => handleSelectOption(options[0])}
        >
          <Image
            source={{ uri: options[0].image }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>{options[0].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption?.id === options[1].id && styles.selectedOption,
          ]}
          onPress={() => handleSelectOption(options[1])}
        >
          <Image
            source={{ uri: options[1].image }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>{options[1].text}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption?.id === options[2].id && styles.selectedOption,
          ]}
          onPress={() => handleSelectOption(options[2])}
        >
          <Image
            source={{ uri: options[2].image }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>{options[2].text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption?.id === options[3].id && styles.selectedOption,
          ]}
          onPress={() => handleSelectOption(options[3])}
        >
          <Image
            source={{ uri: options[3].image }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>{options[3].text}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.speakerContainer}>
        <TouchableOpacity
          style={styles.speakerButton}
          onPress={handleSpeakOption}
        >
          <Image source={{uri: "https://icons.iconarchive.com/icons/icons8/windows-8/512/Mobile-Speaker-icon.png"}} style={{width: 50, height: 50}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffebcd",
  },
  questionContainer: {
    position: "absolute",
    top: 100
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginVertical: 20,
  },
  option: {
    width: "45%",
    height: 150,
    backgroundColor: `#ffebcd`,
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedOption: {
    backgroundColor: "#ddd",
  },
  speakerContainer: {
    position: "absolute",
    bottom: 100,
  },
  speakerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  speakerText: {
    fontSize: 20,
  },
};

export default Guessing;
