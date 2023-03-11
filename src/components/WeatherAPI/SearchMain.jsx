import { Form,Button,Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import WeatherContainer from "./WeatherContainer";
function SearchMain() {
const [WeatherInfo, setWeatherInfo] = useState({});
const [searchTerm, setSearchTerm] = useState('Barrie');
const GetWeatherInfo = async () => {
  try {
      let endpoint = `https://api.openweathermap.org/data/2.5/weather?appid=0329d6381afe5c4011d1b43af598771c&q=${searchTerm}&units=metric`;
      let res  = await fetch(endpoint);
      let data = await res.json();
     
      const temprature = data.main.temp;
      const city_name = data.name;
      const country_name = data.sys.country;
      const weather_type = data.weather[0].main;   
      
      const WeatherInformation = {
            temprature,
            city_name,
            country_name,
            weather_type
      }
      setWeatherInfo(WeatherInformation);

     } catch (error) {
            console.log(error);
     }  
};
useEffect( () => {
      GetWeatherInfo();
},[]);

   return(
            <section className="bg-primary p-3 rounded text-white">
                  <Container>
                        <Form>
                              <Form.Group className="mb-4">
                                    <Form.Label>Enter City Name</Form.Label>
                                          <Form.Control 
                                                type="text" 
                                                placeholder="Barrie..." 
                                                value={searchTerm} 
                                                onChange={(e)=>{setSearchTerm(e.target.value)}} 
                                          />
                              </Form.Group>
                           <Button variant="danger" onClick={GetWeatherInfo}>Search</Button>
                        </Form>
                  </Container>
                  <WeatherContainer {...WeatherInfo} />
            </section>
      );
}

export default SearchMain;