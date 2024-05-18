import worker from "../assets/Career progress-pana.svg";
import "../styles/SubPages.scss";

type Props = {};

const ForWorkers = (_props: Props) => {
  return (
    <div className="mainBlockSub">
      <img src={worker} alt="error" style={{ width: "40vmax" }} />

      <div>
        <h2>Ура!</h2>
        <h4
          style={{
            lineHeight: "1.3rem",
            fontWeight: "normal",
            marginTop: "2rem",
          }}>
          Поиск работы может быть сложным, но мы здесь, чтобы помочь вам найти
          идеальное рабочее место! Наша платформа предоставляет уникальные
          возможности для поиска работы в различных отраслях и сферах
          деятельности. Мы понимаем, что каждый человек уникален, и стремимся
          соединить вас с компаниями, которые подходят именно вам. Наша база
          данных предлагает широкий выбор вакансий от различных работодателей с
          разными потребностями. Независимо от вашего опыта, профессиональных
          навыков или желаемой сферы работы, у нас есть предложения для всех. Мы
          предлагаем возможности для карьерного роста и развития в разнообразных
          компаниях, помогая вам найти работу, которая соответствует вашим
          интересам и ожиданиям. Присоединяйтесь к нашей платформе сегодня,
          чтобы начать поиск работы, которая вдохновит вас и позволит раскрыть
          свой потенциал. Наша команда посредников готова помочь вам на этом
          увлекательном пути поиска новых карьерных возможностей.
        </h4>
      </div>
    </div>
  );
};

export default ForWorkers;
