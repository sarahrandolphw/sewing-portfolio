'use client';

import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import Script from 'next/script';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    Weather.getWeather();
  }, []);
  return (
    <html lang="en">
        <head>
          <title>Sarah Randolph</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
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