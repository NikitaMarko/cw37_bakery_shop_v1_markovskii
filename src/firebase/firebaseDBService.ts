import {doc, collection, getDoc, setDoc, deleteDoc, getCountFromServer} from 'firebase/firestore'
import {db} from "../configurations/firebase-config";
import {ProductType} from "../utils/shop-types";
import {getRandomNumber} from "../utils/tools";

const prodCollection = collection(db,'product_collection')
const categoryCollection = collection(db,'category_collection')

export const addProduct = async (product: ProductType) => {
    product.id = getRandomNumber(10000,99999)+'';
    const ref = doc(prodCollection,product.id)
    await setDoc(ref,product)
}