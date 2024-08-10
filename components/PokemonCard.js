import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({ pokemon }) {
    return (
        <View style={[styles.card, { borderColor: pokemon.decorators.borderColor }, { shadowColor: pokemon.decorators.borderColor }]}>

            <View style={styles.nameContainer} >
                <Text style={styles.name} >{pokemon.name}</Text>
                <Text style={styles.hp} >♥️{pokemon.hp}</Text>
            </View>

            <Image style={styles.image} resizeMode='contain' source={pokemon.image} accessibilityLabel={`${pokemon.name} pokemon`} />

            <View style={styles.typeContainer} >
                <View style={[styles.badge, {borderColor: pokemon.decorators.borderColor}]} >
                    <Text style={styles.typeEmoji} >{pokemon.decorators.emoji}</Text>
                    <Text style={styles.typeText} >{pokemon.type}</Text>
                </View>
            </View>

            <View style={styles.listContainer} >
                <Text style={styles.listText} >Moves: {pokemon.moves.join(", ")}</Text>
            </View>

            <View style={styles.listContainer} >
                <Text style={styles.listText} >weaknesses: {pokemon.weaknesses.join(", ")}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 3,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 4, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 7,
            },
            android: {
                elevation: 5,
            }
        })
    }
    ,
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    listContainer: {
       marginBottom: 16
    },
    listText: {
        fontSize: 22,
        fontWeight: "bold"
    }
})