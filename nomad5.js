
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const today = Date.now();
  const dDay = xmasDay.getTime();
  const leftSeconds = dDay - today;

  const day = Math.floor(leftSeconds / 86400000);
  const hour = Math.floor((leftSeconds - day * 86400000) / 3600000);
  const minute = Math.floor(
    (leftSeconds - day * 86400000 - hour * 3600000) / 60000
  );
  const second = Math.floor(
    (leftSeconds - day * 86400000 - hour * 3600000 - minute * 60000) / 1000
  );

  document.querySelector("h2").innerHTML = `${day < 10 ? `0${day}` : day}d  ${
    hour < 10 ? `0${hour}` : hour
  }h  ${minute < 10 ? `0${minute}` : minute}m  ${
    second < 10 ? `0${second}` : second
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();