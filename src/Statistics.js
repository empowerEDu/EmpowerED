import { useEffect } from 'react';

const Statistics = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter span");
    const container = document.querySelector(".counters");
    let activated = false;

    const animateCounter = (counter, target) => {
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count++;
          counter.innerText = count;
          requestAnimationFrame(updateCount);  // Use requestAnimationFrame for smoother animation
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    };

    const handleScroll = () => {
      // Using getBoundingClientRect to calculate the container's position more reliably
      const containerPosition = container.getBoundingClientRect();
      const scrollPosition = window.innerHeight + containerPosition.top;

      if (scrollPosition >= window.innerHeight && !activated) {
        // Start counting when we scroll to the right position
        counters.forEach(counter => {
          counter.innerText = 0;
          const target = parseInt(counter.dataset.count);
          animateCounter(counter, target);
        });

        activated = true;  // Prevent multiple activations
      } else if (scrollPosition < window.innerHeight && activated) {
        // Reset the counters if the user scrolls back up
        counters.forEach(counter => {
          counter.innerText = 0;
        });
        activated = false;
      }
    };

    // Throttle the scroll event to improve performance
    const throttleScroll = () => {
      let isScrolling = false;

      return () => {
        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
          });
        }
      };
    };

    const throttledHandleScroll = throttleScroll();
    window.addEventListener("scroll", throttledHandleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div className="white stat-box border-0 container-fluid">
      <div className="row text-center counters border-0">
        <div className="col-12 col-md-4 border-0">
          <div className="counter border-0">
            <h1><span data-count="13">0</span></h1>
            <h3>STEM Events held in 2024</h3>
          </div>
        </div>

        <div className="col-12 col-md-4 border-0">
          <div className="counter border-0">
            <h1><span data-count="200">0</span>+</h1>
            <h3>Participants Throughout our Programs</h3>
          </div>
        </div>

        <div className="col-12 col-md-4 border-0">
          <div className="counter border-0">
            <h1><span data-count="8">0</span></h1>
            <h3>Chapters Worldwide</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
