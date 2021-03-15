import React from 'react'
import styles from './SearchQuery.module.css'

const SearchQuery = () => {
    return (
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search query"  />
        <div className="input-group-append">
          <button className="btn btn-primary p1" type="button">Search</button>
        </div>
      </div>
     
       
    )
}

export default SearchQuery
