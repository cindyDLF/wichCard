import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { shuffle } from "../utils";

//import components
import Loading from "../components/Loading";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

//import lib
import CardFlip from "react-native-card-flip";

const width = Dimensions.get("window").width;

let Game = ({ navigation }) => {
  const [actualPlayer, setActualPlayer] = useState(0);
  const [players, setPlayers] = useState(navigation.getParam("players"));
  const [cards, setCards] = useState([]);
  const [inputChoose, setInputChoose] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    let arrCard = [];
    const nbUnkownCard = navigation.getParam("nbUnkown");
    const nbCard = navigation.getParam("nbCard");
    const nbEmptyCard = nbCard - 2 - nbUnkownCard;

    for (let i = 0; i < nbEmptyCard; i++) {
      arrCard.push({ id: i, statut: null, find: false });
    }
    arrCard.push({ id: arrCard.length, statut: "malus", find: false });
    arrCard.push({ id: arrCard.length, statut: "bonus", find: false });

    for (let i = 0; i < nbUnkownCard; i++) {
      let random = Math.floor(Math.random() * Math.floor(nbCard));
      if (randomExists(random, arrCard)) {
        i--;
      } else {
        arrCard.push({ id: arrCard.length, statut: random, find: false });
      }
    }

    setCards(shuffle(arrCard));
  }, []);

  function randomExists(random, arrCard) {
    return arrCard.some(function(el) {
      return el.statut === random;
    });
  }

  function _changePlayer() {
    if (actualPlayer === players.length - 1) {
      setActualPlayer(0);
    } else {
      setActualPlayer(actualPlayer + 1);
    }
  }

  function _pointSystem(point) {
    console.log(players);
    const winner = players;
    winner[actualPlayer].point += point;
    setPlayers(winner);
    _changePlayer();
  }

  function _findCard(item) {
    const valueCard = item.props.children[1].props.children.props.children;
    item.flip();
    const arrCard = cards;
    const card = arrCard.findIndex(x => x.statut === valueCard);

    if (Number.isInteger(valueCard)) {
      arrCard[card].find = true;
      setCards(arrCard);
    } else {
      item.flip();
    }
    // props.children.props.children
  }

  function _cardIsEmpty(item) {
    item.flip();
  }

  function _displayPlayerName() {
    if (players) {
      const displayPlayer = players.map((player, idx) => {
        return (
          <View key={idx} style={styles.containerPlayer}>
            <Text
              style={[
                styles.textPlayer,
                actualPlayer === idx ? styles.textActualPlayer : null
              ]}
            >
              {player.value}
            </Text>
            <Text
              style={[
                styles.textPlayer,
                actualPlayer === idx ? styles.textActualPlayer : null
              ]}
            >
              {player.point}
            </Text>
          </View>
        );
      });
      return displayPlayer;
    } else {
      return <Loading />;
    }
  }
  function _displayCardGame() {
    const card = cards.map(item => {
      return (
        <CardFlip
          style={{
            width: width - 260,
            height: width - 230,
            justifyContent: "center",
            alignItems: "center"
          }}
          key={item.id}
          ref={card => (item = card)}
        >
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => _findCard(item, card)}
          >
            <Text>Try me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => _cardIsEmpty(item)}
          >
            <Text>{item.statut}</Text>
          </TouchableOpacity>
        </CardFlip>
      );
    });
    return card;
  }
  if (cards.length !== 0) {
    return (
      <View>
        {_displayPlayerName()}
        <View style={styles.containerInput}>
          <Input
            width={150}
            value={inputChoose}
            setValue={setInputChoose}
            disable={disable}
          />
          <Button
            widthButton={100}
            text="OK ?"
            goTo={true}
            padding={10}
            marginTop={null}
            onPress={() => _pointSystem(2)}
          />
        </View>
        <ScrollView contentContainerStyle={styles.containerCard}>
          {_displayCardGame()}
        </ScrollView>
      </View>
    );
  } else {
    return <Loading />;
  }
};

const styles = StyleSheet.create({
  containerCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    width,
    justifyContent: "center",
    paddingBottom: 300,
    paddingTop: 20
  },
  cardContainer: {
    width: width - 280,
    height: width - 260,
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  containerInput: {
    backgroundColor: "#C3C3C3",
    width,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 10
  },
  containerPlayer: {
    display: "flex",
    flexDirection: "row",
    width,
    justifyContent: "space-between",
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 10,
    paddingTop: 10
  },
  textPlayer: {
    fontWeight: "bold",
    fontSize: 20
  },
  textActualPlayer: {
    color: "#1BA8F0"
  }
});

export default Game;
