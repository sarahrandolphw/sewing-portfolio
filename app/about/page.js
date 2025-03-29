import text from "../../data/about";

export default function AboutPage() {
    return (
      <div>
        <p>{text.description} <a href="https://github.com/sarahrandolphw/sewing-portfolio">here</a></p>
        <p>{text.apiinfo} <a href="https://open-meteo.com/">Free Weather API</a></p>
      </div>
    );
  }