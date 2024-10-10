import React, { Fragment, lazy, Suspense, } from 'react';
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector, } from 'react-redux';
// import Modal from 'react-modal';
// import BlogHeaderText from './BlogHeaderText';
// import BlogImage from './BlogImage';
import dummyImage from '../../../../img/abuja.jpeg';
import { CommitmentSlash, CommitmentSlash2 } from '../../../../styled/About/AboutBanner';
import { Helmet } from 'react-helmet';
import AdsCardUtako from '../../BlogAds/AdsCard/AdsCardUtako';
import AdsMaterial from '../../../AdsMaterial/TopFlightShort';
// import close from '../../../img/close.png';


const BlogHeaderText = lazy(() => import('../BlogHeaderText'));
const BlogReadContent = lazy(() => import('../BlogReadContent'));
 

const BlogReadSEOUtako = () => {

  const styles = {
    commitSlash: {
      marginTop: "0%",
      marginBottom: "1%",
      opacity:".4",
      width: "80%",
      background: "#FFC107",
      
    },
    commitSlash2: {
      marginTop: "1.1%",
      marginBottom: "1%",
      width: "80%",
      opacity:".4",
      background:"#000533",
    },
  }
    return (

     <Fragment>
       <Helmet>
        <meta charSet="utf-8" />
          <title>
            TSS - BOOKINGS NEAR UTAKO - TRIPPLE SOLUTIONS SERVICES - 
            www.tssarchitecture.com -
          </title>
          <link rel="canonical" href="https://www.tssarchitecture.com" />
          <title>TSS | Tripple Solutions Services 
            | – Interior Architecture Design Facility Management. -
            - HOTEL BOOKINGS NEAR UTAKO -
          </title>
          <meta name="description" content="TSS | -Tripple Solutions Services | – 
             | City of Utako, Abuja - 
            HOTEL BOOKINGS NEAR UTAKO -" />
          <meta property="og:site_name" content=" TSS | Tripple Solutions Services | tssarchitecture.com" />
          <meta
            name="description"
            content="TSS | City of Utako, Abuja | -Tripple Solutions Services | – Number One Stop Real Estate Services | Interior Architecture Design Facility Management"
          />
        </Helmet>
          <div className='blog-read'>
            <Suspense fallback={<p>Loading...</p>}>
              <BlogHeaderText 
                blogText = 'THE CITY OF UTAKO, ABUJA'
              />
            </Suspense>

            <img className='blogImage' 
              src={dummyImage} alt='Bookings Near City of Utako, Abuja' 
              title='Bookings Near City of Utako, Abuja'/>

            <CommitmentSlash  style={styles.commitSlash} />
            <CommitmentSlash2  style={styles.commitSlash2} />

          <Suspense fallback={<p>Loading...</p>}>
            <BlogReadContent 
                para1= {`Abuja, the Federal Territory of Nigeria’s capitol is a welcoming environment characterized by its 
                        extravagance; styled in plush for the most part. Little wonder suburbs also enjoy a taste of rich 
                        neighborhood feeling. Might not quite be dubbed “City of Lights”, but definitely accommodates a 
                        plethora of rich African culture, cuisines, tapestry amongst many 
                        other befitting trends that surely endears the Nigerian Capital as its finest central area.`
                        }
                para2 = {`Utako is one of Abuja’s city Centre, an urban district which sits directly North-west and finely 
                          laid out. A remarkable feature distinct by the presence of towering number 
                          of residential accommodation, which also includes commercial properties fine-tuned
                          to suit the city’s tolerance and cravings.`}
                adsTwo = {<Fragment>
                  <AdsMaterial />
                </Fragment>}
                ads = {<Fragment>
                          <AdsCardUtako />
                        </Fragment>}
                
                para3 = {`Utako is perked up by lots of charming city spots, recreational leanings, parks and captivating 
                          open spaces. Night-life on here bustles with a variety of night-clubs, high-end restaurants, 
                          leisure sit-outs amongst several other perks. Here at TSS ARCHITECTURE, you can 
                          seamlessly check into hotels across the district and we would ensure that you have the 
                          most satisfying stay whenever you choose us. Place a call or leave a message. 
                          You are only that step away enjoying comfort in 
                          safe spaces filled with memorable enriching experiences.`}

                para4 = {`Landmarks: Utako is adjunct Jabi to the west, Mabushi to the North, East of Wuse and Wuye up South.
                          The area boasts of thought out and planned road network that provides easy access 
                          to various parts of the city and suburbs. Main roads in the
                          neighborhood include: Shehu Yaradua way, Obafemi
                          Awolowo way and Nnamdi Azikiwe expressway. `}

                para5 = {`Choice Location: Architectural style and designs as seen in the area have built 
                          to taste features
                          ranging from bungalows, terraces, apartment, mansions and duplexes. Residents 
                          located within inner districts like Wuse are high-end 
                          middle class to high income earners.`
                          }

                para6 = {`Find property for rent, out-right buy or 
                          installment here at TSS Architecture.`
                          }
              />
          </Suspense>
        </div>
     </Fragment>

  )
};


export default BlogReadSEOUtako;