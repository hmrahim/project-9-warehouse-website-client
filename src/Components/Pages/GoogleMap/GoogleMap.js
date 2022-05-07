import React from 'react';

const GoogleMap = () => {
  return (
    <div className=''>
      <h1 className=' text-center mt-4 text-capitalize'>Our Location</h1> <hr className='mb-5 w-50 mx-auto' />
  
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.5658581164635!2d91.2156974961051!3d23.905008750427164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f7d409e0bca5%3A0x8852eeda0c2ca61a!2sSingerbil%20Bazar!5e0!3m2!1sen!2sbd!4v1651931279292!5m2!1sen!2sbd" width="100%" height="500px" style={{border:"1px solid blck"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </div>
  );
};

export default GoogleMap;