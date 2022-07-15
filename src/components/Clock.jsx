function Clock() {
  let data = new Date();
  let hours = data.getHours();
  let min = data.getMinutes();
  let sec = data.getSeconds();
  let day = data.getDay();
  let mon = data.getMonth();
  let year = data.getFullYear();

  return (
    <div className="clockScreen">
      <div className="clock">
        <h1>
          {hours}:{min}:{sec}
        </h1>
        <h2>
          {day}:{mon}:{year}
        </h2>
      </div>
    </div>
  );
}

export default Clock;
