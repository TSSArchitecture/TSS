import React, { Fragment, lazy, Suspense, } from 'react';
import dummyImage from '../../../../img/hotel/hotel5.jpg';
import { CommitmentSlash, CommitmentSlash2 } from '../../../../styled/About/AboutBanner';
import { Helmet } from 'react-helmet';
import AdsCardUtako from '../../BlogAds/AdsCard/AdsCardUtako';
import AdsMaterial from '../../../AdsMaterial/TopFlightShort';


const BlogHeaderText = lazy(() => import('../BlogHeaderText'));
const BlogReadContent = lazy(() => import('../BlogReadContent'));
 

const SEOFabricCare = () => {

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
            TSS - Interior decoration - TRIPPLE SOLUTIONS SERVICES - 
            www.tssarchitecture.com -
          </title>
          <link rel="canonical" href="https://www.tssarchitecture.com" />
          <title>TSS | Tripple Solutions Services 
            | – Interior Architecture Design Facility Management. -
            - interior decoration -
          </title>
          <meta name="description" content="TSS | -Tripple Solutions Services | – 
             | City of Utako, Abuja - 
             Interior decoration-" />
          <meta property="og:site_name" content=" TSS |  Interior decoration |
           Tripple Solutions Services | tssarchitecture.com" />
          <meta
            name="description"
            content="TSS | Interior decoration | -Tripple Solutions Services 
            | – Number One Stop Real Estate Services | Interior Architecture Design Facility Management"
          />
        </Helmet>
          <div className='blog-read'>
            <Suspense fallback={<p>Loading...</p>}>
              <BlogHeaderText 
                blogText = 'CREATING SUSTAINABLE WORK SPACES'
              />
            </Suspense>

            <img className='blogImage' 
              src={dummyImage} alt='TSS || Interior decoration' 
              title='Interior decoration'/>

            <CommitmentSlash  style={styles.commitSlash} />
            <CommitmentSlash2  style={styles.commitSlash2} />

          <Suspense fallback={<p>Loading...</p>}>
            <BlogReadContent 
              para1= {` With extensive experience in industry certifications vetted to deliver top quality building
               standard, our team is 
               constantly striving to deliver sustainable spaces that enhance the health, wellbeing 
               and productivity of occupants.`
                      }
                para2 = {`What we do at TSS is more than just birthing, maintaining and creating structural and management 
                services at its peak. We imbibe the culture of sustainability for every home, business 
                or service based needs.`}

                adsTwo = {<Fragment>
                  <AdsMaterial />
                </Fragment>}

                ads = {<Fragment>
                  <AdsCardUtako />
                </Fragment>}

              para3 = {`We take pride in our impeccable leadership characteristics that is based off integrity. 
              We are modelled with a network of professionals, our teamwork are geared towards 
              providing efficient and satisfying customer experience. We 
              are responsible for every result as we engage only best practices
              whenever we bring innovation to the fore. `}
              
              
              para4 = {`When we are involved in erecting any type of structure, we pay attention to detail even 
              before the thought of forming the first brick. Our demonstrated expertise 
              on the field spans over 10 years of quality 
              in service delivery and we have continued to deliver happiness to homes, 
              businesses, and respective clients.`}

              para5 = {`We are professionals that pride on quality and affordable service in 
              delivery while keeping all components of every environment intact and optimally maintained. 
              Choose one time or speak to us directly for a subscription plan, and
              let’s have your environment properly cared for, maintained and 
              groomed in quality for you and yours. `}

              para6 = {`Find property for rent, out-right buy or 
                        installment here at TSS Architecture.`
                        }
              />
          </Suspense>
        </div>
     </Fragment>

  )
};


export default SEOFabricCare;