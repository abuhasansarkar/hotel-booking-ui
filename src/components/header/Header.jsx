import {
  CalendarMonth,
  DirectionsCar,
  FlightTakeoffOutlined,
  Hotel,
  PeopleAltOutlined,
} from "@mui/icons-material";
import "./header.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";

import { useState } from "react";
import { DateRange } from "react-date-range";

const Header = ({type}) => {
  const [isOpenCalender, setIsOpenCalender] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const [isOptions, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const hendelOption = (name, oparation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oparation === "i" ? isOptions[name] + 1 : isOptions[name] - 1,
      };
    });
  };

  return (
    <div className={type === "hotellist" ? "header hotellistMode": "header"}>
      <div className="container">
        <div className="headerIcon">
          <div className="listItem active">
            <Hotel />
            <span>Stays</span>
          </div>
          <div className="listItem">
            <FlightTakeoffOutlined />
            <span>Flights</span>
          </div>
          <div className="listItem">
            <DirectionsCar />
            <span>Car rentals</span>
          </div>
          <div className="listItem">
            <Hotel />
            <span>Attractions</span>
          </div>
          <div className="listItem">
            <DirectionsCar />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "hotellist" && (
          <>
            <h1>A lifetime of discounts? Its Genius.</h1>
            <p>Search deals on hotels, homes, and much more...</p>
            <button className="headerbtn">Sign in / Register</button>

            <div className="headerSearchArea">
              <div className="inputArea">
                <Hotel />
                <input type="text" placeholder="Where are you going?" />
              </div>

              <div className="dateArea">
                <CalendarMonth />
                <span
                  onClick={() => setIsOpenCalender(!isOpenCalender)}
                >{`${format(date[0].startDate, "MMM-dd-yyyy")} to ${format(
                  date[0].endDate,
                  "MMM-dd-yyyy"
                )}`}</span>
                {isOpenCalender && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="userArea">
                <PeopleAltOutlined />
                <span
                  onClick={() => setIsOpenOptions(!isOpenOptions)}
                >{`${isOptions.adult} Adult . ${isOptions.children} Children . ${isOptions.room} Room`}</span>

                {isOpenOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span>Adult : </span>
                      <div>
                        <button
                          disabled={isOptions.adult <= 1}
                          onClick={() => hendelOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="counterNumber">{isOptions.adult}</span>
                        <button onClick={() => hendelOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span>Children : </span>
                      <div>
                        <button
                          disabled={isOptions.children <= 0}
                          onClick={() => hendelOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="counterNumber">
                          {isOptions.children}
                        </span>
                        <button onClick={() => hendelOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span>Room : </span>
                      <div>
                        <button
                          disabled={isOptions.room <= 1}
                          onClick={() => hendelOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="counterNumber">{isOptions.room}</span>
                        <button onClick={() => hendelOption("room", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="searchbtn">Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
