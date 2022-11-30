import React, { useEffect, useState } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() =>{

        const getProducts = async () =>{

            setLoading(true);

            const responseData = await fetch('https://fakestoreapi.com/products');

            if(componentMounted)
            {
                setData(await responseData.clone().json());
                setFilter(await responseData.json());
                setLoading(false);
                console.log(filter);
            }; 

            return () => { componentMounted = false }
        };

        getProducts();
    }, []);

    const Loading = () => {
        return(
            <> Loading.... </>
        );
    };

    const ShowLoading = () => {

        return(
            <>
                <div className='buttons d-flex  justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Men's Closing</button>
                    <button className='btn btn-outline-dark me-2'>Womem's Closing</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'>Electornic</button>
                </div>
                {filter.map((product) =>{
                    return(
                        <>
                            <div className='clo-md-3'>
                                <div class="card h-1000  text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} />
                                    <div class="card-body">
                                        <h5 class="card-title" height="250px">
                                            { product.title.substring(0, 12) }
                                        </h5>
                                        <p class="card-text">${ product.price }</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </> 
        );
    };

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
            {loading ? <Loading /> : <ShowLoading />}
        </div>
      </div>
    </div>
  );
};

export default Products;

