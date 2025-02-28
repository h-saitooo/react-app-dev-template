import { Link } from "react-router-dom";
import PreviewText from "../../components/preview-text";
import "./noto-serif.css";

function NotoSerif() {
  return (
    <main>
      <p>
        <Link to="/">TOP</Link>
      </p>
      <h1>Noto Serif</h1>
      <p>
        Google Fonts:{" "}
        <a href="https://fonts.google.com/specimen/Noto+Serif">Noto Serif</a>
      </p>

      <PreviewText fontFamily="noto-serif-jp" />
    </main>
  );
}

export default NotoSerif;
