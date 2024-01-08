import { useEffect, useState } from "react";
import moment from "moment-timezone";

const CountryDropdown = () => {
  const [currentDate, setCurrentDate] = useState();
  const [countries, setCountries] = useState([]);

  const getTime = (timezone) => {
    console.log("timezone", timezone);
    fetch(`http://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data?.datetime", data?.datetime);
        const res = formatDateTime(data?.datetime, timezone);
        setCurrentDate(res);
      });
  };
  const getCountries = () => {
    fetch("http://worldtimeapi.org/api/timezone")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        getTime(data[0]);
      });
  };
  const formatDateTime = (dateString, timeZone) => {
    return moment(dateString).tz(timeZone).format("MMMM Do YYYY, h:mm:ss a");
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="country-dropown-container">
      <p>{currentDate}</p>
      <select
        onChange={(event) => getTime(event.target.value)}
        name="cars"
        id="cars"
      >
        {countries?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountryDropdown;
