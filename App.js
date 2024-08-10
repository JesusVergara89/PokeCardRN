import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const pokemonData = [
    {
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
      decorators: { borderColor: "#FF5733", emoji: "🔥" }
    },
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
      decorators: { borderColor: "#6493EA", emoji: "💧" }
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      decorators: { borderColor: "#66CC66", emoji: "🌿" }
    },
    {
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
        {pokemonData.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} />
        ))}
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
