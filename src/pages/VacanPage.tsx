import Card from "../components/cards/Card";

import "../styles/Vacan.scss";
import { Pagination } from "@mui/material";

type Props = {};

const DATA_VACAN = [
  {
    title: "Требуется мед оборудование",
    company: "МУА",
    graph: "на неделю",
    time: "Сегодня",
    key: 1,
  },
  {
    title: "Ищем программистов для поддержки тех.оборудования  ",
    company: "КГМА",
    graph: "PartTime",
    time: "на завтра",
    key: 2,
  },
  {
    title: "Олимпиада среди учеников 2 курса",
    company: "Политех",
    graph: "Призовой фонд 15000 сом",
    time: "2024 5 мая",
    key: 3,
  },
  {
    title: "День благотворительности в БГУ",
    company: "БГУ",
    graph: "6 часов",
    time: "Сегодня",
    key: 4,
  },
  {
    title: "Турнир по футболу в АУЦА",
    company: "АУЦА",
    graph: "призовые места",
    time: "17.04.2024",
    key: 5,
  },
 
];

const VacanPage = (_props: Props) => {
  return (
    <div className="ListBlock">
      <h2 className="title">Требования</h2>
      <div className="vacanList">
        {DATA_VACAN.map((item: any) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
      <Pagination count={10} />
    </div>
  );
};

export default VacanPage;
