import React from 'react';

const Home = () => {

  return(
    <div className="hero">
        <div className="card text-bg-dark border-0">
            <img src="/assets/star.jpg" class="card-img" alt="Background"
                 height='550px' />
            <div class="card-img-overlay">
              <div className='container'>
              <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural 
                    lead-in to additional content. This content is a little bit 
                    longer.
                </p>
                <p className="card-text lea"><small>CHECK OUT THE TRENDS</small></p>
              </div>
            </div>
        </div>
    </div>
  )

};

export default Home;
