import Logo from './assets/Logo.png' 
import Decore from './assets/Decore.png' 
import Traveller from './assets/Traveller.png' 
import Polygon from './assets/Polygon.png'; 
import Decoree from './assets/Decoree.png';
import Image from "./assets/image.png";  
import Group1 from "./assets/Group1.png"; 
import Group2 from "./assets/Group2.png"; 
import Group3 from "./assets/Group3.png";  
import Group4 from "./assets/Group4.png"; 
import section1 from "./assets/section1.png"; 
import section2 from "./assets/section2.png"; 
import section3 from "./assets/section3.png"; 
import arrow from './assets/arrow.png'; 
import mailicon from './assets/mailicon.png' 
import options from './assets/options.png' 
import instaicon from './assets/instaicon.png' 
import apple from './assets/apple.png' 
import play from './assets/play.png' 
import heart from './assets/heart.png' 

import MediaQuery from 'react-responsive'




import './App.css';

const App = () => {
  return ( 
    <div className="App">  
   <img src={Logo} className='App-logo' />
   <img src={Decore} className='Decore' />
   <img src={Traveller} className='Traveller' /> 
   
   <span className='App-nav' style={{width:'100px', height:'22px', left:'478px', top:'56px' }}> Destinations </span> 
   <span className='App-nav' style={{width:'51px', height:'22px', left:'633px', top:'56px' }}> Hotels </span>  
   <span className='App-nav' style={{width:'53px', height:'22px', left:'748px', top:'56px' }}> Flights </span>  
   <span className='App-nav' style={{width:'74px', height:'22px', left:'863px', top:'56px' }}> Bookings </span>  
   <span className='App-nav' style={{width:'44px', height:'22px', left:'1023px', top:'56px' }}> Login </span> 

   <div className='Nav-box' style={{width:'102px', height:'40px', left:'1119px', top:'47px' }}>  </div> 
   <span className='App-nav' style={{width:'59px', height:'22px', left:'1141px', top:'56px' }}> Sign Up </span> 
   
   <span className='App-nav' style={{width:'23px', height:'22px', left:'1263px', top:'56px' }}> EN </span> 
   <span className='Nav-arrow'></span> 

   
   <div className='Tagline' style={{width:'410px', height:'30px', left:'150px', top:'217px' }}>Best Destinations around the world</div> 
   <div className='Heading' style={{width:'545px', height:'267px', left:'150px', top:'271px' }}>Travel, enjoy and live a new and full life</div>
   <div className='Description' style={{width:'477px', height:'90px', left:'148px', top:'568px', lineHeight:'30px' }}> Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>

    <button className='Box' style={{width: '170px', height: '60px', left: '148px', top: '692px' }}> </button> 
   <span className='Find' style={{width:'117px', height:'23px', left:'175px', top:'711px' }}> Find out More </span>   
   
   <button className='Ellipse'></button>
   <div className='Polygon'> 
   <img src={Polygon} />
   </div>
   
   <span className='Play'>Play Demo</span> 

   <div className='Category' style={{width:'98px', height:'27px', left:'652px', top:'974px' }}> CATEGORY </div> 
   <div className='Services' style={{width:'547px', height:'65px', left:'428px', top:'1011px' }}> We Offer Best Services</div> 

  <span className='plus' style={{ color:'#FF7152', width:'13px', height:'26px', left:'1229px', top:'966px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1264px', top:'966px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1299px', top:'966px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1334px', top:'966px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1369px', top:'966px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1229px', top:'1001px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1264px', top:'1001px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1299px', top:'1001px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1334px', top:'1001px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1369px', top:'1001px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1229px', top:'1036px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1264px', top:'1036px' }}>+</span> 
  <span className='plus' style={{ color:'#6246E5', width:'13px', height:'26px', left:'1299px', top:'1036px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1334px', top:'1036px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1369px', top:'1036px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1264px', top:'1071px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1299px', top:'1071px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1334px', top:'1071px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1369px', top:'1071px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1299px', top:'1106px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1334px', top:'1106px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1369px', top:'1106px' }}>+</span>  

  <div className='group1'> 
  <img src={Group1} /> </div>
  <span className='text' style={{width:'190px', height:'27px', left:'154px', top:'1293px' }}> Calculated Weather </span>
  <span className='sub-text' style={{width:'181px', height:'78px', left:'159px', top:'1335px' }}> Built Wicket longer admire do barton vanity itself do in it. </span>  

  <div className='text-curve'></div> 
  <div className='text-box'></div> 
  <div className='group2'> 
  <img src={Group2} /> </div>
  <span className='text' style={{width:'111px', height:'27px', left:'491px', top:'1293px' }}> Best Flights </span> 
  <span className='sub-text' style={{width:'181px', height:'78px', left:'461px', top:'1335px' }}> Engrossed listening. Park gate sell they west hard for the. </span> 
 
  <div className='group3'> 
  <img src={Group3} /> </div>
  <span className='text' style={{width:'120px', height:'27px', left:'792px', top:'1293px' }}> Local Events </span> 
  <span className='sub-text' style={{width:'181px', height:'78px', left:'763px', top:'1335px' }}> Barton vanity itself do in it. Preferd to men it engrossed listening.  </span> 

  <div className='group4'> 
  <img src={Group4} /> </div>
  <span className='text' style={{width:'140px', height:'27px', left:'1082px', top:'1293px' }}> Customization </span> 
  <span className='sub-text' style={{width:'181px', height:'78px', left:'1062px', top:'1335px' }}> We deliver outsourced aviation services for military customers. </span> 
   
   
   <div className='Category' style={{width:'100px', height:'27px', left:'632px', top:'1614px', lineHeight:'27px' }}> Top Selling </div> 
   <div className='Services' style={{width:'418px', height:'65px', left:'490px', top:'1649px' }}> Top Destinations</div>  

   <div className='rectangle1'></div> 
   <div className='small-rectangle'style={{left:'250px'}} ></div>
   <span className='rectangle-text' style={{width:'107px', height:'22px', left:'275px', top:'2128px' }}> Rome, Italty </span> 
   <span className='rectangle-text' style={{width:'60px', height:'22px', left:'420px', top:'2129px' }}> $5,42k </span> 
   
   <span className='rectangle-text' style={{width:'95px', height:'20px', left:'290px', top:'2169px' }}> 10 Days Trip</span> 
    

   <div className='rectangle2'></div> 
   <div className='small-rectangle' style={{left:'600px'}}></div>
   <span className='rectangle-text' style={{width:'107px', height:'22px', left:'625px', top:'2128px' }}> London, UK </span> 
   <span className='rectangle-text' style={{width:'60px', height:'22px', left:'770px', top:'2129px' }}> $4.2k </span> 
   
   <span className='rectangle-text' style={{width:'95px', height:'20px', left:'640px', top:'2169px' }}> 12 Days Trip</span> 

   <img src={Decoree} className='Decoree' />
   <div className='rectangle3'></div> 
   
   <div className='small-rectangle' style={{left:'950px'}}></div>
   <span className='rectangle-text' style={{width:'107px', height:'22px', left:'975px', top:'2128px' }}> Full Europe </span> 
   <span className='rectangle-text' style={{width:'60px', height:'22px', left:'1120px', top:'2129px' }}> $15k </span> 
   
   <span className='rectangle-text' style={{width:'95px', height:'20px', left:'990px', top:'2169px' }}> 28 Days Trip</span> 


   <div className='Category' style={{width:'126px', height:'27px', left:'189px', top:'2417px', lineHeight:'27px' }}> Easy and Fast </div> 
   <div className='Services' style={{width:'511px', height:'130px', left:'186px', top:'2459px' }}> Book your next trip in 3 easy steps</div>  


   <div className='cube1'></div> 
   <div className='section1'>
     <img src={section1} />
   </div>
   <div className='Category' style={{width:'161px', height:'20px', left:'254px', top:'2620px', lineHeight:'124.5%'}}> Choose Destination </div>  
   <div className='Description' style={{width:'327px', height:'40px', left:'254px', top:'2644px', lineHeight:'124.5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>

   <div className='cube2'></div> 
   <div className='section2'>
     <img src={section2} />
   </div> 
   <div className='Category' style={{width:'124px', height:'20px', left:'254px', top:'2732px', lineHeight:'124.5%' }}> Make Payment </div> 
   <div className='Description' style={{width:'327px', height:'40px', left:'254px', top:'2756px', lineHeight:'124.5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.  </div>   

   <div className='cube3'></div>  
   <div className='section3'>
     <img src={section3} />
   </div>
   <div className='Category' style={{width:'254px', height:'20px', left:'254px', top:'2844px', lineHeight:'124.5%' }}> Reach Airport on Selected Date</div> 
   <div className='Description' style={{width:'327px', height:'40px', left:'254px', top:'2869px', lineHeight:'124.5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.  </div> 
   
   <div className='card-box'></div>
   <div className='girl'></div> 
   <span className='card-text' style={{width:'134px', height:'22px', left:'840px', top:'2702px'}}>Trip To Greece</span> 
   <span className='card-subtext' style={{width:'88px', height:'20px', left:'840px', top:'2737px'}}>14-29 June | </span> 
   <span className='card-subtext' style={{width:'138px', height:'20px', left:'944px', top:'2737px'}}>by Robbin joseph</span> 
 
 <div className='options' > 
 <img src={options} />
 </div>
 
   <span className='card-subtext' style={{width:'126px', height:'20px', left:'871px', top:'2844px'}}>24 people going</span> 


   <div className='card-subbox'></div> 
   <div className='image'> <img src={Image} style={{ borderRadius:'50%' }}/>
   </div> 

   <span className='card-subtext' style={{width:'58px', height:'17px', left:'1119px', top:'2730px'}}>Ongoing</span> 
   <span className='card-text' style={{width:'107px', height:'22px', left:'1118px', top:'2753px'}}>Trip To Rome</span> 
   <span className='card-subtext' style={{width:'101px', height:'17px', left:'1117px', top:'2789px'}}>40% completed</span>  
  <div className='line'></div> 
  <div className='line-fill'></div>  
  <img className='hearticon' src={heart} />

  <div className='big-rectangle'></div> 
   <div className='Ellipse-multiple' style={{width:'184.61px', height:'184.61px', left:'1181.71px', top:'3193.02px'}}></div>
   <div className='Ellipse-multiple' style={{width:'206.47px', height:'206.47px', left:'1163.49px', top:'3172.37px'}}></div> 
   <div className='Ellipse-multiple' style={{width:'225.9px', height:'225.9px', left:'1147.71px', top:'3154.76px'}}></div> 
   <div className='Ellipse-multiple' style={{width:'242.9px', height:'242.9px', left:'1133.13px', top:'3134.72px'}}></div> 
   <div className='Ellipse-multiple' style={{width:'259.3px', height:'259.3px', left:'1119.16px', top:'3115.29px'}}></div> 
   <div className='Ellipse-multiple' style={{width:'284.8px', height:'284.8px', left:'1096.7px', top:'3089.78px'}}></div> 
   <div className='circle'></div>  
   <div className='arrow'>
     <img src={arrow} />
   </div>

   
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1315px', top:'3418px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1350px', top:'3418px' }}>+</span> 
  <span className='plus' style={{ color:'#FF7152', width:'13px', height:'26px', left:'1385px', top:'3418px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1315px', top:'3453px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1350px', top:'3453px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1385px', top:'3453px' }}>+</span> 
  <span className='plus' style={{ color:'#6246E5', width:'13px', height:'26px', left:'1315px', top:'3488px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1350px', top:'3488px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1385px', top:'3488px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1280px', top:'3523px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1315px', top:'3523px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1350px', top:'3523px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1385px', top:'3523px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1245px', top:'3558px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1315px', top:'3558px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1350px', top:'3558px' }}>+</span> 
  <span className='plus' style={{ color:'#E5E5E5', width:'13px', height:'26px', left:'1385px', top:'3558px' }}>+</span> 
  

  <div className='subscribe-text'>Subscribe to get information, latest news and other interesting offers about Cobham</div> 
  <div className='email-box'> </div> 
  <div className='email-icon'>
    <img src={mailicon} />
  </div>  
  <div className='email-text'>Your email</div>
  <button className='subscribe-button'></button>
  <div className='subscribe'>Subscribe</div> 

  <div className='footer-text'>Jadoo.</div> 
  <div className='smallest-text'>Book your trip in minute, get full Control for much longer.
</div> 

  <span className='footer-subtext' style={{width:'108px', height:'26px', left:'437px', top:'3661.71px'}}>Company</span> 
  <span className='footer-subtext' style={{width:'88px', height:'26px', left:'618px', top:'3661.71px'}}>Contact</span> 
  <span className='footer-subtext' style={{width:'55px', height:'26px', left:'797px', top:'3661.71px'}}>More</span>
 
  <span className='Category' style={{width:'55px', height:'22px', left:'437px', top:'3721.71px', lineHeight:'124.5%' }}> About</span> 
  <span className='Category' style={{width:'86px', height:'22px', left:'617px', top:'3719.71px', lineHeight:'124.5%' }}> Help/FAQ</span>  
  <span className='Category' style={{width:'95px', height:'22px', left:'797px', top:'3721.71px', lineHeight:'124.5%' }}> Airlinefees</span> 

  <span className='Category' style={{width:'72px', height:'22px', left:'437px', top:'3755.71px', lineHeight:'124.5%' }}> Careers</span> 
  <span className='Category' style={{width:'48px', height:'22px', left:'617px', top:'3755.71px', lineHeight:'124.5%' }}> Press</span> 
  <span className='Category' style={{width:'57px', height:'22px', left:'797px', top:'3757.71px', lineHeight:'124.5%' }}> Airline</span> 

  <span className='Category' style={{width:'61px', height:'22px', left:'437px', top:'3790.71px', lineHeight:'124.5%' }}> Mobile</span> 
  <span className='Category' style={{width:'74px', height:'22px', left:'617px', top:'3790.71px', lineHeight:'124.5%' }}> Affiliates</span> 
  <span className='Category' style={{width:'114px', height:'22px', left:'797px', top:'3792.71px', lineHeight:'124.5%' }}> Low fare tips</span> 

  <a className='small-circle1' 
    href=""
    target="blank" 
    rel="noreferrer"
  >f</a> 
  <a className='small-circle2' 
    href=""
    target="blank" 
    rel="noreferrer"> 
    <img src={instaicon} />
    </a> 
  <a className='small-circle3' 
    href=""
    target="blank" 
    rel="noreferrer"
  ></a> 

  <div className='Category' style={{width:'173px', height:'25px', left:'995px', top:'3732.71px', lineHeight:'124.5%'  }}> Discover our app</div> 

  <a className='apple'   href=""
    target="blank" 
    rel="noreferrer"> 
  <img src={apple} />
  </a> 
  <a className='playstore'   href=""
    target="blank" 
    rel="noreferrer">
  <img src={play} />
  </a>
 
  <div className='Description' style={{width:'203px', height:'17px', left:'577px', top:'3898.71px' }}>All rights reserved@jadoo.co</div>
    </div>
  );
}

export default App;
