import React, { useState } from "react";
import { GameProvider } from "./hooks/gameContext";

import Home from "./screens/Home";
import Rules from "./screens/Rules";
import Settings from "./screens/Settings";
import Game from "./screens/Game";

import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Settings: { screen: Settings },
  Home: { screen: Home },
  Rules: { screen: Rules },
  Game: { screen: Game },
  initialRouteName: "Settings"
});

const Navigation = createAppContainer(MainNavigator);

const App = () => {
  const [game, setGame] = useState({});
  return (
    <GameProvider value={{ game, setGame }}>
      <Navigation />
    </GameProvider>
  );
};

export default App;
