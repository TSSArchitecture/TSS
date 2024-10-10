import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CommitmentDiv1, CommitmentDiv11, 
         CommitmentDiv12, CommitmentDiv13} from '../../styled/About/AboutBanner';
import samsungTv from '../../img/electronics/samsungtv.jpg';
import iphone13 from '../../img/showroom/fridge.jpg';
import appleLaptop from '../../img/showroom/fan.jpg';
import furniture1 from '../../img/electronics/furniture1.jpg';
import furniture2 from '../../img/electronics/furniture2.jpg';
import furniture3 from '../../img/electronics/furniture3.jpg';
import furniture4 from '../../img/furniture/furniture4.JPG';
import furniture5 from '../../img/furniture/furniture5.JPG';
import furniture6 from '../../img/furniture/furniture6.JPG';
import kitchen1 from '../../img/kitchen/kitchen1.jpg';
import kitchen2 from '../../img/kitchen/kitchen2.jpg';
import kitchen3 from '../../img/kitchen/kitchen3.jpg';
import kitchen from '../../img/others/kitchen.jpg';
import kitc3 from '../../img/others/kitchen3.jpg';
import kitc4 from '../../img/others/kitchen4.jpg';
import toiletries1 from '../../img/electronics/toiletries1.jpg';
import toiletries2 from '../../img/electronics/toiletries2.jpg';
import toiletries3 from '../../img/electronics/toiletries3.jpg';
import bathroom1 from '../../img/showroom/bathroom1.jpg';
import bathroom2 from '../../img/showroom/bathroom2.jpg';
import bathroom3 from '../../img/showroom/bathroom3.jpg';
import bathroom4 from '../../img/showroom/bathroom4.jpg';
import bathroom5 from '../../img/showroom/bathroom5.jpg';
import bathroom6 from '../../img/showroom/bathroom6.jpg';
import bathroom7 from '../../img/others/toiletries.jpg';
import bathroom8 from '../../img/others/toilet1.jpg';
import bathroom9 from '../../img/others/toilet.jpg';
import ac from '../../img/showroom/ac.jpg';
import gasCooker from '../../img/showroom/gasCooker.jpg';
import sound from '../../img/showroom/sound.jpg';
import generator1 from '../../img/showroom/lister.jpg';
import bed from '../../img/showroom/bed.jpg';
import curtains from '../../img/others/furniture1.jpg';
import wardrobe from '../../img/others/furniture.jpg';
import dinning1 from '../../img/showroom/dinning1.jpg';
import dinning2 from '../../img/showroom/dinning2.jpg';
import dinning3 from '../../img/showroom/dinning3.jpg';

const ShowRoomProducts = () => {
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
      textAlign:"center",
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
      borderRadius: "14px",
      padding: "0.78rem",
      fontSize: "0.86rem",
      color: "#000",
      background: "#FFD700",
    },
    imgshow : {
      width: "100%",
      height: "16rem",
    },
  };
  const { srFurniture, srToiletries, srKitchen,
          srAppliances, } = useSelector(state => state.allCSS);
  return (
    <Fragment>
     {srFurniture && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={furniture1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS StillSteel Furniture</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={furniture2} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS Bay Rock</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={furniture3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS Smoother </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}

      {srFurniture && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={furniture4} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS StillSteel Furniture</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={furniture5} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS Bay Rock</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={furniture6} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>TSS Smoother </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}


      {srFurniture && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={dinning1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Dinning Set</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={dinning2} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Dinning Set</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={dinning3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Dinning Set </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}

      {srFurniture && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={wardrobe} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Wardrobe</h1>
        </CommitmentDiv11>

           <CommitmentDiv12>
          <img style={styles.imgshow} src={bed} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Bed</h1>
        </CommitmentDiv12>

         <CommitmentDiv13>
          <img style={styles.imgshow} src={curtains} title='tss' alt='tss'/>
          <h1 style={styles.commh2}> Wardrobe </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}

      {srToiletries && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={bathroom1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={bathroom2} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={bathroom3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing </h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}

      {srToiletries && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={bathroom4} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={bathroom5} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={bathroom6} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Cool & Refreshing </h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}

     {srAppliances && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={samsungTv} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Samsung Crystal Curved Display 4K UltraHD LED Smart TV - TU8300</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={iphone13} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Fridge </h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={appleLaptop} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Standing Fan</h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}

      {srAppliances && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={ac} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Air Conditioning</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={gasCooker} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Gas Cooker</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={sound} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Sound System </h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}

     {srAppliances && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={generator1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Generator</h1>
        </CommitmentDiv11>

        {/* <CommitmentDiv12>
          <img style={styles.imgshow} src={bed} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Bed</h1>
        </CommitmentDiv12> */}

        {/* <CommitmentDiv13>
          <img style={styles.imgshow} src={curtains} title='tss' alt='tss'/>
          <h1 style={styles.commh2}> Curtains </h1>
        </CommitmentDiv13> */}

      </CommitmentDiv1>}

      {srKitchen && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={kitchen1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Kitchen Utensils</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={kitchen2} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Kitchen Utensils</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={kitchen3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Gas Cooker </h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}

      {srKitchen && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={kitchen} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Kitchen Cabinet</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={kitc3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Kitchen cabinet</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={kitc4} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Kitchen cabinet </h1>
        </CommitmentDiv13>

      </CommitmentDiv1>}



      {srToiletries && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={toiletries1} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Toiletries</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={toiletries2} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Toiletries</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={toiletries3} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Toiletries </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}

      {srToiletries && <CommitmentDiv1>
        <CommitmentDiv11>
          <img style={styles.imgshow} src={bathroom7} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Wash Basin</h1>
        </CommitmentDiv11>

        <CommitmentDiv12>
          <img style={styles.imgshow} src={bathroom8} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Bath Tub</h1>
        </CommitmentDiv12>

        <CommitmentDiv13>
          <img style={styles.imgshow} src={bathroom9} title='tss' alt='tss'/>
          <h1 style={styles.commh2}>Dress Mirrors </h1>
        </CommitmentDiv13>
      </CommitmentDiv1>}
    </Fragment>
  )
};

export default ShowRoomProducts;