import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  if (ss < 10) {
    ss = "0" + ss;
  };
  if (mm < 10) {
    mm = "0" + mm;
  };
  if (hh < 10) {
    hh = "0" + hh;
  };
  
  return (
    <div className="clockScreen">
      <div className="clock">
        <p>{hh}</p>
      </div>
      <h2 className="clockDots">:</h2>
      <div className="clock">
        <p>{mm}</p>
      </div>
      <h2 className="clockDots">:</h2>
      <div className="clock">
        <p>{ss}</p>
      </div>
    </div>
  );
}

export default Clock;
