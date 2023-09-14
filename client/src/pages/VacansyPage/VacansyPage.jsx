import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import array from "../../Storage/Storage.json";
import style from "./style.module.scss";

function VacansyPage() {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const result = array.filter((elem) => elem.id == id);
    console.log(result);
    setData(result[0]);
  }, []);

  return (
    <div>
      <div className={style.vacansy}>
        <h1>{data.header}</h1>
        <div>
          <h2>{data.salary}</h2>
          <p>{data.workday}</p>
        </div>
        <div className={style.city}>
          <div className={style.img}></div>
          <p>{data.city}</p>
        </div>
      </div>
    </div>
  );
}

export default VacansyPage;
