import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMoundted = true;

    useEffect(() =>{

        const getProducts = async () =>{

        };
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Products
