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
           <h2>Waterloo WiE Engineering Workshop</h2>
          <div className="event-date"> May 10, 2025</div>
        </div>
      </div>
      <div className="event-icon"> 
        <div className="month">May </div> 
        <div className="date">10</div> 
      </div>
       </a>
    </li>
        
  </ul>
</div>

</div>
   );
}

export default UpcomingDates;
