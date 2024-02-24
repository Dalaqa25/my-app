import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Product } from '@/types';

export const defualtPizzaPng = 'https://static-00.iconduck.com/assets.00/no-pizza-icon-2048x1973-3ybp0iar.png'

type ItemListsProps = {
  product: Product;
};

const ItemLists = ({product}: ItemListsProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image || defualtPizzaPng}} 
        style={styles.image} resizeMode='contain'/>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ItemLists;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    borderRadius:20,
    padding:10,
    flex:1,  
  },
  image: {
    width:'100%',
    aspectRatio:1,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
  },
  price:{
    fontSize:16,
    fontWeight:'bold',
  },
});
