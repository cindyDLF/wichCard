import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
import MultipleSelect from "../components/MultipleSelect";
import PlayerNameModal from "./PlayerNameModal";

let Settings = ({ navigation }) => {
  const [nbPlayer, setNbPlayer] = useState(4);
  const [nbUnkown, setNbUnkown] = useState(0);
  const [nbCard, setNbCard] = useState(0);
  const [showModale, setShowModal] = useState(false);

  _renderSetting = () => {
    if (!showModale) {
      return (
        <View style={styles.container}>
          <Title text="Setting" />
          <View style={styles.containerRow}>
            <MultipleSelect
              itemsSelect={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 }
              ]}
              label="number of player"
              setValue={setNbPlayer}
            />
            <Text>Number of Player</Text>
          </View>
          <View style={styles.containerRow}>
            <Input value={nbUnkown} setValue={setNbUnkown} width={70} />
            <Text>Number of hide elements</Text>
          </View>
          <View style={styles.containerRow}>
            <Input value={nbCard} setValue={setNbCard} width={70} />
            <Text>Number of cards</Text>
          </View>
          <Button
            goTo={
              nbCard !== 0 && nbUnkown !== 0 && nbPlayer !== 0 ? true : false
            }
            text="Play the game"
            onPress={() =>
              nbCard !== 0 && nbUnkown !== 0 && nbPlayer !== 0
                ? setShowModal(true)
                : null
            }
          />
        </View>
      );
    } else {
      return (
        <PlayerNameModal
          nbCard={nbCard}
          nbUnkown={nbUnkown}
          navigation={navigation}
          nbPlayer={nbPlayer}
        />
      );
    }
  };
  return _renderSetting();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40
  },
  containerRow: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50
  }
});

export default Settings;
