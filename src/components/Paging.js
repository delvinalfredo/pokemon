import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paging = (props) => {
const {page, totalPages, onLeftClick, onRightClick} = props
  return (
    <div className='pagination-container'>
      <Pagination>
        <Pagination.Prev onClick={onLeftClick}/>
        <Pagination.Item>{page} Of {totalPages}</Pagination.Item>
        <Pagination.Next onClick={onRightClick}/>
      </Pagination>
        
    </div>
  )
}

export default Paging