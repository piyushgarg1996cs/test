import React from 'react';
import ReactStars from 'react-rating-stars-component';

function SpecialProduct() {
  return (
    <div className='col-4'>
      <div className='special-product-card p-3'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Havels</h5>
            <h6 className='title'>mmmmm</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price'>
              <span className='red-p'>$100</span>&nbsp;
              <strike>$200</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>5</b> days
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                <span className='badge rounded-circle p-2 bg-warning'>1</span>
              </div>
            </div>
            <div className='prod-count mt-3'>
              <p>Products:</p>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
