//new file ! ! ! ! !
import React from 'react';
//images
import MPLLogo from "./images/MPL.png";
import AoPSLogo from "./images/Aops.png";
import OntarioFluid from "./images/ontariofluidpartner.png";
import Workshop1 from "./images/workshop1.jpg"; 
import Workshop2 from "./images/workshop2.jpg";
import MacCodingLogo from './images/macstartcoding.png';

const SponsorUs = () => {
    //i didnt know what to put for the text so i just put a bunch of dashes
  return (
    <div className="">
      <div className="section row my-5">
        <div className="text-left col-md-6 sponsorus-text">
          <h1>Why Sponsor Us?</h1>
          <p>EmpowerED envisions a future where every student, regardless of their background, has access to high-quality STEM education and opportunities. Our long-term goals include expanding our reach to more regions, developing advanced STEM curriculum, and creating a network of mentors and industry professionals to guide our students. By partnering with you, we can accelerate this vision and create lasting change in the community.</p>
        </div>
        <div className="col-md-6">
          <img src={Workshop1} alt="Workshop 1" className="image-workshop img-fluid" />
          <img src={Workshop2} alt="Workshop 2" className="image-workshop2 img-fluid" />
        </div>
      </div>
      <div className="row my-5 section white">
        <div className="col-md-6">
          <img src={MPLLogo} alt="Markham Public Library" height="100px" className="image-mpl img-fluid mb-3" />
          <img src={AoPSLogo} alt="AoPS Logo" height="100px" className="image-aops img-fluid mb-3" />
          <img src={OntarioFluid} alt="Ontario Fluid" height="100px" className="image-ontario-fluid img-fluid mb-3" />
          <img src={MacCodingLogo} alt="McMaster Start Coding" height="100px" className="img-fluid mb-3" />
        </div>
        <div className="text-right col-md-6 white">
          <h2>Success Stories</h2><br></br>
          <h5>EmpowerHerIn Math Competition - For Middle School Girls</h5>
          <ul>
            <li>An online math competition for girls in grades 6-8 in collaboration with Count Her In (another youth-led organization in Markham).</li>
<li>60+ registrants from all across the Greater Toronto Area (GTA), showcasing the broad appeal and impact of our programs.</li>
<li>4 female guest speakers provided insights into high school life and how to get involved in STEM, offering valuable mentorship and inspiration.</li>
<li>The competition provided a platform for young girls to take initiative in the STEM fields and gain confidence in their abilities.</li>
<li>Sponsored by Ontario Fluid Ltd., highlighting the importance of community support in making such events possible.</li>

          </ul>
<br></br>
          <h5>Robotics Workshop @ Unionville Library - Ages Preschool-12</h5>
          <ul>
            <li>In collaboration with Markham Public Library at Unionville Branch, bringing robotics education to a wider audience.</li>
<li>Children explored robotics through engaging activities like completing an obstacle course with Sphero Indis and a dance challenge with Ozobots</li>
<li>75+ enthusiastic participants, demonstrating the high level of interest and engagement in our hands-on learning experiences.</li>
<li>The workshop was both fun and informative, sparking curiosity and excitement about robotics and engineering.</li>
          </ul>
        </div>
      </div>
      <div className="section row my-5">
        <div className="text-left col-md-12">
          <h2>Sponsorship Package</h2>
          <p className="spns-package">Check out the Sponsorship Package below to discover more about how you can make a difference.</p>
          <a className="spnsr-button" href="https://docs.google.com/document/d/1JpGJ0PhR7Rq0mC90d3CQDaPaXHtW0VZiVlrx2BiUm0A/view">Sponsorship Package</a>
        </div>
      </div>
    </div>
  );
}

export default SponsorUs;
