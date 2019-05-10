window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(long);
            // console.log(lat);
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/77a0818dd4b9b27da4b0d75b73e68fe5/${lat},${long}`;
            console.log(api);
            fetch(api)
                .then(res => res.json())
                .then(data => {
                    let deg = document.querySelector("#deg");
                    let des = document.querySelector(".temperature-description");
                    deg.innerHTML = data.currently.apparentTemperature;

                    //h1.innerHTML = data.currently;
                })
        });
    } else {
        el = document.getElementsByName('h2');
        el.textContent = "hey its not working without Permission"

    }
})