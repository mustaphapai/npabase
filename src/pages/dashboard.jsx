import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/dashboard.css'; // Import your CSS file for the dashboard
import { Globe, GraduationCap, ShoppingBag, BellDot ,CircleUser,Search,FileText,ExternalLink } from 'lucide-react';  


const DashBoard = () => {


 const DashboardNav = () => {
    return (
      <div className='dash-nav'>
        <div>
          <h3 className='logo'>Npabase.</h3>
        </div>

        <div className='dash-icons'>
         
         <CircleUser />
         <br />
         <BellDot/>
         <Search />
        </div>
       
      </div>
    );
  }





const DashboardCategories = ()=>{
  return (
    <div className='dashboard-category'>
      <div className='category'>
        <Globe size={"30px"} color='#065aae'/>
        <h4>Study</h4>
        
      </div>
      <div className='category'>
        <GraduationCap size={"30px"} color='#065aae'/>
        <h4>Community</h4>
       
      </div>
      <div className='category'>
        <ShoppingBag size={"30px"} color='#065aae'/>
        <h4>Marketplace</h4>
        
      </div>
    </div>
  );
}


const AdmissionCard = () => {
  return (
    <div className='admission-card'>
       <GraduationCap size={"30px"} color='#065aae'/>
      <h2>Admissions</h2>
      <p>get all the admission info and interview process in one place</p>
      <button className='admission-button'>continue</button>
    </div>
  );
}



const StudyCardItem = ({ title, description }) => {
  return (
    <div className='study-card-item'>
      <FileText />
      <h3>{title}</h3>
     <ExternalLink />
    </div>
  );
}


const StudyCard = () => {
  return (
    <div className='study-card'>
      
     
     <div className='study-card-items'>
      <h2>Study Materials</h2>
      <p>Access a wide range of study materials.</p>
        <StudyCardItem title="RC 1 PQ." description="Download course materials and resources." />
        <StudyCardItem title="RC 2 PQ." description="Watch tutorials to enhance your learning." />
        <StudyCardItem title="RC 3 PQ." description="Join discussions with peers and instructors." />
         <button className='btn'>show all</button>
      </div>
    </div>
  );
}

const MarketplaceCard = () => {
  return (
    <div className='market-card'>
      <ShoppingBag size={"30px"} color='#065aae'/>
      <h2>Marketplace</h2>
      <p>Explore the marketplace for educational resources.</p>
      <button className='marketplace-button'>Shop Now</button>
    </div>
  );
}


const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
      <h2>Updates</h2>
      <p>get all the updates you need.</p>
     <div className='dashboard-content-items'>
      { <AdmissionCard/>}
       <StudyCard />
       <MarketplaceCard />
        
      </div>
    </div>
  );  
}











  return (
    <div className='dashboard'>
<DashboardNav />
<DashboardCategories/>
<DashboardContent />

    </div>
  );
};

export default DashBoard;
