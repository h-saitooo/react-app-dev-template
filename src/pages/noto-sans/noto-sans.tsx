import { Link } from "react-router-dom";
import PreviewText from "../../components/preview-text";
import "./noto-sans.css";

function NotoSans() {
  return (
    <main>
      <p>
        <Link to="/">TOP</Link>
      </p>
      <h1>Noto Sans</h1>
      <p>
        Google Fonts:{" "}
        <a href="https://fonts.google.com/specimen/Noto+Sans">Noto Sans</a>
      </p>

      <PreviewText fontFamily="noto-sans-jp" />
    </main>
  );
}

export default NotoSans;
