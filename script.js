//************************************************************************ */
        const aboutMe = document.querySelector('.aboutMe');
        const hideMe = document.querySelector('.hideMe');
        const cross = hideMe.querySelector('.cross');
        aboutMe.addEventListener('click', () => {
            hideMe.classList.toggle('show');
        });
        cross.addEventListener('click',()=>{
            hideMe.classList.toggle('show');
        })
//************************************************************************ */
//************************************************************************ */
        const search = document.querySelector('.searchBar');
        function searchData(){
            const storeSearchData = search.value.trim().toLowerCase();
            console.log(storeSearchData);

        const apiKey = 'c91521deb71cbdf06bd24010b494707c';
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=c91521deb71cbdf06bd24010b494707c&units=metric&q=' + storeSearchData;

        try{
            fetch(url).then(data => data.json())
            .then(data => {
                console.log(data);

                const currentCity = document.getElementById('currentCityID');
                currentCity.textContent = `${(data.name)}`;
                const putResult = document.getElementById('putResultID');
                putResult.textContent = `${(data.weather[0].main)}`
                document.getElementById('windSpeedID').textContent = `${(data.wind.speed)}km/hr`;
                document.getElementById('humidityID').textContent = `${(data.main.humidity)}%`;
                document.getElementById('pressureID').textContent = ` ↑${(data.main.pressure)}mb`
                document.getElementById('visibilityID').textContent = `${(data.visibility)}m`;
                const temp = Math.round(data.main.temp);
                document.getElementById('tempID').textContent = temp + "°C";
                checkLatency();
            })
        }catch(err){
            return 500;
        }
        }
//************************************************************************ */
//************************************************************************ */

        document.addEventListener('keydown', (event)=>{
            if(event.key === 'Enter'){
                searchData();
            }
        })
//************************************************************************ */
//************************************************************************ */

window.addEventListener('offline', ()=>{
    document.getElementById('putResultID').textContent = "You're offline";
    document.querySelector('.putResult').textContent ="";
})
//************************************************************************ */
//************************************************************************ */
async function checkLatency(){
    const url2 = 'https://raw.githubusercontent.com/prattikk69/For-fetching-Data/refs/heads/main/weather.json';
    const network = document.querySelector('.network');
    const delay = document.getElementById('networkID');
        let total = 0;
    const tests = 5;

    for (let i = 0; i < tests; i++) {
        const start = performance.now();
        await fetch(url2, { cache: "no-store" });
        const end = performance.now();
        total += end - start;
    }

    const avg = Math.round(total / tests);
    console.log(`Average network delay: ${avg.toFixed(2)} ms`);
    delay.textContent = avg + "ms";
    if (avg >= 0 && avg <= 99) {
        network.style.color = 'rgb(21, 211, 88)';
    } 
    else if (avg >= 100 && avg <= 150) {
        network.style.color = 'yellow';
    } 
    else {
        network.style.color = 'red';
    }

    delay.style.color = 'black';

}
window.addEventListener('load', checkLatency());
//************************************************************************ */
//************************************************************************ */
