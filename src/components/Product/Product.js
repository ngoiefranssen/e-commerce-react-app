import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const getProduct = async () => {
            
            setLoading(true);
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
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px"
                        width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p  className="lead fw-bolder">
                        Rating : {product.rating && product.rating.rate}
                        <i className="fa fa-statr"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add to cart
                    </button>
                    <NavLink className="btn btn-outline-dark px-4 py-2">
                        Add to cart
                    </NavLink>
                </div>
            </>
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