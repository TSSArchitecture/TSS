import React from 'react';

const BlogPagination = () => {
  return (
    <div className='product-pagination'>
      <table className='product-pagination-tab'>
        <tbody>
          <tr>
            <td className='product-pag-td0'>
              <button className='product-button0'>Previous</button>
            </td>
            <td className='product-pag-td1'>
              <button className='product-button1'>Next</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default BlogPagination;