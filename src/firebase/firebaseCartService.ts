
import {doc, collection, getDoc, setDoc, deleteDoc} from 'firebase/firestore';
import {db} from "../configurations/firebase-config";
import {collectionData} from 'rxfire/firestore';
import {ShopCartProdType} from "../utils/shop-types";
import {Observable} from "rxjs";

export const addProductToCart = async  (collName: string, product:ShopCartProdType) => {
    const ref = doc(db, collName, product.cartProdId);
    await setDoc(ref,product);
}

export const removeProductFromCart = async (collName:string, id:string)=> {
    const ref = doc(db, collName, id);
    await  deleteDoc(ref);
}

export const addProductUnitToCart = async (collName:string, id:string) => {
    const ref = doc(db, collName, id);
    let count = 0;
    const temp = await getDoc(ref);
    const prodData = temp.data() as ShopCartProdType;
    if(prodData)
        count = prodData.count;

    await addProductToCart(collName, {cartProdId: id, count: count+1})
}

export const removeProductUnitFromCart = async (collName:string, id:string)=> {
    const ref = doc(db, collName, id);
    let count = 0;
    const temp = await getDoc(ref);
    const prodData = temp.data() as ShopCartProdType;
    if(prodData)
        count = prodData.count;
    if(count <= 1)
        await removeProductFromCart(collName, id)
    else await addProductToCart(collName, {cartProdId: id, count: count-1})
}

export const getCartProducts = (collName:string):Observable<ShopCartProdType[]> => {
    return  collectionData(collection(db, collName)) as Observable<ShopCartProdType[]>
}