import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LatestDeals = () => {
    // The data/time we want to countdown to
    var countDownDate = new Date("Mar 30, 2023 24:00:00").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // // Result is output to the specific element
    // document.getElementById("days").innerHTML = days + "d "
    // document.getElementById("hours").innerHTML = hours + "h " 
    // document.getElementById("mins").innerHTML = minutes + "m " 
    // document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
    }
    }, 1000);
    return (
        <>
            <div>
            <div className="goals-heading">
          <h2>LATEST DEALS</h2>
          <span>
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
            </div>
            <p id="days"></p>
    <p id="hours"></p>
    <p id="mins"></p>
    <p id="secs"></p>
    <h2 id="end"></h2>
            </div>
        </>
    )
}

export default LatestDeals
