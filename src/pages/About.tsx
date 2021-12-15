import { Link } from "react-router-dom";

// Page styling
import styles from "./About.module.css";

// Utils
import { setDefaultColors } from "../utils/Colors";

// Resources
import Logo from "../assets/mann-eller-kvinne.png";

const About = () => {
  setDefaultColors();
  return (
    <>
      <nav>
        <Link to="/">Tilbake</Link>
      </nav>
      <article id={styles.about}>
        <h1>Om siden</h1>
        <img src={Logo} alt="Logo" />
        <p>
          Nettsida gjetter om du er mann eller kvinne ved bruk av enkel
          maskinlæring. Maskinlæringsmodellen er trent på over 3000 anmeldelser
          fra norsk media og har som formål å finne ut av hva som skiller
          kvinner og menn skriftlig.
        </p>
        <p>
          Konseptet er inspirert av debatten som oppstod i Berteheussen-saken,
          hvor det skal ha blitt diskutert hvorvidt det er en mann som kan ha
          skrevet trusselbrevene som er omtalt. Dette på grunn av at ordet
          "tisse" ble brukt fremfor ordet "pisse". Du kan lese mer om saken{" "}
          <a href="https://www.nrk.no/kultur/uenige-om-bruken-av-ordet-_tisse_-1.15206839">
            her
          </a>
          .
        </p>
        <p>
          Om du mener at denne kan forbedres, kan du gjerne bidra. Kan du react
          eller har kunnskap om maskinlæring så er det bare å åpne opp din
          favoritteditor og hive seg på!
        </p>
        <p>
          Denne nettsiden er laget for å utforske forskjellene mellom menn og
          kvinner. Det skal derimot sies at modellen som er brukt for å gjøre
          antagelser er lite optimert og er basert på en ganske liten mengde
          data. Man skal dermed ikke ta denne så seriøst. Dette er bare et
          prosjekt laget for morrohetens skyld og er ikke ment for bruk til
          forskning eller andre seriøse formål.
        </p>
        <p>
          Takk til{" "}
          <a href="https://www.mn.uio.no/ifi/english/research/groups/ltg/">
            LtgOslo
          </a>{" "}
          som har laget det taggede korpuset, datasettet, som er brukt til å
          trene maskinlæringsmodellen.
        </p>
      </article>
    </>
  );
};

export default About;
