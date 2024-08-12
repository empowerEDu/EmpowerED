const UpcomingDates = () => {
  return ( 
      <div className="event-calendar">
<div className="heading-title">
  <h1>Upcoming Dates</h1>
  <div className="icon-box">
     <i className="fas fa-calendar-alt"></i>
  </div>
</div>
<div className="events-body">
  <ul>   

  <li>
       <a>
      <div className="event-left-content">
        <div className="title-event">
           <h2>AI/ML Internship</h2>
          <div className="event-date"> Every Sunday in August 2024</div>
        </div>
      </div>
      <div className="event-icon"> 
        <div className="month">Aug </div> 
        <div className="date">4</div> 
      </div>
       </a>
    </li>
    
    <li>
       <a href="https://forms.gle/Meqhc7x27brrszyr7">
      <div className="event-left-content">
        <div className="title-event">
           <h2>McMaster Start Coding Workshop</h2>
          <div className="event-date"> August 27, 2024</div>
        </div>
      </div>
      <div className="event-icon"> 
        <div className="month">Aug </div> 
        <div className="date">27</div> 
      </div>
       </a>
    </li>

    <li>
       <a>
      <div className="event-left-content">
        <div className="title-event">
           <h2>MPL Coding Workshop</h2>
          <div className="event-date"> October 26, 2024</div>
        </div>
      </div>
      <div className="event-icon"> 
        <div className="month">Oct </div> 
        <div className="date">26</div> 
      </div>
       </a>
    </li>
        
  </ul>
</div>

</div>
   );
}

export default UpcomingDates;