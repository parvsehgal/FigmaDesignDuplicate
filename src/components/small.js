import { useEffect, useState } from "react";
import "./small.css";
import axios from "axios";
import Card from "./card";
function Small({ setAge, setDob, setName, setImageUrl, setMail }) {
  let [dataFromApi, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=12&idStarts=1001")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  let compToRender = dataFromApi.map((data) => {
    return (
      <Card
        {...data}
        setAge={setAge}
        setName={setName}
        setDob={setDob}
        setImageUrl={setImageUrl}
        setMail={setMail}
      ></Card>
    );
  });

  return <div className="smallDiv">{compToRender}</div>;
}

export default Small;
