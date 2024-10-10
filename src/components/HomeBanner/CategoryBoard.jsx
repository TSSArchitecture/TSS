import React from 'react';
import { CategoryBannerDiv, CategoryBannerDiv1,
         CategoryBannerDiv2, CategoryBannerDiv3} from '../../styled/HomeBanner/CategoryBannerDiv';


const CategoryBoard = () => {
  const styles = {
    catStyle: {
      color:"#fff",
      fontSize: "3.1rem",
      opacity: ".78",
      lineHeight: "1.4",
      fontWeight: "200",
      wordBreak: "break-word",
  },
}
  return (
    <CategoryBannerDiv>
      <CategoryBannerDiv1>
        <p style={styles.catStyle}>Residential</p>
      </CategoryBannerDiv1>

      <CategoryBannerDiv2>
        <p style={styles.catStyle}>Commercial</p>
      </CategoryBannerDiv2>

      <CategoryBannerDiv3>
        <p style={styles.catStyle}>Facility Management</p>
      </CategoryBannerDiv3>
    </CategoryBannerDiv>
  )
};

export default CategoryBoard;