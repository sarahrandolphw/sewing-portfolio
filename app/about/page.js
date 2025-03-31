import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import text from "../../data/about";

export default function AboutPage() {
    return (
      <div className='about-links'>
        <p>{text.description} <a href="https://github.com/sarahrandolphw/sewing-portfolio">here</a></p>
        <p>{text.apiinfo} <a href="https://open-meteo.com/">Free Weather API</a></p>
      </div>
    );
  }