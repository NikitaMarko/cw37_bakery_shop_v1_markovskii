import React from "react";
import {ShopCartProdType, TableShopCartDataType} from "../utils/shop-types";
import {useAppSelector} from "../redux/hooks";
import {removeProductFromCart} from "../firebase/firebaseCartService";
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";
import {RemoveIcon} from "./templates/CustumIcons";

const ShoppingCart = () => {
    const {currProds} = useAppSelector(state => state.products);
    const{authUser} = useAppSelector(state => state.auth);
    const {cartProducts} = useAppSelector(state => state.cart)
    const getTableShopCartProducts = (prod:ShopCartProdType)=>{

        const product = currProds.find(item => item.id === prod.cartProdId);
        let res:TableShopCartDataType = {id:undefined, amount:0, cost:0, count:0, category:'', img:'', unit:'', title:''}
        if(!product){
           removeProductFromCart(`${authUser!.email}_collection`, prod.cartProdId)}
         else res = {...product, count:prod.count, amount:prod.count * product.cost}
        return res;
    }
    const columns : GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90, flex:0.3 },
        { field: 'title', headerName: 'Product Name', width: 150, flex:1 },
        // { field: 'category', headerName: 'Category', width: 90, flex: 0.4 },
        { field: 'unit', headerName: 'Unit', width: 90, flex: 0.4 },
        { field: 'cost', headerName: 'Price in ILS', width: 90, flex: 0.4 },
        { field: 'quantity', headerName: 'Quantity', width: 90, flex: 0.4, editable:true },
        { field: 'amount', headerName: 'Amount', width: 90, flex: 0.4 },
        { field: 'img', width: 200,flex:0.5, renderCell: (params) => {
                return(
                    <Avatar src={'/images/' + params.value}/>
                )
            } },
        {field:'actions', type:'actions', flex:0.3,
        getActions:({id}) =>
        [
            <GridActionsCellItem label={'remove'} icon ={<RemoveIcon/>}
            onClick={() => removeProductFromCart(`${authUser!.email}_collection`, id as string)}
            />
        ]
        }
    ]

    const rows = cartProducts.map(prod => getTableShopCartProducts(prod))
        .filter(tabProd => tabProd.id !== undefined)

    return (
        <Box>
            <DataGrid columns={columns} rows={rows}/>
        </Box>
    );
};

export default ShoppingCart;