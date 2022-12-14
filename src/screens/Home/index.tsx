import { View, Image, FlatList } from "react-native";

import { styles } from "./styles";

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import logoImg from "../../assets/logo-nlw-esports.png";

import { GAMES } from "../../utils/games";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
};
