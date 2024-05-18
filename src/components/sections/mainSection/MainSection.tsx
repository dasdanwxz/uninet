import { useNavigate } from "react-router-dom";
import manSearching from "../../../assets/mainSection.svg";
import "../../../styles/mainSection.scss";

type Props = {};

const MainSection = (_props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <img src={manSearching} alt="error" className="mainSection_img" />
      </div>
      <div className="infoBlock">
        <h1>Найдите себя подходящую помощь!</h1>
        <div className="infoBlock_search">
          <input
            type="text"
            placeholder="волонтерство,содействие"
            className="infoBlock_input"
          />
          <button className="infoBlock_btn btn_naity">Найти</button>
        </div>
        <button
          className="infoBlock_btn btn_razmestit"
          onClick={() => navigate("/noviyrezume")}>
          Разместить Требования
        </button>
      </div>
    </div>
  );
};

export default MainSection;
