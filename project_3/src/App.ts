export default class App 
{
    private apiKey = "50d53005c0fd5f556bb4ef15224c4209";
    public storageKey = "weatherItems";

    public getItems() {
        const items = this._getItemsAsString();
        return items ? JSON.parse(items) : [];
    }

    private _getItemsAsString(): string | null {
        return localStorage.getItem(this.storageKey);
    }

    public setOrSkip(city: string) {
        let items = this._getItemsAsString();
        let itemAsArray = items ? JSON.parse(items) : [];

        if(!itemAsArray.includes(city)) {
            itemAsArray.push(city);
            localStorage.setItem(this.storageKey, JSON.stringify(itemAsArray));
        }
    }

    public async getCityInfo(city: string) {
        return await this._getWeather(city);
    }

    private async _getWeather(city: string): Promise<any> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
        const response = await fetch(url);
        return await response.json();
    }
}