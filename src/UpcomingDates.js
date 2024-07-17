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
             <h2>Web Development Summer Camp</h2>
            <div className="event-date"> July 15th 2024 - July 19th 2024</div>
          </div>
        </div>
        <div className="event-icon"> 
          <div className="month">Jul </div> 
          <div className="date">15</div> 
        </div>
         </a>
      </li>
          
          
    </ul>
  </div>
  
</div>
     );
}
 
export default UpcomingDates;