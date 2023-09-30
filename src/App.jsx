import { useEffect, useState } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState("kiccu nai");
  const [alermHour, setAlermHour] = useState(0);
  const [alermMinute, setAlermMinute] = useState(0);
  const [alermPeriod, setAlermPeriod] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const curTime = new Date();
      let hours = curTime.getHours() % 12;
      hours = hours == 0 ? 12 : hours;
      const minutes = curTime.getMinutes();
      const seconds = curTime.getSeconds();
      const ampm = curTime.getHours() < 12 ? "AM" : "PM";
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    };

    setInterval(() => setCurrentTime(getCurrentTime()), 1000);
  }, []);
  const setAlerm = () => {
    if(alermHour === 0)
    const curTime = currentTime;
    console.log(curTime);
  };
  return (
    <>
      <div className="w-96 h-36 bg-blue-500 mx-auto mt-10 rounded-full flex justify-center items-center  text-white text-6xl border-8 border-gray-300">
        {currentTime}
      </div>
      <div className="flex justify-center mt-10 gap-4 ">
        <select
          name="hours"
          id="hours"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            setAlermHour(e.target.value);
          }}
        >
          <option value="01">01</option>
          <option value="01">02</option>
          <option value="01">03</option>
          <option value="01">04</option>
          <option value="01">05</option>
          <option value="01">06</option>
          <option value="01">07</option>
          <option value="01">08</option>
          <option value="01">09</option>
          <option value="01">10</option>
          <option value="01">11</option>
          <option value="01">12</option>
        </select>
        <select
          name="minutes"
          id="minutes"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            setAlermMinute(e.target.value);
          }}
        >
          <option value="00">00</option>
          <option value="05">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        <select
          name="minutes"
          id="minutes"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            console.log(e.target.value);
            setAlermPeriod(e.target.value);
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button className="btn btn-primary" onClick={setAlerm}>
          Set Alerm
        </button>
      </div>
    </>
  );
};

export default App;
