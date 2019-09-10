/*
    This class is supose to hold the current weather Json.
*/

export class CityWeather{
    weather: Weather[];     //contains the weather
    main: Main;      //contains the main onformation about the weather
}

class Weather{
    main: string;
    description: string;      //weather description
    icon: string      //weather icon code, witch will be needed to add to the right URL
}

class Main{
    /**
     * for some reason, the json does not give accurate weather,
     * and the min and the max tempeture are the same (only in Israel)
     */

    temp: number;      //the current tamputures os the day
    temp_min: number;      //gives the max temp of the date, in Kelvin (decrease 273.15 to get Celsius)
    temp_max: number;      //gives the min temp of the date, in Kelvin (decrease 273.15 to get Celsius)
}