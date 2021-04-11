import App from "./App";
import { WeatherCardBuilder } from "./WeatherCardBuilder";

const app = new App();
const currentItems = app.getItems();
const result = document.getElementById("result");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

const getCity = () => {
    return searchInput?.value;
}

searchBtn?.addEventListener("click", async function() {
    const cityName = getCity();
    const city = await app.getCityInfo(cityName);

    if("weather" in city && !currentItems.includes(cityName)) 
    {
        app.setOrSkip(cityName);
        const builder = new WeatherCardBuilder(city);
        result?.append(builder.build());
    }
});

window.addEventListener("load", function() {
    app.getItems().forEach(async (item: string) => {
        const city = await app.getCityInfo(item);
        
        if("weather" in city)
        {
            console.log(city)
            const builder = new WeatherCardBuilder(city);
            result?.append(builder.build());
        }
    });
})