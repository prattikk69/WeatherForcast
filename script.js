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
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=c91521deb71cbdf06bd24010b494707c&q=' + storeSearchData;

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
                const temp = data.main.temp;
                const Ctemp = (temp - 32)*1.8;
                document.getElementById('tempID').textContent = temp + "°F";
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

