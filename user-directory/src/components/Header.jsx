import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTimeSliceRequest } from "../slice/getCurrentTimeSlice";

export const Header = ({ data }) => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const time = useSelector((state) => state?.currentTime);
  const [timer, setTimer] = useState("");
  const [toggle, setToggle] = useState(false);
  let int;

  useEffect(() => {
    if (country !== undefined) {
      dispatch(getCurrentTimeSliceRequest({ country: country }));
    }
  }, [country]);

  const datetimeString = time?.currentTime?.datetime;
  function convertToHHMMSS() {
    if (datetimeString) {
      const timeComponents = datetimeString
        ?.split("T")[1]
        ?.split(".")[0]
        ?.split(":");

      const hours = parseInt(timeComponents[0], 10) || 0;
      const minutes = parseInt(timeComponents[1], 10) || 0;
      const seconds = parseInt(timeComponents[2], 10) || 0;
      setTimer(hours * 3600 + minutes * 60 + seconds);
    }
    return 0;
  }
  useEffect(() => {
    if (datetimeString) {
      convertToHHMMSS();
    }
  }, [time]);
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timer) {
      int = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer]);

  const handletoggle = () => {
    if (datetimeString) {
      if (int && !toggle) {
        setToggle(true);
        clearTimeout(int);
      } else {
        setToggle(false);
        setTimer(timer + 1);
      }
    }
  };

  return (
    <div className="w-[100%] h-[70px] bg-[#272727] flex justify-between">
      <div className="w-[220px] text-[yellow] pt-[18px] ml-[3%] font-bold text-[25px]">
        Back
      </div>

      <div className=" pt-[18px] mr-[3%] text-[25px] text-center">
        <select
          onChange={(e) => {
            setCountry(e.target.value);
            clearTimeout(int);
          }}
          className="rounded-lg text-center h-[40px] w-[150px] bg-none"
        >
          <option value={""}>country</option>

          {data?.country?.map((i, j) => (
            <>{<option value={i}>{i}</option>}</>
          ))}
        </select>
      </div>
      <div className="mt-[10px] rounded-lg flex pt-[8px] justify-around  w-[200px] mr-[3%] h-[50px] bg-[green] text-[25px] text-center">
        {formatTime(timer)}
        <button className="-pt-[8px]" onClick={handletoggle}>
          {!toggle ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};
