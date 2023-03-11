import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function WeatherContainer( 
      {
      temprature,
      city_name,
      country_name,
      weather_type
      }
      ) {
      const [weatherState,setWeatherState]= useState("");
      useEffect( ()=>{
            if(weather_type) {
                  switch(weather_type) {
                        case "Clouds":
                              setWeatherState("text-dark");
                        break;
                        case "Rain":
                              setWeatherState("text-secondary");
                        break;
                        case "Clear":
                              setWeatherState("text-danger");
                        break;
                        case "Haze":
                              setWeatherState("text-success");
                        break;
                        case "Sunny":
                              setWeatherState("text-warning");
                        break;
                        default:
                              setWeatherState("text-primary");
                            
                  }
            }
      },[weather_type]);

      return(
            <>
            <Card className="my-4 text-dark">
                  <Card.Body className="p-4">
                        <Card.Title>
                              <span>{new Date().toLocaleString()}</span>
                        </Card.Title>
                       <Row>
                        <Col >
                              <Card.Text className={`display-4 fw-bold ${weatherState}`}>
                                    {temprature}&deg; Celsius
                              </Card.Text>
                        </Col>
                        <Col >
                              <Card.Text className="display-7">
                              <span>Weather Type: {weather_type}</span>
                              <br />
                              <span>{city_name}, {country_name}</span>
                              </Card.Text>
                        </Col>
                       </Row>
                  </Card.Body>
            </Card>
            </>
      );
}

export default WeatherContainer;