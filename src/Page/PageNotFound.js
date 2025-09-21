import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <div className="banner-wrapper">
            <div className="paramarsh-banner">
                <img src="https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner-img" />
            </div>
            <div className="pramash-content" style={{width: 'auto'}}>
                <div className='page-content'>
                    <h1>Page Not Found</h1>
                    <Link to="/">Go Back Home</Link> <span> / Page Not Found</span>
                </div>
            </div>
        </div>
    </>
  )
}
export default PageNotFound
