var flag = true;
let weather = {
    "apiKey" : "5b072b3de6d90b011eca9cc4958e4b95",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max, feels_like, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description[0].toUpperCase() + description.substring(1, description.length);
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".temp-min").innerText = "Min Temperatur: " + temp_min + " °C";
        document.querySelector(".temp-max").innerText = "Max Temperature: " + temp_max + " °C";
        document.querySelector(".feels").innerText = "Feels Like: " + feels_like + " °C";
        
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + " Km/hr";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1280x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter")
    weather.search();
});
