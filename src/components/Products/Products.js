import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMoundted = true;

    useEffect(() =>{

        const getProducts = async () =>{

            setLoading(true);
            const responseData = fetch('https://fakestoreapi.com/products');

            if(componentMoundted)
            {
                setData(await responseData.clone().json());
                setFilter(await responseData.json());
                setLoading(true);
                console.log(filter)
            }

            return () => { componentMoundted = false; }
        };

        getProducts();
    }, []);


  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12 mb-5'>
                <h1 className='display-6 fw-bolder text-center'>
                    Latest Products
                </h1>
            </div>
        </div>
        <div className='row justify-content-center'>
            {loading ? <loading /> : <showLoading />}
        </div>
      </div>
    </div>
  );
};

export default Products;

