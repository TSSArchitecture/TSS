import React, { Fragment } from 'react';
import {AboutBanner, AboutBannerDiv1, 
       AboutBannerDivTable, AboutBannerTalk, AboutBannerDiv2,
       AboutBannerDiv21, AboutBannerDiv22,
       StoryDiv, StoryDiv1, StoryDiv2,
       AboutPeopleDiv, AboutPeopleDiv1, AboutPeopleDiv2,
       CommitmentDiv, CommitmentSlash,
      CommitmentDiv1, CommitmentDiv11, CommitmentDiv12,
      CommitmentDiv13} from '../../styled/About/AboutBanner';
import { Linked } from '../../styled/Header/HeaderMenu';
import photo from '../../img/tssMark.jpg';
import photo2 from '../../img/story.jpg';
import photo3 from '../../img/photo.jpg';
// import photo4 from '../../img/img.jpg';
// import photo5 from '../../img/img1.jpg';
// import photo6 from '../../img/img2.jpg';
import details3 from '../../img/details/details3.jpg';
import details4 from '../../img/details/details4.jpg';
import details5 from '../../img/details/details5.jpg';
import ceo from '../../img/ceo.jpeg';



const AboutUsComp = () => {

  const styles = {
    abtd: {
      padding:"0.2rem",
    },
    whoColor: {
      color: "#fff",
    },
    abtColor: {
      color: "#000000",
      marginTop: "12%",
    },
    abtColor2: {
      color: "#ffffff",
      marginTop: "12%",
      marginLeft:"10%",
    },
    abtColor3: {
      color: "#000000",
      marginTop: "12%",
      marginLeft:"10%",
    },
    abt2para: {
      color: "#000000",
      marginBottom: "2%",
      paddingRight:"10%",
      fontSize: "18px",
      lineHeight: "1.5",
    },
    talkaboutdiv: {
      width:"8rem",
      borderBottom: "3px solid #181C4D",
      marginBottom: "10%",
      textAlign: "center",
      color:"#000000",
      lineHeight:" 1.6",
      fontWeight: "200",
      fontSize: "14px",
      wordBreak:" break-word",
    },
    imgTss: {
      width:"100%",
      height: "100%",
      borderRadius: "14px",
    },
    imgTssss: {
      width:"100%",
      height: "100%",
    },
    imgTsss: {
      width:"100%",
      height: "100%",
    },
    storypara: {
      marginBottom: "5%",
      marginLeft:"10%",
      marginRight:"10%",
      color:"#ffffff",
      fontWeight: "200",
      wordBreak:" break-word",
      opacity: ".9",
      fontSize: "18px",
      lineHeight: "1.5",
    },
    storyparaa: {
      marginBottom: "5%",
      marginLeft:"10%",
      marginRight:"10%",
      fontWeight: "200",
      wordBreak:" break-word",
      opacity: ".9",
      fontSize: "18px",
      lineHeight: "1.5",
    },
    talkaboutdivv: {
      width:"11rem",
      borderBottom: "3px solid #181C4D",
      marginLeft:"10%",
      marginBottom:"5%",
      textAlign: "center",
      color:"#000000",
      fontWeight: "200",
      wordBreak:" break-word",
      fontSize: "15px",
      lineHeight: "1.5",
    },
    commh1: {
      marginTop: "4%",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
    },
    commh2: {
      marginTop: "4%",
      lineHeight:" 1.6",
      fontWeight: "600",
      fontSize: "15px",
      wordBreak:" break-word",
    },
    para1: {
      marginBottom: "7%",
    },
    parah: {
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
      fontSize: "0.81rem",
    },
    commit: {
      marginBottom: "8%",
    },
    blogImg: {
      width: "100%",
      height: "20rem",
    },
  };
  return (
    <Fragment>
      <AboutBanner>
        <AboutBannerDiv1>
          <AboutBannerDivTable style={styles.banTab}>
            <tbody>
              <tr>
                <td style={styles.abtd}><Linked to='/'>Home</Linked></td>
                <td style={styles.abtd}> /</td>
                <td style={styles.abtd}> <Linked to='/about'>Who we are</Linked></td>
              </tr>
            </tbody>
          </AboutBannerDivTable>
          <h1 style={styles.whoColor}>TRIPPLE SOLUTION SERVICES - The Smart Home Providers</h1>
          <AboutBannerTalk>Tripple Solution Services (“TSS”) is a leading design
             solutions firm providing modest and classy interior design solutions that communicate class,
             life and style.
           </AboutBannerTalk>
        </AboutBannerDiv1>
      </AboutBanner>

      <AboutBannerDiv2>
        <AboutBannerDiv21>
          <h1 style={styles.abtColor}>About TSS</h1>
          <p style={styles.abt2para}>Tripple solution service (TSS) facility services provider was created to 
               provide facility management services that is our client’s first choice. 
              Every day, we work hard to acquire client 
              satisfaction and exceed expectation while delivering the highest quality standards within time 
              and budget constraint. 
          </p>
          <p style={styles.abt2para}>
            We are based in Nigeria. Of impeccable quality in service delivery, 
            Triple solution services (TSS) facilities has captured major Nigerian cities. 
            There is an essence of
            thinking outside the box, aimed at development and growth; welcoming changes and embracing diversity.
          </p>

          <p style={styles.abt2para}>
            The company was able to establish its current status with the help of our diverse 
            and multi-national workforce, with different experiences,
            and can provide optimal multi-faceted solutions for all business stages ranging from development to delivery.
          </p>

          <p style={styles.abt2para}>
            Tripple solution services (TSS) facility team and management look forward to 
            taking on new challenges in the future with the continued support 
            from our client and businesses.
          </p>
          <Linked to="/interior" style={styles.talkaboutdiv}>
            View our projects
          </Linked>
        </AboutBannerDiv21>


          <AboutBannerDiv22>
            <img style={styles.imgTss} src={photo} alt='tss' title='tss'/>
          </AboutBannerDiv22>
        </AboutBannerDiv2>

        <StoryDiv>
          <StoryDiv1>
            <img style={styles.imgTsss} src={photo2} title='tss' alt='tss'/>
          </StoryDiv1>

          <StoryDiv2>
            <h1 style={styles.abtColor2}>Our Story</h1>
            <p style={styles.storypara}>
              First established in Nigeria as a build provider, our passion and commitment 
              to service led to our continual expansion.
            </p>
            <p style={styles.storypara}>
              Our global growth kick started in 2018 as our client base expanded to include a number of 
              multinational corporations. We grew simultaneously, doubling in size and capacity,
              now offering a multitude of 
              services that support our client’s global real estate portfolios, across 5 countries worldwide.
            </p>
            <p style={styles.storypara}>
              In 2020 we were recognised as Nigeria's company with the second fastest growing 
              international sales, having increased our international work by over 52%. As a group we’re now 
              in our 3rd year of consecutive revenue growth and we continue to grow our team alongside this.
            </p>
          </StoryDiv2>
        </StoryDiv>

        <AboutPeopleDiv>
          <AboutPeopleDiv1>
            <h1 style={styles.abtColor3}>Our People</h1>
            <p style={styles.storyparaa}>
              Excellence – We are committed to providing the highest quality and standard of service thereby 
              delivering value and class to our clients.<br/><br/>

              Integrity – We are ethical, transparent, and driven by value in the delivery of our services.<br/><br/>

              Teamwork – We believe in building strong performance through teamwork, dynamism and synergy.
            </p>
            <p style={styles.storyparaa}>
              We believe the workspaces of tomorrow begin with people, a collaboration 
              between your team and ours. TSS is a global network of expertise. 
              Bridging geographical and cultural differences we are united 
              by our purpose to create workplaces that transform the way people work.
            </p>
            <p style={styles.storyparaa}>
              We have an open and collaborative culture that encourages collective 
              thinking across sectors, disciplines and global markets, allowing us to find
              innovative solutions and create meaningful change in 
              the workplace.
            </p>
            <Linked to="/" style={styles.talkaboutdivv}>
              Meet the people at TSS
            </Linked>
          </AboutPeopleDiv1>

          <AboutPeopleDiv2>
            <img style={styles.imgTssss} src={photo3} alt='tss' title='tss'/>
          </AboutPeopleDiv2>
        </AboutPeopleDiv>

        <AboutPeopleDiv>
          <AboutPeopleDiv1>
            <h1 style={styles.abtColor3}>CEO’s MESSAGE</h1>
            <p style={styles.storyparaa}>Through our creativity, expertise, and innovation, we provide classic, 
              modern, luxury or affordable smart and unique homes. We lend our skills and mastery of materials 
              to creatively 
              apply solutions to internal and external spaces, thereby bringing our clients’ desire to life. 
            </p>
            <p style={styles.storyparaa}>We set trends and keep on our fingers on the dynamics of creativity,
              style and functionality thereby expressing beauty, 
              creating ambience, managing space, and achieving harmony between design, space and materials.
            </p>

            <p style={styles.storyparaa}>
              We are the preferred smart-homes solutions provider giving sustainable and innovative solutions
              and the highest quality services to individuals and corporates organizations
            </p>
          </AboutPeopleDiv1>

          <AboutPeopleDiv2>
            <img style={styles.imgTssss} src={ceo} alt='tss' title='tss'/>
          </AboutPeopleDiv2>
        </AboutPeopleDiv>

        <CommitmentDiv>
          <CommitmentSlash />
          <h1 style={styles.commh1}>Our Commitment to sustainability and wellness</h1>
          <p style={styles.para1}>Creating the spaces of tomorrow requires the ability to think big, collaborate 
            widely and build a real capacity for change.
          </p>
          <CommitmentDiv1>
            <CommitmentDiv11>
              <img style={styles.blogImg} src={details3} title='tss' alt='tss'/>
              <h1 style={styles.commh2}>For future generations</h1>
              <p style={styles.parah}>
              We recognise that our activities must not only benefit our clients, stakeholders 
              and employees, but also benefit those people whom
              our projects impact, now and in the future, making sure that future
               generations have a planet to work on.
              </p>
            </CommitmentDiv11>

            <CommitmentDiv12>
              <img style={styles.blogImg} src={details4} title='tss' alt='tss'/>
              <h1 style={styles.commh2}>Creating sustainable workspaces</h1>
              <p style={styles.parah}>
              With extensive experience in industry certifications such as LEED, BREEAM, SKA and the WELL 
              Building Standard, our team is constantly striving to deliver sustainable spaces that 
              enhance the health, wellbeing and productivity of occupants.
              </p>
            </CommitmentDiv12>

            <CommitmentDiv13>
              <img style={styles.blogImg} src={details5} title='tss' alt='tss'/>
              <h1 style={styles.commh2}>Our commitment </h1>
              <p style={styles.parah}>
              Recognising the scale and approach we need in combating the existential problem that our planet 
              is currently facing, we feel as the creators of tomorrows workspaces 
              we have an urgent responsibility to embed resilience into our projects and that’s why we have 
              gained net carbon zero status.
              </p>
            </CommitmentDiv13>
          </CommitmentDiv1>
          <CommitmentSlash style={styles.commit} />
        </CommitmentDiv>
    </Fragment>
  )
};

export default AboutUsComp;