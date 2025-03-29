import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sarah Warren</title>
        <link
          rel="globals"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEJ03vNEXpP7I6yM5Zl6WlFa4v2+6g9K6Z3l52KNp5pPjRfJz59l/Dz9m0g7N"
          crossOrigin="anonymous"
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
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIq0Ywv68a4akS9ZyXtv9sMlVqtW8Fz0TZnkOWO8aDX4Xz7J9fX"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
