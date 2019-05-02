import React from 'react';

const Title = () => {
  return (
    <div className='title'>
      <img src={require('../components/img-component/logo-chr.png')} className='logo-character'/>
      <img src={require('../components/img-component/logo.png')} className='logo'/>
    </div>
  );
};

export default Title;