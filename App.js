import { StyleSheet, SafeAreaView, Platform, ScrollView, FlatList } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const pokemonData = [
    {
      id: 1,
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
      decorators: { borderColor: "#FF5733", emoji: "🔥" }
    },
    {
      id: 2,
      name: "Squirtle",
      image: require("./assets/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
      decorators: { borderColor: "#6493EA", emoji: "💧" }
    },
    {
      id: 3,
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      decorators: { borderColor: "#66CC66", emoji: "🌿" }
    },
    {
      id: 4,
      name: "Pikachu",
      image: require("./assets/pikachu.png"),
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
      decorators: { borderColor: "#FFD700", emoji: "⚡️" }
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={pokemonData}
          renderItem={({ item }) => {
            return (
              <PokemonCard key={item.id} pokemon={item} />
            )
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 15 : 0
  },
});
