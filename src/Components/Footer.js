import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub,BsYoutube,BsLinkedin,BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className='footer-top py-3'>
        <div className="container-xxl">
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                    type='text'
                    className='form-control py-1'
                    placeholder='Your Email Address'
                    aria-label='Your Email Address'
                    aria-describedby='basic-addon2'
                    />
                    <span className='input-group-text p-3' id='basic-addon2'>
                      Subscribe
                    </span>

              </div>
              {/* Add newsletter sign up form or other content here */}
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-middle py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white'>Contact Us</h4>
              <div>
                <address>HNO:*** Near *** India</address>
                <a href='tel:+91 8894364176' className='mt-3 d-block mb-2 text-white'>+917986352023 </a>
                <a href='mailto:XYZ@gmail.com' className='mt-2 d-block mb-2 text-white'>XYZ@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30'>
                  <a className="text-white" href=''><BsGithub  /></a>
                  <a className="text-white" href=''><BsYoutube /></a>
                  <a className="text-white" href=''><BsLinkedin /></a>
                  <a className="text-white" href=''><BsInstagram /></a>
              

 
             
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'> Privacy Policy </Link>
                <Link className='text-white py-2 mb-1'> Refund Policy</Link>
                <Link className='text-white py-2 mb-1'> Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'> Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Accounts</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'> About Us  </Link>
                <Link className='text-white py-2 mb-1'> Contact</Link>
                <Link className='text-white py-2 mb-1'> FAQ</Link>
                <Link className='text-white py-2 mb-1'> Support</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'> Laptops </Link>
                <Link className='text-white py-2 mb-1'> Headphones</Link>
                <Link className='text-white py-2 mb-1'> Tables</Link>
                <Link className='text-white py-2 mb-1'> Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-bottom py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy;{new Date().getFullYear()}; Powered By Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
