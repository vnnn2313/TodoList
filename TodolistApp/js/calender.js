const ymd = document.querySelector(".ymd");
const [year, month, date] = new Date().toLocaleString().split(" ");
ymd.innerText = `${year} ${month} ${date}`;

setInterval(() => {
  const [time] = new Date().toLocaleString().split(" ").reverse();
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);

const korTranslation = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

const day = korTranslation[new Date().getDay()];
const dayTag = document.querySelector(".day");
dayTag.innerText = day;
