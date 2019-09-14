import { CityFiveDays, ListForecast } from './cityFiveDays';

export class FiveDaysForecast{
    /**
     * This class shows the five days forcast in more convenient way to present to the user
     */
    date: Date; //parallel to CityFiveDays.list.dt_text
    minTemp: Number; //parallel to CityFiveDays.list.main.temp (in hour 00:00:00)
    maxTemp: Number; //parallel to CityFiveDays.list.main.temp (in hour 12:00:00)
    mainDescription: string; //parallel to CityFiveDays.list.weather[0].main (in hour 12:00:00)
    subDescription: string; //parallel to CityFiveDays.list.weather[0].description (in hour 12:00:00)
    iconId: string; //parallel to CityFiveDays.list.weather[0].icon (in hour 12:00:00)
    iconUrl: string //parallel to CityFiveDays.list.weather[0].iconUrl (in hour 12:00:00)

    constructor(nightForecast: ListForecast,dayForecast: ListForecast){
        /**
         * The constractor takes foreach date the day forecast and the nightforecast from the CityFiveDays,
         * and put it himself in the right parameters
         */
        this.date=dayForecast.dt_txt;
        this.minTemp=nightForecast.main.temp;
        this.maxTemp=dayForecast.main.temp;
        this.mainDescription=dayForecast.weather[0].main;
        this.subDescription=dayForecast.weather[0].description;
        this.iconId=dayForecast.weather[0].icon;
        this.iconUrl="https://openweathermap.org/img/wn/"+this.iconId+"@2x.png";
    }
}