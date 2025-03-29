'use client';

import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Sarah Randolph</title>
        <link
          rel="globals"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEJ03vNEXpP7I6yM5Zl6WlFa4v2+6g9K6Z3l52KNp5pPjRfJz59l/Dz9m0g7N"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className="background">
        <div className="container-fluid p-4">
          <Header />
          <main className="d-flex justify-content-center align-items-center p-4">
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIq0Ywv68a4akS9ZyXtv9sMlVqtW8Fz0TZnkOWO8aDX4Xz7J9fX"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

async function getWeather() {
  console.log("Weather function triggered.");
  if (navigator.geolocation) {
      console.log("Geolocation supported.");
      navigator.geolocation.getCurrentPosition(async function (position) {
          console.log("Geolocation successful, coordinates:", position.coords);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America%2FSao_Paulo`;

          try {
              const response = await fetch(url);
              const data = await response.json();
              console.log("API data:", data);

              if (data.current_weather) {
                  const temperature = data.current_weather.temperature;
                  const conditionCode = data.current_weather.weathercode;
                  const isDay = data.current_weather.is_day;

                  console.log("Temperature:", temperature);
                  console.log("Weather condition code:", conditionCode);
                  if (isDay){
                    document.body.classList.remove('night-mode');
                  } else {
                    document.body.classList.add('night-mode');
                  }
                  const condition = getWeatherCondition(conditionCode);


              } else {
                  console.error("No weather data found in the response.");
              }
          } catch (e) {
              console.error("Error fetching weather data:", e);
          }
      }, function(error) {
          console.log('Geolocation error:', error);
      });
  } else {
      console.log("Geolocation not supported, using default color palette");
  }
}

function getWeatherCondition(code) {
  const conditions = {
    0: 'Clear sky',
    1: 'Partly cloudy',
    2: 'Cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing rime fog',
    51: 'Light rain',
    53: 'Moderate rain',
    55: 'Heavy rain',
    56: 'Light freezing rain',
    57: 'Heavy freezing rain',
    61: 'Light snow',
    63: 'Moderate snow',
    65: 'Heavy snow',
    71: 'Light showers',
    73: 'Moderate showers',
    75: 'Heavy showers',
    77: 'Snow showers',
    80: 'Heavy thunderstorm',
    81: 'Thunderstorm with hail',
    82: 'Severe thunderstorm'
  };

  return conditions[code] || 'Unknown condition';
}