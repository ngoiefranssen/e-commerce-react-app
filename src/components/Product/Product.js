import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const getProduct = async () => {
            
            const responseDataProduct = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await responseDataProduct.json());
            setLoading( false);
        }
        getProduct();
    },[input]);

    const Loading = () =>{
        return(
            
        );
    }
    
    return(
        <div>
            <div className="container">
                {loading ? <Loading /> : < ShowProdcut/>}
            </div>
        </div>
    );
}; 
export default Product;