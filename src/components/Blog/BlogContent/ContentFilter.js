const getCategory = (categories) => {
  const sample = "Real Estate"
  if(!Array.isArray(categories) || categories === "undefined"){
      return "An Error Occured.Invalid input type";
  };
  if(categories === "Undefined"){
    dispatch(setErrorMessage('Cannot read Categories'));
    return 'Cannot read Categories';
  };
  if(categories.length < 1){
    dispatch(setErrorMessage('There are no categories listed'));
    return 'There are no categories listed.';
  }
  try{
    const category = categories.filter(res => res.category === sample); //work from here
    if(Array.isArray(category) && category.length > 0){
      return category
    }else if(Array.isArray(category) && category.length < 0){
      dispatch(setErrorMessage('There is no category listed'));
      return 'There is no category listed.';
    }else{   
      dispatch(setErrorMessage('Fatal Error occured'));     
      return "Fatal Error occured";
    };                                                                                
  }catch(err){
    dispatch(setErrorMessage('Invalid Operation!'));
    return "Invalid Operation!";
  };
};   
