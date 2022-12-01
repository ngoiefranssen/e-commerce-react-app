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
    },[]);

    const Loading = () =>{
        return(
            <>
                Loading.....
            </>
        );
    };

    const ShowProdcut = () =>{
        
        return(
            <div className="container">
                <div className="">

                </div>
            </div>
        );
    };
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    { loading ? <Loading/> : < ShowProdcut/> }
                </div>
            </div>
        </div>
    );
};

export default Product;