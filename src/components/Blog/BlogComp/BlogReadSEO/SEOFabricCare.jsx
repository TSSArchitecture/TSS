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
                blogText = 'FABRIC CARE'
              />
            </Suspense>

            <img className='blogImage' 
              src={dummyImage} alt='TSS || Interior decoration' 
              title='Interior decoration'/>

            <CommitmentSlash  style={styles.commitSlash} />
            <CommitmentSlash2  style={styles.commitSlash2} />

          <Suspense fallback={<p>Loading...</p>}>
            <BlogReadContent 
              para1= {` How did he sleep at night? How much time do you take to rest in a day? 
                Mark happens to be a
                project manager at a top audit firm. His job responsibilities usually would not avail 
                him time to carry out home duties properly. More often than not, he would jet out to 
                the office to catch an appointment, get on a travel appointment, sit in 
                meetings, or arrive early in order to be able to “clock in” JUST in time for the day’s task. 
                Mark was a top performer at the office, he usually puts in an astonishing 
                65 hours every other week.`
                      }
                para2 = {`It is natural that when he returns home from work, 
                he would reach for the waiting bedside in a bid to get that much needed rest. 
                The waiting bed sheets are more than willing to wrap him in embrace. Given that 
                he is really tired, he would get that much recovery required to begin the 
                next day early enough.  It is obvious that the sheets could care less 
                likewise the furniture that bears his 
                weight every other day and Mark had not for once thought to think about 
                who really cared indeed.`}

                adsTwo = {<Fragment>
                  <AdsMaterial />
                </Fragment>}

                ads = {<Fragment>
                  <AdsCardUtako />
                </Fragment>}

              para3 = {`Dr. Jones and his wife Dr. Clara shares similar experiences. 
                They are both medical doctors
                with busy schedules at the hospital almost every day of the week. Their kids
                live through their growth phase oblivious of 
                their room care needs that should be done occasionally.`}
              
              
              para4 = {`Here at TSS, we are not just in the detail, we are every touch, look and feel.
                When you choose us, we provide durable, standard and fit to size furniture that 
                are long lasting and built to taste. We also highly recommend our facility 
                management services. Mr. Mark and Dr. Jone’s family now always trust us 
                after we handled a thorough fabric care in their spaces, they now reach 
                out when they require the perfect maintenance agents readily available on 
                request. When there’s an emergency trip for businesses or even leisure get-away, 
                TSS will book you right
                into preferred style and comfort. We are only a call or message away, 
                do well to leave us a beep.`}

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