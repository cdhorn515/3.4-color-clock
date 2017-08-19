(function(){
  'use strict';

  // use the built in Date object and the window.setInterval() to make our clock tick-tock.

function changeColor(hours, minutes) {
  if (hours < 6 && minutes < 30){
    hours = hours * 12;
    minutes = minutes * 3;
  }return [hours, minutes];
}

// function to add 0 to number less than 10
function zeroPad(numberToFormat){
  if(numberToFormat < 10) {
    numberToFormat = '0' + numberToFormat;
  }
  return numberToFormat;
}

  function tickTock(){

    //  constructing time object using Date method
    var lineNode = document.querySelector('.line');
    var currentHoursNode = document.querySelector('.hours');
    var currentMinutesNode = document.querySelector('.minutes');
    var currentSecondsNode = document.querySelector('.seconds');
    // getting html elements
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var currentTime = hours + ":" + minutes + ":" + seconds;
    // console.log(currentTime);
    // adding text to js variables
    currentHoursNode.textContent = zeroPad(hours);
    currentMinutesNode.textContent = zeroPad(minutes);
    currentSecondsNode.textContent = zeroPad(seconds);
    var percentage = ((seconds / 60) * 100);
    // console.log(percentage);
    var hrNode = document.querySelector('.progress-bar');
    hrNode.style.width = percentage +"%";
    var colorNode = document.querySelector('body');
    var adjustedColors = changeColor(hours, minutes);
    colorNode.style.backgroundColor = '#' + adjustedColors[0] + adjustedColors[1] + seconds;

  }

setInterval(tickTock, 1000);
// console.log the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, console.log 0.5)
// Add an hr tag to the html and set its width based on the above percent.
// Using the percent above, dynamically modify the length of the timer bar.


// tickTock();
  // window.alert(tickTock, 5000);

  // console.log the current hours on page load.
  // console.log the current minutes on page load.
  // console.log the current seconds on page load.
  // console.log the above current time components every second.

}());
