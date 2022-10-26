function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('master').style.opacity='0.6';
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('master').style.opacity='1';
}

let x= document.getElementById('out');
            let y = document.getElementById('weatherOut');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                    
                }else{
                    x.innerText = "Geo Not Supported"
                }
            }

            function showPosition(data){
                console.log(data)
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
                document.getElementById('out').value= `Lat ${lat} and long ${long}`
                document.getElementById('out').style.visibility='visible';
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                //api calling
                fetch(url,{method: 'GET'})
                // return promise
                .then((res) => res.json())
                // resolve promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day;
                    document.getElementById('weatherOut').value= `${cityName} & Temp ${temp} °C`
                    document.getElementById('weatherOut').style.visibility='visible';
                   
                })
                .catch((err) => {
                    console.log(err)
                })

            }