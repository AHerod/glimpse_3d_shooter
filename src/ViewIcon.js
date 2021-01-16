import * as THREE from 'three'
import React from 'react'

function ViewIcon() {

  return (
    <div className={'view-icon'}>
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" width={50} height={50}>
        <defs />
        <path
          d="M50 34c-17.38 0-31 7.91-31 18 0 9.47 12 17 27.85 17.91l-6 6 4.24 4.24 11-11a3 3 0 000-4.24l-11-11-4.24 4.24 5.76 5.76C33.73 63 25 57.23 25 52c0-5.68 10.27-12 25-12s25 6.32 25 12c0 3.61-4.17 7.49-11 9.83v6.29c10.16-2.92 17-9 17-16.12 0-10.09-13.62-18-31-18z" />
      </svg>
    </div>
  )
}


export default ViewIcon
