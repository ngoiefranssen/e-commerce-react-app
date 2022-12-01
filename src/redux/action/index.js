import React from "react";

const addCard = (product) =>{
    
    return{
        type : 'ADDITEM',
        payload : product,
    };
};

const deleteCart = (product) =>{
    
    return{
        type : 'DELETEITEM',
        payload : product,
    };
};
