let input = document.getElementById('input')
let name = document.getElementById('name')
let temp = document.getElementById('temp')
let btn = document.getElementById('btn')
let form = document.querySelector('.form')
let main = document.querySelector('.main')

const KEY = '56ff80ac3a0c0f5f2e37a0de8ad98800'

const getCity = async (city) => {
const base = "https://api.openweathermap.org/data/2.5/weather"
const query = `?q= ${city}&units=metric&appid=${KEY}`

const req = await fetch(base + query)
const data = await req.json()

return data
}


const getWather = async (city) => {
const data = await getCity(city)
return data
}

const creat = (wather) => {
    console.log(wather);
main.innerHTML = `
<div class="main-hedar">
                <h3 id="name">${wather.name},${wather.sys.country}</h3>
                <img src="./img/🦆 icon _location_ (1).png" alt="">
            </div>
            <div class="main-centr">
                <img src="./img/🦆 icon _temperature_.svg" alt="">
                 <p id="temp">${wather.main.temp}°C</p>
                <img src="./img/Group 41.png" alt="clude">
            </div>
            <div class="data">
                <span>data</span>
            </div>
            <div class="main-foter">
                <div class="tex">
                    <h5>Humidity</h5>
                    <p>${wather.main.humidity}%</p>
                </div>
                <div class="tex">
                    <h5>Weather condition</h5>
                    <p>${wather.weather[0].main}</p>
                </div>
                <div class="tex">
                    <h5>Air Pressure</h5>
                    <p>${wather.main.pressure}hPa</p>
                </div>
                <div class="tex">
                    <h5> Wind</h5>
                    <p>${wather.wind.speed}mph</p>
                </div>
                
            </div>
`
}

function clear() {
    input.value = ''
}

function validate() {
    if (!input.value.trim()) {
        alert('SHaxar nomini kiriting')
        return false
    }else {
        form.style.borderColor = "black"
    }
    if (!input.value || typeof Number) {
        
        return false
    } else {
        form.style.borderColor = "black"
    }
    return true
}



btn && btn.addEventListener('click', function () {
    validate()
    getWather(input.value).then((data) => creat(data))
    clear()

})