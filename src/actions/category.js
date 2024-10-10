export const setCategoryState = (category) => (   
  {
    type: 'SET_CATEGORY_STATE',
    category,
  }
);

export const setRetrievedCategory = (retrievedCategory) => (   
  {
    type: 'SET_RETRIEVED_CATEGORY',
    retrievedCategory,
  }
);


export const setCurrentCategory = (currentCategory) => (   
  {
    type: 'SET_CURRENT_CATEGORY',
    currentCategory,
  }
);

export const setErrorMessage = (errorMessage) => (   
  {
    type: 'SET_ERROR_MESSAGE',
    errorMessage,
  }
);

export const setBlogStructure = (blogStructure) => (   
  {
    type: 'SET_BLOG_STRUCTURE',
    blogStructure,
  }
);