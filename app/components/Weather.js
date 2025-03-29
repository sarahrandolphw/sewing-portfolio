class WeatherService {
    constructor() {
      this.apiBaseUrl = 'https://api.open-meteo.com/v1/forecast';
    }
  
    async getWeather() {
      const urlParams = new URLSearchParams(window.location.search);
      const forcedCondition = urlParams.get('condition');
  
      if (forcedCondition !== null) {
        console.log(`Forced condition: ${forcedCondition}`);
        this.applyWeatherCondition(forcedCondition.toLowerCase());
        return;
      }
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          console.log("coordinates:", position.coords);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          try {
            const response = await fetch(`${this.apiBaseUrl}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America%2FSao_Paulo`);
            const data = await response.json();
            console.log("API data:", data);
  
            if (data.current_weather) {
              const condition = this.getWeatherCondition(data.current_weather.weathercode);
              const isDay = data.current_weather.is_day;
              this.applyWeatherCondition(condition, isDay);
            } else {
              console.error("No weather data found in the response.");
            }
          } catch (e) {
            console.error("Error fetching weather data:", e);
          }
        }, (error) => {  // <-- Also use arrow function here
          console.log('Geolocation error:', error);
        });
      } else {
        console.log("Geolocation not supported, using default color palette");
      }
    }
  
    getWeatherCondition(code) {
      if ([0].includes(code)) return 'sunny';
      if ([1, 2, 3, 45, 48].includes(code)) return 'cloudy';
      if ([51, 53, 55, 56, 57, 61, 63, 65, 71, 73, 75, 77, 80, 81, 82].includes(code)) return 'rainy';
      if ([56, 57, 77].includes(code)) return 'freezing';
      return 'unknown';
    }
  
    applyWeatherCondition(condition, isDay = true) {
      document.body.classList.remove('night-mode', 'sunny_mode', 'cloudy_mode', 'rainy_mode', 'freezing_mode');
  
      if (isDay) {
        if (condition === 'sunny') {
          document.body.classList.add('sunny_mode');
        } else if (condition === 'cloudy') {
          document.body.classList.add('cloudy_mode');
        } else if (condition === "rainy") {
          document.body.classList.add('rainy_mode');
        } else if (condition === "freezing") {
          document.body.classList.add('freezing_mode');
        }
      } else {
        document.body.classList.add('night-mode');
      }
    }
  }
  
  export default new WeatherService();
  