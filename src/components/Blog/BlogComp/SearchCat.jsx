import React from 'react';
import { connect } from 'react-redux';
import searchIcon from '../../../img/searchicon.png';
import { Categories, BlogCategories } from '../../../helpers/blogCategories';
import { setCategoryState } from '../../../actions/category';


class SearchCat extends React.Component{

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(setCategoryState(BlogCategories(Categories)));
  };

  render(){
    // const {category} = this.props.category;
    // console.log(category);

    return (
      <div className='blog-search'>
        <form className='blog-search-form'>
          <input className='blog-input-search' placeholder=' Find Article'/>
        </form>
        <img src={searchIcon} className='blog-search-button' 
          alt='Tripple Solution Services' title='Tripple Solution Services'/>
      </div>
    )
  };
};

// export default SearchCat;


const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchCat); 