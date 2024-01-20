import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#ffffff' }}>
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        © 2024 Copyright:
        <a className='text-dark' href='https://github.com/Soylatte/Hej-cafe-web.git'>
          Hej.com
        </a>
      </div>
    </MDBFooter>
  );
}