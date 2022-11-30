import React from 'react';
import Products from '../Products/Products';

const Home = () => {

  return(
    <div className="hero">
        <div className="card text-bg-dark border-0">
            <img src="/assets/star.jpg" class="card-img" alt="Background"
                 height='550px' />
            <div class="card-img-overlay d-flex flex-column justify-content-center">
              <div className='container'>
                <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
                  <p className="card-text">
                      This is a wider card with
                  </p>
                  <p className="card-text lead fs-2"><small>CHECK OUT THE TRENDS</small></p>
              </div>
            </div>
        </div>
        <Products />
    </div>
  );

};

export default Home;
