import React from "react";

function TimerComponent() {
  const [status, change] = React.useState(0);
  console.log("업데이트");
  React.useEffect(function () {
    change(status + 1);
  }, []);

  return (
    <div>
      <h3>{status}</h3>
      <button>1 증가</button>
    </div>
  );
}

export default TimerComponent;
