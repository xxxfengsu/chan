const dayjs = require("dayjs");

window.addEventListener("DOMContentLoaded", () => {
  console.log("preload script loaded"); // 添加调试信息
  window.dayjs = dayjs;
});
