import products from '@/assets/Food Ordering Asset bundle/data/products';
import ItemLists from '@/components/ItemLists';
import { FlatList } from 'react-native';


export default function MenuScreen() {
  return (
  <FlatList
    data={products}
    renderItem={({item}) => <ItemLists product={item}/>}
    numColumns={2}
    contentContainerStyle={{gap:10, padding:10}}
    columnWrapperStyle={{gap:10}}
  />
  );
}
