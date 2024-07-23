const dayjs = require("dayjs");

window.addEventListener("DOMContentLoaded", () => {
  window.dayjs = dayjs;

  function updateTime() {
    if (window.dayjs) {
      const dateElement = document.getElementById("date");
      const currentDate = window.dayjs().format("YYYY-MM-DD HH:mm:ss");
      dateElement.innerText = `${currentDate}`;
    } else {
      console.error("dayjs is not available");
    }
  }

  // 初始时间更新
  updateTime();

  // 每秒更新一次时间
  setInterval(updateTime, 1000);
});
