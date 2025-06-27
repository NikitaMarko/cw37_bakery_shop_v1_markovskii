import {doc, collection, getDoc, setDoc, deleteDoc, getCountFromServer} from 'firebase/firestore'
import {db} from "../configurations/firebase-config";
import {Category, ProductType} from "../utils/shop-types";
import {getRandomNumber} from "../utils/tools";
import productConfig from '../configurations/products-config.json'

const prodCollection = collection(db,'product_collection')
const categoryCollection = collection(db,'category_collection')

export const addProduct = async (product: ProductType) => {
    product.id = getRandomNumber(10000,99999)+'';
    const ref = doc(prodCollection,product.id)
    await setDoc(ref,product)
}

export const addCategory = async (category:Category) => {
    const ref= doc(categoryCollection, category.category_name);
await setDoc(ref,category)
}

export const removeProduct = async (id: string) => {
    const ref = doc(prodCollection,id);
    const removed = await getDoc(ref);
    console.log(removed.data()); //Todo
    await deleteDoc(ref);
    return removed;
}
export const removeCategory = async (name: string) => {
  const ref = doc(prodCollection,name);
    const removed = await getDoc(ref);
    console.log(removed.data()); //Todo
    await deleteDoc(ref);
    return removed;
}

export const getProduct = async (id: string) => {
    const ref = doc(prodCollection,id);
    return await getDoc(ref);
}

export const isCategoryExists = async (name: string) => {
    const ref = doc(categoryCollection, name);
    const res = await getDoc(ref);
    return res.exists();
}

export const setProducts = async () => {
    let count = (await getCountFromServer(prodCollection)).data().count;
    if (count === 0) {
        const products: ProductType[] = productConfig.map(item => ({
            title: item.name,
            category: item.name.split('-')[0],
            unit: item.unit,
            cost: item.cost,
            img: item.name + '.jpg',
        }));

        for (let i = 0; i < products.length; i++) {
            const temp = await isCategoryExists(products[i].category);
            if (!temp)
                await addCategory({ category_name: products[i].category });

            await addProduct(products[i]);
            count++;
            console.log(count);
        }
    }
    return count;
}