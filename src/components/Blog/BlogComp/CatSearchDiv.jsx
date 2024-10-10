import React, { Fragment } from 'react';
import { connect, } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { BlogCategories } from '../../../helpers/blogCategories';
import { setCategoryState, setCurrentCategory, 
         setErrorMessage, setBlogStructure, setRetrievedCategory  } from '../../../actions/category';
import ContentStructure from '../BlogContent/ContentStructure';
import SearchCat  from './SearchCat';
import CatCardDiv from './CatCard';
import rightArrow from '../../../img/arrow-right.png';
import leftArrow from '../../../img/arrow-left.png';


class CatSearchDiv extends React.Component{
  componentDidMount (){
    const { dispatch } = this.props;
    const getBlogStructure = ContentStructure();
    dispatch(setBlogStructure(getBlogStructure));
    dispatch(setRetrievedCategory(getBlogStructure));
    window.scrollTo(0, 0);
    
  };
    render(){
    const { dispatch } = this.props;
    const {blogStructure, category,  } = this.props.category;

  const changeCategory = () => {
    const theChange = BlogCategories(category);
    dispatch(setCategoryState(theChange));
  };

  const getCategory = (categories, checker) => {
    if(!Array.isArray(categories) || categories === "undefined"){
        return "An Error Occured.Invalid input type";
    }if(checker === "undefined at input two"){
      return "An Error Occured.Invalid input type";
    }if(categories === "Undefined"){
        dispatch(setErrorMessage('Cannot read Categories'));
        return 'Cannot read Categories';
    };
    if(categories.length < 1){
      dispatch(setErrorMessage('There are no categories listed'));
      return 'There are no categories listed.';
    }
    try{
      dispatch(setCurrentCategory(checker));
      const toGetCategory = categories.filter(res => res.category === checker); //work from here
      if(Array.isArray(toGetCategory) && toGetCategory.length > 0){
        dispatch(setRetrievedCategory(toGetCategory));
        return toGetCategory
      }else if(Array.isArray(toGetCategory) && toGetCategory.length < 1){
        dispatch(setErrorMessage('No listing on selection.'));
        return [];
      }else{   
        dispatch(setErrorMessage('Fatal Error occured'));     
        return "Fatal Error occured";
      };                                                                                
    }catch(err){
      dispatch(setErrorMessage('Invalid Operation!'));
      return "Invalid Operation!";
    };
  };

      return (
          <div className = 'cat-search-div'>
            <div className='blog-categories'>
              
              {category && category.length > 1 ? (
                <Fragment>
                  <div className='catSearchCase'>
                    <div className='blog-show-more'>
                      <img onClick={() => {
                        changeCategory();
                      }} src={leftArrow} alt='tss blog' title='tss blog' />
                    </div>
                    {category.map( data => (
                      <div onClick={() => {
                         getCategory(blogStructure, data);
                         dispatch(setRetrievedCategory(getCategory(blogStructure, data)));
                      }} className='categories categories1' id='category1' key={`${data}div2`}>
                        <CatCardDiv category={data} key={`${data}catcarddiv`}/>
                      </div>
                    ))}
                    <div className='blog-show-more'>
                        <img onClick={() => {
                          changeCategory();
                        }} src={rightArrow} alt='tss blog' title='tss blog' />
                      </div>
                </div>
                </Fragment>
              ): ''}
            </div>
            <SearchCat />
          </div>
        )
    }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CatSearchDiv);
