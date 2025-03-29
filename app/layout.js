'use client';

import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import './styles/globals.css'
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

                  if (isDay){
                    document.body.classList.remove('night-mode');
                  } else {
                    document.body.classList.add('night-mode');
                  }
                  const condition = getWeatherCondition(conditionCode);
                  console.log(condition);

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
  if ([0].includes(code)) return 'Sunny';
  if ([1, 2, 3, 45, 48].includes(code)) return 'Cloudy';
  if ([51, 53, 55, 56, 57, 61, 63, 65, 71, 73, 75, 77, 80, 81, 82].includes(code)) return 'Rainy';
  if ([56, 57, 77].includes(code)) return 'Freezing';
  return 'Unknown';
}