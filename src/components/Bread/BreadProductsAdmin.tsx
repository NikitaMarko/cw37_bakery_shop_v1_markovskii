/*
export type ProductType = {
    id?:string
    title: string,
    category: string,
    unit:string,
    cost: number,
    img: string
}
 */

import {useAppSelector} from "../../redux/hooks";
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";
import React from "react";
import {RemoveIcon} from "../templates/CustumIcons";
import {removeProduct} from "../../firebase/firebaseDBService";

const BreadProductsAdmin = () => {
    const {currProds} = useAppSelector(state => state.products)
    const {authUser} = useAppSelector(state => state.auth)
    const handleRemove = async (id: string) => {
        if(!authUser?.email?.includes('admin')){
            alert('The product cannot be removed.')
            return;
        }
        try {
            await removeProduct(id);
            console.log(`Product ${id} successfully removed`);
        }catch(err){
            console.error('Error removing product',err);
        }
    }

    const rows = currProds;
    const columns : GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90, flex:0.3 },
        { field: 'title', headerName: 'Product Name', width: 150, flex:1 },
        { field: 'category', headerName: 'Category', width: 90, flex: 0.4 },
        { field: 'unit', headerName: 'Unit', width: 90, flex: 0.4 },
        { field: 'cost', headerName: 'Price in ILS', width: 90, flex: 0.4, editable:true },
        { field: 'img', width: 200,flex:0.5, renderCell: (params) => {
            return(
                <Avatar src={'/images/' + params.value}/>
            )
            } },
        {field:'actions', type:'actions', flex:0.3,
            getActions:({id}) =>
                [
                    <GridActionsCellItem label={'remove'} icon ={<RemoveIcon/>}
                                         onClick={() => handleRemove(id as string)}
                    />
                ]
        }
    ]

    return (
        <Box>
            <DataGrid columns={columns} rows={rows}/>
        </Box>
    );
};

export default BreadProductsAdmin;