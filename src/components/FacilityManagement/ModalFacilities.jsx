import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import  {FacilityDiv}  from '../../styled/Facility/Services/Services';
import {setAllServicesState, setPlumberServicesState, 
  setElectricalServicesState, setACServicesState,
  setHandymanServicesState, setHomeImprovementState, setMoveState,
  setLandscapeState, setWaterTankState, setPestControlState,
  setPaintingState, setHouseKeepingState, setGeneratorState } from '../../actions/allCSS';

const FacilitiesRead = () => {
  const styles = {
    header1: {
      lineHeight:" 1.6",
      fontWeight: "600",
      wordBreak:" break-word",
      fontSize: "1.3rem",
      marginTop: "10%",
    },
    header2: {
      lineHeight:" 1.6",
      fontWeight: "500",
      wordBreak:" break-word",
      marginBottom: "2%",
    },
    para: {
      marginBottom: '8%',
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
      fontFamily: 'Tahoma',
      textAlign: "left",
      marginRight: "4%",
    },
    lastFacilityDiv: {
      marginBottom: "5%",
    },
  };
  const dispatch = useDispatch();
  const requestClose = () => {
    dispatch(setAllServicesState(undefined));
    dispatch(setPlumberServicesState(undefined));
    dispatch(setElectricalServicesState(undefined));
    dispatch(setACServicesState(undefined));
    dispatch(setHandymanServicesState(undefined));
    dispatch(setHomeImprovementState(undefined));
    dispatch(setMoveState(undefined));
    dispatch(setLandscapeState(undefined));
    dispatch(setWaterTankState(undefined));
    dispatch(setPestControlState(undefined));
    dispatch(setPaintingState(undefined));
    dispatch(setHouseKeepingState(undefined));
    dispatch(setGeneratorState(undefined));
  };
  const { allServices, plumberServices, electricalServices,
          acServices, handymanServices, homeImprovement, move,
          landscape, watertank, pestcontrol, painting, housekeeping,
          generator } = useSelector(state => state.allCSS);
  return (
    <Modal
      isOpen={allServices}
      onRequestClose={requestClose}
      ariaHideApp={false}
      contentLabel="dot.com"
      closeTimeoutMS={400}
      className='modal'>
          {plumberServices && (
            <FacilityDiv>
            <h1 style={styles.header1}>PLUMBING SERVICES (On time, every time)</h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>Broken water pipes, blocked drains, or toilet fittings
              that performs undesirably are 
              all emergency plumbing signs that can potentially damage your home and pose health hazards.
              Contact us for a professional touch. If something needs to be fixed right away, please be assured
              that plumbing emergencies can always be prevented through our regular inspection and services.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Kitchen drainage cleaning services<br/>
              2.	Pipe leakage repair<br/>
              3.	Faucet Replacement<br/>
              4.	Sewer line blockage cleaning and repairs<br/>
              5.	Toilets Services and emergency repairs<br/>
              6.	Replacement of olel plumbing work<br/>
              7.	Installation of new plumbing fixture<br/>
              8.	Water heater maintenance and upgrade.<br/>
              9.	Plumbing emergency<br/>
              10  Plumbing system inspection with suggestions and recommendation     
  
            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	On time services by our professional team<br/>
              2.	Work area cleaned and left spot-free<br/>
              3.	Safety measures are taken so that your walls and expensive assets are stain- free.<br/>
              4.	No unpleasant smell and odour<br/>
              5.	Exclusion.
            </p>
        </FacilityDiv>
      )}

      {electricalServices && (
            <FacilityDiv>
            <h1 style={styles.header1}>ELECTRICAL SERVICES (In Safe Hands)</h1>
            <hr/>
            <h2 style={styles.header2}>Why Us? (TSS)</h2>
            <p style={styles.para}>If you have a problem with any lighting system, circuit breaker, need 
            additional electrical powerpoint, or any electrical services, give us a call. We have the 
            best electrical maintenance team that guarantees you  of
            excellent services.
            We are skilled at troubleshooting interrupted circuits and repairing them as 
            quickly as possible.
            We are a friendly team of licensed electricians who understands what a 
            reliable and cost efficient solution offers. Look no further than TSS when choosing 
            an electrician for you home 
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Installation of lights or light fittings<br/>
              2.	Safety switch and power points<br/>
              3.	Garden lights<br/>
              4.	Wiring /Rewiring of houses<br/>
              5.	Diagnose and rectify electrical issues with high accuracy<br/>
              6.	Tripping circuits<br/>
              7.	Earthing<br/>
              8.	Power loss


            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	One time service by our professional licensed team<br/>
              2.	Work area cleaned and left spot free<br/>
              3.	Safety measures are taken so that all your assets are safe and functional.<br/><br/>
              <b>Exclusion</b><br/>
               Spareparts, Materials, and Consumable gypsum ceiling cutting or other civil work

            </p>
        </FacilityDiv>
      )}


          {acServices && (
            <FacilityDiv>
            <h1 style={styles.header1}>A/C SERVICES (AIR CONDITION) (TSS)
                                      A/C repair, A/C service, A/C coil cleaning
                                      </h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>When it comes to home comfort, during 
                the warmer period in Nigeria, your air conditioner plays a huge role in 
                peak summer temperature. This means that you will rely on your air conditioner. If you are 
                in need of Air condition fixing 
                services by a professional maintenance team, we can 
                guarantee you of the best air conditioning repairs services in Nigeria.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	We repairs A/c Breakdowns<br/>
              2.	We remove bad odour from air conditioning<br/>
              3.	Remove noisy Air condition<br/>
              4.	Water leakage from the A/C<br/>
              5.	Prepare service report on fault(s) found and recommended repairs action(s)<br/>
              6.	Explain and educate the customers on findings and recommendation<br/>
              7.	Cleaning of fan coil and air handling units<br/>
              8.	Check faulty temperature and pressure sensors<br/>
              9.	Clear A/C draining outlets<br/>
              10.	Clearing variables valves and filters<br/>
              11.	Check for any loose fitting generating unusual noise or vibration<br/>
              12.	Check for fault belts<br/>
              13.	Clear dust build up in fan and motor bearings<br/>
              14.	Check for the faulty starter motor, relays or timers<br/>
              15.	Check for faulty temperature control thermostat<br/>
              16.	Clear dirty or blocked air conditioner diffusers and filters<br/>
              17.	Check the conditioner and operation of outdoor chiller unit<br/>
            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	Always available 24/7 by qualified and experience professionals<br/>
              2.	Service report on fault (s) found and recommended repair action(s)<br/>
              3.	Peace of mind- your home is in safe hands that care<br/>
              4.	Explain and educate customers on finding and recommendation.<br/>
              5.	Boost indoor air quality<br/>
              6.	Remain healthy<br/>
              7.	Save on electricity and repair bill<br/>
              8.	Lifespan of your valuable asset is increased<br/>
              9.	Avoid costly replacements<br/>
              10.	Avoid emergency breakdown<br/>
              11.	Stay comfortably cool all year<br/>
              12.	Protect the environment<br/>
              13.	Comply with warranty requirement<br/> 
              14.	Enjoy peak A/C performance and efficiency up to 95%<br/>
              15.	Remove foul odour<br/>
              16.	Conditional survey report<br/><br/><br/>
              <span style={styles.header2}>	A/C INSTALLATION</span><br/>
              <span>For this service, please send us any enquiry , 
                 we provide a tailored solution as per your requirement at the most affordable rate.</span>
            </p>             
        </FacilityDiv>
      )}


          {handymanServices && (
            <FacilityDiv>
            <h1 style={styles.header1}>HANDYMAN SERVICE</h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>As the name implies, a handyman is someone who is ‘Handy’ or able to take on a 
               variety of jobs ,often on short notice, 
               these are usually, but not always smaller jobs that a homeowners or businesses cannot do themselves.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Picture or mirror hanging.<br/>
              2.	Curtain and blind installation<br/>
              3.	Repairing or replacing skirting boards, windows, and doors-trim and other 
                  smaller carpentry jobs.<br/>
              4.	Painting<br/>
              5.	Assembling and disassembling flatpack furniture.<br/>


            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	One time service by our professional licensed team<br/>
              2.	Work area cleaned and left spot free<br/>
              3.	Safety measures are taken so that your wall and expensive asset are stain free<br/>
              4.	Quick and experienced workman<br/>
            </p>
        </FacilityDiv>
      )}

      {homeImprovement && (
            <FacilityDiv>
            <h1 style={styles.header1}>HOME IMPROVEMENT </h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>We create beautiful home for residents in Nigeria. We have specialised 
              contractors for all types of renovations including home, Offices, bathroom and kitchen 
              renovation, our experienced and skilled team provides a full one stop service. We 
              start the fit-out process with a personal consultation at your home 
              or office followed by a detailed quotation and assist you to get development control approval process.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Home renovation (resident and apartment)<br/>
              2.	Office fit out and improvement<br/>
              3.	Bathroom renovation/remodel<br/>
              4.	Kitchen renovation/ remodel<br/>
              5.	New cabinets<br/>
              6.	Counter tops<br/> 
              7.	Floor tiling<br/>
              8.	Wooden flooring/parquet<br/>
              9.	Repair plumbing faults and refurbish all ceiling, walls, and flooring.<br/>
            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	Free estimation<br/>
              2.	Reasonable price<br/>
              3.	Professional services (planning and execution)<br/>
              4.	Best quality and customer journey from concept to reality<br/> 
              5.	Peace of mind and your dream home<br/>

              For these services, please send us an enquiry. We will provide a
              tailored solution as per your requirement at the most affordable rate.
              (ENQUIRE NOW)
              (+234-7032225466)
            </p>
        </FacilityDiv>
      )}

          {move && (
            <FacilityDiv>
            <h1 style={styles.header1}>MOVE IN - MOVE OUT </h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>
              If you are moving in/out of your property, these services are specially tailored for you, 
              we understand the needs of our clients and  we have designed a complete list to meet
              your requirements which includes; all maintenance and cleaning services.
              We want to be your preferred maintenance choice, we assure 
              you of better quality service, services that are second to none. 
              Our team of experts guarantees excellence in service delivery. We put in more effort
              to measure up with your expectation which will save you time and money.
              If you have your own task list, your requirement will be followed up.
              Please be aware that our experts can inspect the property based on your checklist and 
              recommendation which would require work and submission of quotation accordingly.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Maintenance schedules required for resident, apartments and offices.<br/>
              2.	Plumbing works.<br/>
              3.	Electrical work.<br/> 
              4.	Air conditioning work.<br/> 
              5.	Carpentry work.<br/>
              6.	Painting.<br/> 
              7.	Masonry.<br/>
              8.	Kitchen deep cleaning.<br/>
              9.	Cleaning services.
            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              1.	Free estimation<br/>
              2.	Reseasable price and professional services<br/>
              3.	Functional MEP assets<br/>
              4.	Improved value of your property<br/>
              5.	Best quality and happy property<br/> 
              6.	Cleaning and safe environment<br/>
              7.	Peace of mind
            </p>
        </FacilityDiv>
      )}

       {landscape && (
            <FacilityDiv>
            <h1 style={styles.header1}>LANDSCAPE (Love Your Lawa)</h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>
              Landscapes and features are important because 
              they contribute significantly to our well being and quality of life, 
              they provide the broader country within which we live our lives. 
              Living within aesthetically pleasing and culturally meaningful 
              landscapes enhances our sense of well being.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Eliminate weeds.<br/>
              2.	Keep your lawn green by tendering, improving and fertilising.<br/>
              3.	Prune your trees and shrubs.<br/>
              4.	Regular care by university certified professionals.<br/>
              5.	Maintain your irrigation system.<br/>

            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              Great looking yard with healthy grass, safe space outdoors for you children and pets,
              less work for you.
            </p>
        </FacilityDiv>
      )}

      {watertank && (
            <FacilityDiv>
            <h1 style={styles.header1}>WATER TANKS CLEANING AND DISINFECTION (Cleaning 100% guaranteed)</h1>
            <hr/>
            <h2 style={styles.header2}>Why us? (TSS)</h2>
            <p style={styles.para}>
            Cleaning water tanks regularly will help prevent algae from lining the interior and keep 
            sediment from building up at the bottom of the tank. It will also limit disease carrying 
            insects and vectors from residing in the tank. A clean water tank will also allow
            it to maintain water quality, remain colourless and odourless.
            If a water tank is left unclean, contained water will be easily polluted with 
            bacteria that can cause gastrointestinal diseases, cholera,dysentery, and other water-borne infections.
            When a water tank has not been cleaned for a long period, it may become too harmful to 
            use for water consumption or even for cleaning, hence it may need to be replaced.
            </p>
            <h2 style={styles.header2}>What We Do</h2>
            <p style={styles.para}>
              1.	Inspect water tanks for any cracks or damages<br/>
              2.	We use municipality approved environmental friendly cleaning projects<br/>
              3.	Cleaning is done using high pressure hoses<br/>
              4.	Water tank is sterilised<br/>
            </p>
            <h2 style={styles.header2}>What You Get</h2>
            <p style={styles.para}>
              Cleaned tank, spot- free, and keeps sterilised tank work area sparkling clean and 
              left spot-free.<br/> 
              Safety measures are adhered to inorder to ensure that walls and expensive asset are stain free.
              We render a Certified professional touch.
            </p>
        </FacilityDiv>
      )}   

      {pestcontrol && (
        <FacilityDiv>
        <h1 style={styles.header1}>PEST CONTROL( INTERNAL & EXTERNAL) (We take total control of the pest)</h1>
        <hr/>
        <h2 style={styles.header2}>Why us? (TSS)</h2>
        <p style={styles.para}>
          We take total control of pests. The right way to tidy a well kept house is ensuring a 
          pest free home. Pests can be attracted to your homes for various reasons.
          Lots of individuals do away with cleanliness, many decide 
          to get the job done by themselves, which in reality, they seem not to do a thorough job.
          The food control and pest control department of Nigeria have 
          warned the public against getting pest control done without approval or 
          from un-approved companies. Residents have been urged not to conduct 
          pest control by themselves or use chemicals sold by individuals. With many 
          rising cases of death due to inhaling of substances after pest
          control fumigation, it stems from a study that discovered that
          most firms use poor quality chemicals at home and 
          have been reported in Nigeria in the past years.
          Our pest control professionals are well trained to survey 
          the area and around your home to keep pests that you might not even be aware of.
        </p>
        <h2 style={styles.header2}>What We Do</h2>
        <p style={styles.para}>
          1.	Trained professionals<br/>
          2.	We use municipality approved product<br/>
        </p>
        <h2 style={styles.header2}>What You Get</h2>
        <p style={styles.para}>
          1.	Pest free and happy home<br/>
          2.	Safety measures taken so that your walls and expensive assets are stain free
        </p>
      </FacilityDiv>
      )}   

        {painting && (
          <FacilityDiv>
          <h1 style={styles.header1}>PAINTING</h1>
          <hr/>
          <h2 style={styles.header2}>Why us? (TSS)</h2>
          <p style={styles.para}>
            We are a team of highly skilled professional painters in Nigeria. We provide quality 
            painting services in Nigeria For years now. We are here to make your homes,
            residence, apartment, and business look well furnished and beautiful. No 
            matter what painting services you need , we are here to 
            re-design your homes and make them look beautiful and attractive. 
          </p>
          <h2 style={styles.header2}>What We Do</h2>
          <p style={styles.para}>
            1.	Interior painting<br/>
            2.	External painting<br/>
            3.	Residential Painting<br/>
            4.	Room Painting<br/>
            5.	Commercial painting<br/>
            6.	Pergola painting/ polishing<br/>
            7.	Domestic Painting.<br/>
          </p>
          <h2 style={styles.header2}>What You Get</h2>
          <p style={styles.para}>
            1.	High quality materials<br/>
            2.	High professional partners<br/>
            3.	On time services delivery exclusion<br/>
            4.	Any water leakage repairs from walls or ceiling<br/>
            5.	Any major civil works<br/>
            6.	New gypsum ceiling<br/>
            7.	Major cracks or any structural issues<br/>
          </p>
        </FacilityDiv>
      )} 

        {housekeeping && (
          <FacilityDiv>
          <h1 style={styles.header1}>HOUSEKEEPING STRUCTURE</h1>
          <hr/>
          <h2 style={styles.header2}>Why us? (TSS)</h2>
          <p style={styles.para}>
            For all houses, office spaces, shops, hospitals, banking structures, 
            apartments, or other work spaces, we guarantee
            a 100% comfortable, attractive, and tidy environment to our customers 
            The word Housekeeping can be sub-categorized into two parts namely.
            -	House
            -	Upkeeping
            The word house is used because of the basic concept of housekeeping which starts from a 
            domestic house, meaning to keep your homes clean, and was also adopted gradually from a 
            commercial level to maintain a high standard and separate department which 
            was created for the housekeeping purpose.
          </p>
          <h2 style={styles.header2}>What We Do</h2>
          <p style={styles.para}>
            	JANITORIAL SERVICE<br/>
            1.	Restroom Cleaning<br/>
            2.	Cleaning of employee breakroom or kitchen<br/>
            3.	Sweeping and mopping of hard surface floor<br/>
            4.	Vacuum of the carpet<br/>
            5.	Dusting<br/>
            6.	Empty trash<br/><br/>

            	COMMERCIAL OFFICE CLEANING SERVICES<br/>
            1.	Deep carpet cleaning<br/>
            2.	Power washing<br/>
            3.	Tiles and ground cleaning<br/>
            4.	Hard surface floor cleaning<br/>
            5.	Furniture and upholstery cleaning<br/>
            6.	Window wash<br/><br/>

            	HOUSEKEEPING SERVICES<br/> 
            1.	Cleaning services and vacuuming<br/>
            2.	Laundry and ironings’<br/>
          </p>
          <h2 style={styles.header2}>What You Get</h2>
          <p style={styles.para}>
            1.	High quality materials<br/>
            2.	High professional partners<br/>
            3.	On time services delivery exclusion<br/>
            4.	Any water leakage repairs from walls or ceiling<br/>
            5.	Any major civil works<br/>
            6.	New gypsum ceiling<br/>
            7.	Major cracks or any structural issues<br/>
          </p>
        </FacilityDiv>
      )} 

        {generator && (
          <FacilityDiv>
          <h1 style={styles.header1}>HOUSEKEEPING STRUCTURE</h1>
          <hr/>
          <h2 style={styles.header2}>Why us? (TSS)</h2>
          <p style={styles.para}>
            One of the most important things you can take care of is getting the 
            professional Tripples solution services (TSS)
            generator repairs that you need taken care of. The last thing you need is to be in a 
            situation where you need your backup generator yet it is not working properly. You rely
            on this system in order to keep 
            things running when your main source of power is out. What will
            you do if that Plan B system fails you as well?

            It is always essential that you take care of the service work your main electrical system may need, 
            including electrical panel repairs and more. However, if your power is taken out by a weather -related events,
            or some other situation beyond your control, you need to have backup power. 
            If you have neglected to get the repair work complete
            that you need for this system then it will not be able to perform when the time comes that you need it most. 
          </p>
          <p style={styles.para}>
          The important thing to remember is that your generator is the key to continuing your life, business as usual, 
          when you experience a power outage. This enables you to still be able to get ready for work or school, to 
          keep the contents of your refrigerator and freezer cold enough to not spoil and even enjoy some or all of 
          the niceties you are used to, like having light to read by, keep your phone charged or be able 
          to watch television.

          This is also how you and your family can continue to stay safe and comfortable so that you are 
          still warm in the winter and cool in the summer. The bottom line is that you and your loved 
          ones rely on this device in order to stay safe, healthy and even comfortable in times when 
          your power is not available. The key to success is 
          making sure that your generator is fully functional so that, when the time arises, it will be ready to perform. 
          </p>

          <p style={styles.para}>
            It should come as no surprise that the TSS Electrical Services is the brand to trust for all types 
            of jobs. Don't take chances when it comes to your home and the quality of work that goes into every
            aspect of it, including your electricity and backup generator.
            For all of your Tripples solution services (TSS) 
            generator repairs , you can count on us. 
            Let us show you firsthand how we have earned the impeccable reputation we have. 
          </p>
        </FacilityDiv>
      )} 
    </Modal>
  )
};

export default FacilitiesRead;