import products from "@/assets/Food Ordering Asset bundle/data/products";
import { View } from "@/components/Themed";
import { Text } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image,StyleSheet } from "react-native";


const sizes = ['S', 'M', 'L', 'XL']


const info = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() == id);

    if (!product){
        return <Text>Product! not found</Text>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title:product.name}} />
            <Image source={{uri: product.image}} style={styles.image}/>
            <Text>Select size:</Text>
            {sizes.map(size => <Text>{size}</Text>)}
            <Text style={{fontSize:20}}></Text>
            <Text style={styles.txt}>${product.price}</Text>
        </View>
    );
};

export default info;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        backgroundColor:'white',
        padding:20,
    },
    image: {
        aspectRatio:1,
        width:'100%',
    },
    txt: {
        fontWeight:'bold',
        fontSize:30,
    }
})