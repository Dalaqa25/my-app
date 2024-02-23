import products from '@/assets/Food Ordering Asset bundle/data/products';
import { View } from '@/components/Themed';
import ItemLists from '@/components/ItemLists';

export default function MenuScreen() {
  return (
    <View>
         <ItemLists product={products[0]}/> 
         <ItemLists product={products[1]}/> 
    </View>
  );
}
