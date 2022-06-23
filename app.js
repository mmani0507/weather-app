window.addEventListener("load", () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // console.log(long);
      // console.log(lat);
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `https://api.darksky.net/forecast/77a0818dd4b9b27da4b0d75b73e68fe5/${lat},${long}?lang=ta`;
      const temperature_section=document.querySelector(".temprature");
      const temperatureSpan=document.querySelector(".temprature span");
      const icons=document.querySelector(".location p");

      fetch(api)
        .then(res => res.json())
        .then(data => {
          document.querySelector(".location-timezone").innerText = data.timezone ;
          console.log(data)
          const {temperature,summary,icon}=data.currently;

          document.querySelector(".temperature-degree").innerText=temperature
          let deg =Math.floor((temperature-32)*5/9)
          switch (icon) {
            case "clear-day":
              icons.innerHTML=`<i  class="fa fa-sun-o fa-4x"></i>`
              break;
              case "partly-cloudy-day":
                icons.innerHTML=`<i  class="fa fa-cloud fa-4x"></i>`
                break;
                case "rain":
                icons.innerHTML=`<i class="fa fa-tint fa-4x" aria-hidden="true"></i>`
                break;
            default:
              break;
          }
  
         // console.log(deg);
         temperature_section.addEventListener('click',e=>{
           // alert(55)
            if(temperatureSpan.innerText=="F"){
              
              document.querySelector(".temperature-degree").innerText=deg+"°"
              temperatureSpan.innerText="C"

            }
            else{
              document.querySelector(".temperature-degree").innerText=temperature+"°"
              temperatureSpan.innerText="F"
            }
          })

          document.querySelector(".temperature-description").innerText=summary
        });
    });
  } else {
    el = document.getElementsByName("h2");
    el.textContent = "hey its not working without Permission";
  }
});
