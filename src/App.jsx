import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import audioFile from "./assets/audio.mp3";
const App = () => {
  const [currentTime, setCurrentTime] = useState("☢️☢️☢️☢️");
  const currentTimeRef = useRef("☢️☢️☢️☢️");
  const [alermHour, setAlermHour] = useState("Hour");
  const [alermMinute, setAlermMinute] = useState("Min");
  const [alermPeriod, setAlermPeriod] = useState("AM/PM");

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
    setInterval(() => {
      const newCurrentTime = getCurrentTime();
      currentTimeRef.current = newCurrentTime;
      setCurrentTime(newCurrentTime);
    }, 1000);
  }, []);
  const setAlerm = () => {
    let alermToSet = true;
    if (alermHour === "Hour") {
      toast("Set Alerm Hour!");
      alermToSet = false;
    }
    if (alermMinute === "Min") {
      toast("Set Alerm Minute!");
      alermToSet = false;
    }
    if (alermPeriod === "AM/PM") {
      toast("Set Alerm Period(AM/PM)!");
      alermToSet = false;
    }
    if (!alermToSet) return;
    // const alermTime = currentTime;
    const alermTime = `${alermHour.toString()}:${alermMinute.toString()}:00 ${alermPeriod}`;
    toast(`Alerm Set at ${alermTime}` )

    setInterval(() => {
      if (alermTime === currentTimeRef.current) {
        const audio = new Audio(audioFile);
        audio.play();
      }
    }, 1000);
  };
  return (
    <>
      <div className="w-96 h-36 bg-blue-500 mx-auto mt-10 rounded-full flex justify-center items-center  text-white text-6xl border-8 border-gray-300">
        {currentTime}
      </div>
      <div className="flex justify-center mt-10 gap-1 ">
        <select
          name="hours"
          id="hours"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            console.log(e.target.value);
            setAlermHour(e.target.value);
          }}
        >
          <option value="">Hour</option>

          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <ToastContainer></ToastContainer>
        <select
          name="minutes"
          id="minutes"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            console.log(e.target.value);
            setAlermMinute(e.target.value);
          }}
        >
          <option value="">Min</option>
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
          <option value="">AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button className="btn btn-neutral" onClick={setAlerm}>
          Set Alerm
        </button>
      </div>
    </>
  );
};

export default App;
