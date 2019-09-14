
export class CityFiveDays{
    city:City; //The city of the weather forecast
    list: List[];  //List of weather 5 days forecast
}

class City{
    name: string; //Name of the city
}

class List{
    dt_txt: Date; //Date and time of the weather forecast
    main: Main; //Main information about the weather
    weather: Weather[] //Information about the weather
}

class Main{
    temp: Number; //Temputure of the day (the date of the day in class "List", parameter "dt_txt")
}

class Weather{
    main: string; //Main description about the weather
    description: string; //More detaled information about the weather
    icon: string; //Icon id of the weather
}