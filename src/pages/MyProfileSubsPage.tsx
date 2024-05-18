import Card from "../components/cards/Card";
import "../styles/OtclickandSubs.scss";
type Props = {};
const DATA_VACAN = [
  {
    title: "требуется мед оборудование для МУА",
    company: "международный университет ала тоо",
    graph: "на неделю",
    time: "Сегодня",
    key: 1,
  },
  {
    title: "ищем программистов для поддержки тех.оборудования  ",
    company: "КГМА",
    graph: "PartTime",
    time: "на завтра",
    key: 2,
  },
  {
    title: "Олимпиада среди учеников 2 курса",
    company: "Политех",
    graph: "1место-3000сом 2-место 2000сом 3-место 1000сомов",
    time: "2024 5 мая",
    key: 3,
  },
  {
    title: "день благотворительности в БГУ",
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
  {
    title: " ",
    company: "",
    graph: "",
    time: "",
    key: 6,
  },
  {
    title: " ",
    company: " ",
    graph: "",
    time: "",
    key: 7,
  },
  {
    title: " ",
    company: "",
    graph: "",
    time: "",
    key: 8,
  },
  {
    title: "  ",
    company: " ",
    graph: "",
    time: "",
    key: 9,
  },
  {
    title: " ",
    company: "",
    graph: "",
    time: "",
    key: 10,
  },
  {
    title: " ",
    company: " ",
    graph: "",
    time: "",
    key: 11,
  },
  {
    title: "  ",
    company: "  ",
    graph: "",
    time: "",
    key: 12,
  },
  {
    title: "  ",
    company: "  ",
    graph: "",
    time: "",
    key: 13,
  },
];

const MyProfileSubsPage = (_props: Props) => {
  return (
    <div className="mainBlock_otlick">
      {DATA_VACAN.map((item: any) => (
        <Card item={item} key={item.key} />
      ))}
    </div>
  );
};

export default MyProfileSubsPage;
