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