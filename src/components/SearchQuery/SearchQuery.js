import React from 'react'
import styles from './SearchQuery.module.css'

const SearchQuery = () => {
    return (
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search query"  />
        <div class="input-group-append">
          <button class="btn btn-primary p1" type="button">Search</button>
        </div>
      </div>
     
       
    )
}

export default SearchQuery
