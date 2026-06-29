function fetch_data(){
    let cityname = document.getElementById('city').value
    // console.log(cityname)

    if (cityname === "")
    {
        alert('Enter city name')
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=8c1ab9e4c95b5951f1d6664e86954888&units=metric"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        let resp_code=data['cod']
        if (resp_code === '404'){
            alert('city not found')
        }
        else{
            let citytemp =data['main']['temp']
            // console.log(citytemp)
            let icon= data['weather']['0']['icon']
            // console.log(icon)
            let icon_url=  'https://openweathermap.org/img/wn/'+icon+'@2x.png'
            document.getElementById('result').innerHTML=
            `<img src=`+icon_url+`>`+`<br>`+`<h3>Temperature is:`+citytemp+`&deg;C</h3>`
         }
    })
}