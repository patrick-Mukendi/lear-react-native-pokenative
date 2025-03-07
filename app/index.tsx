import { Text,FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "@/components/Card";
import pokemon from "./pokemon/[id]";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

export default function Index() {
  const colors = useThemeColors()
  const pokemon = Array.from({length: 35}, (_, k) => ({
    name: 'Pokémon name',
    id: k + 1
  }))
  return (
    <SafeAreaView style={[style.container, {backgroundColor: colors.tint}]}>
      <View style={style.header}>
        <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
         <ThemedText variant="headline" color="grayLite">Pokémon</ThemedText>
      </View>
     <Card style={style.body}>
       <FlatList 
       data={pokemon} 
       numColumns={3}
       columnWrapperStyle={[style.gridGap, style.list]}
       renderItem={({item})=>
          <PokemonCard id={item.id} name={item.name} style={{flex: 1/3}}/>} keyExtractor={(item) => item.id.toString()}
          >        
       </FlatList>
     </Card>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 12,
  },
  body:{
    flex:1
  },
  gridGap:{
    gap: 8
  },
  list: {
    padding: 12
  }
})
