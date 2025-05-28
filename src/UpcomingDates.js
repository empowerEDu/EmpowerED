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
      <div className="event-left-content">
        <div className="title-event">
           <h2>Stay Tuned!</h2>
          <div className="event-date"></div>
        </div>
      </div>
      {/* <div className="event-icon"> 
        <div className="month"></div> 
        <div className="date">10</div> 
      </div> */}
    </li>
        
  </ul>
</div>

</div>
   );
}

export default UpcomingDates;
