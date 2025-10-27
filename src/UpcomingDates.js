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
      <a href="https://markham.bibliocommons.com/events/688a98a4ff905b2a674b3cd1" target="_blank" rel="noopener noreferrer">
        <div className="event-left-content">
          <div className="title-event">
            <h2>Game Development Workshop</h2>
            <div className="event-date">Oct 25, 2025</div>
          </div>
        </div>
        <div className="event-icon"> 
          <div className="month">Oct</div> 
          <div className="date">25</div> 
        </div>
      </a>
    </li>
        
  </ul>
</div>

</div>
   );
}

export default UpcomingDates;
