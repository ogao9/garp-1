import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center">
      <div >
        <p className='text-3xl'>Community platform for research papers</p>
        <p className='text-1xl'>Keep track of papers you want to read, and discover what your peers are reading.</p>
      </div>
      <div >
        <a href="/api/auth/signin">Log in</a>
        {/* <Button color="primary" href="/api/auth/signin">Log in</Button> */}
      </div>
    </div>

  )
}

export default LandingPage;