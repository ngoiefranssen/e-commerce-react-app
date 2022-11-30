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
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default Products

