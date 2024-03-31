import { createContext } from "react";

export const ToDoContextComponent= createContext({
    dataItems:[],
    addItemList:()=>{},
    deleteItemList:()=>{}
})