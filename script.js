const apiKey = "07b690b2102a863c952fef1a4bebf20c";

async function getCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`).then(
        response => response.json())
        
        filldata(data);
}

function clickSearch(){
    const city = document.querySelector('#input-city').value;

    getCity(city);
}

function filldata(data){
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector('.time-info').innerHTML = data.weather[0].description;
    document.querySelector('.humidity-info').innerHTML = data.main.humidity + "%";
    document.querySelector('.img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
