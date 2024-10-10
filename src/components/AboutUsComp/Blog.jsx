import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import {setBlogReadState} from '../../actions/blogRead';
import { CommitmentDiv1, CommitmentDiv11, 
         CommitmentDiv12, CommitmentDiv13} from '../../styled/About/AboutBanner';
import hover from '../../components/CSS/Others/hover.module.css';
import loader from '../CSS/Others/loader.module.css';
// import photo4 from '../../img/img.jpg';
// import photo5 from '../../img/img1.jpg';
// import photo6 from '../../img/img2.jpg';
import details3 from '../../img/hotel/hotel1.jpg';
import details4 from '../../img/details/details4.jpg';
import details5 from '../../img/abuja.jpeg';

const Blog = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    },
    talkaboutdiv: {
      width:"8rem",
      borderBottom: "3px solid #616161",
      marginBottom: "10%",
      textAlign: "center",
      color:"#000000",
      lineHeight:" 1.6",
      fontWeight: "200",
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
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
      opacity: ".9",
    },
    storyparaa: {
      marginBottom: "5%",
      marginLeft:"10%",
      marginRight:"10%",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
      opacity: ".9",
    },
    talkaboutdivv: {
      width:"11rem",
      borderBottom: "3px solid #616161",
      marginLeft:"10%",
      marginBottom:"5%",
      textAlign: "center",
      color:"#000000",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
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
      width: "50%",
    },
    butt: {
      marginTop: "2%",
      width: "50%",
      marginLeft: "25%",
      borderStyle: "none",
      padding: "0.78rem",
      fontSize: "0.86rem",
      background: "#FFD700",
      color: "#fff",
      borderRadius: "14px",
    },
    // blogImg: {
    //   width: "100%",
    //   height: "20rem",
    // },
  };
  return (
    <Fragment>
      <CommitmentDiv1>
        <CommitmentDiv11>
          <img className={loader.loader} src={details3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Fabric Care</h1>
          <p style={styles.parah}>
            How did he sleep at night? How much time do you take to rest in a day? Mark happens to be a 
            project manager at a top audit firm. His job responsibilities usually 
            would not avail him time to carry out home duties prope...
          </p>
          <button onClick={() => {
            navigate("/fabric-care");
            dispatch(setBlogReadState(true));
          }} className={hover.hover} style={styles.butt}>Read More..</button>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img className={loader.loader} src={details4} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Creating sustainable workspaces</h1>
          <p style={styles.parah}>
            With extensive experience in industry certifications vetted to deliver top quality building standard, 
            our team is constantly striving to deliver sustainable spaces that enhance the health, 
            wellbeing and productivity of occupants.
          </p>
          <button onClick={() => {
            navigate("/creating-sustainable-work-space");
            dispatch(setBlogReadState(true));
          }} className={hover.hover} style={styles.butt}>Read More..</button>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img className={loader.loader} src={details5} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>The city of Utako, Abuja</h1>
          <p style={styles.parah}>
            Abuja, the Federal Territory of Nigeria’s capitol is a welcoming environment characterized by its 
            extravagance; styled in plush for the most part. Little wonder suburbs also enjoy a taste of rich
            neighborhood feeling. Might not quite be tagged “City of ...
          </p>
          <button onClick={() => {
            navigate("/how-utako-shapes-up");
            // dispatch(setBlogReadState(true));
          }} className={hover.hover} style={styles.butt}>Read More..</button>
        </CommitmentDiv13>
      </CommitmentDiv1>
    </Fragment>
  )
};

export default Blog;