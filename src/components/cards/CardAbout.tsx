import "../../styles/CardAbout.scss";
type Props = {};

const CardAbout = (_props: Props) => {
  return (
    <div className="mainBlock_about">
      <div className="aboutBlock_first">
        <h2>Волонтер</h2>
        <p>
          Могу помочь!
        </p>
        <h3>Навыки:</h3>
        <p>
          
        </p>
        <h3>Требования:</h3>
        <p>
          заполнить/пропустить 
        </p>
      </div>
      <div className="aboutBlock_second">
        <div>
          <h4>Makers</h4>
          <p>Бишкек, улица А. Усенбаева, 138А</p>
          <p>Контакты: +996 705 395 359</p>
        </div>
        <div className="aboutBlock_btn">
          <p className="aboutBlock_btnSvyaz">Связаться</p>
          <p className="aboutBlock_btnSubs">Подписаться</p>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
