import { todoListData } from "./year.js";

const todoList = [];
const todoListTag = document.querySelector(".todolist");
const addBtn = document.querySelector(".button");

addBtn.addEventListener("click", () => {
  const todo = prompt("할일 적기");
  const time = prompt("시간 적기");

  todoListTag.innerHTML = ""; // reset

  todoList.push({ todo, time });
  todoList.forEach(({ time, todo }, index) => {
    todoListTag.appendChild(makeList(index, time, todo));
  });
});

const makeList = (index, time, todo) => {
  const li = document.createElement("li");
  li.dataset.id = index;

  const timeSpan = document.createElement("span");
  timeSpan.innerText = time;
  li.appendChild(timeSpan);

  const todoSpan = document.createElement("span");
  todoSpan.innerText = todo;
  li.appendChild(todoSpan);

  const button = document.createElement("button");
  button.innerText = "삭제";
  button.classList.add("delButton");

  // 버튼에 이벤트 리스너 추가
  button.addEventListener("click", () => {
    // 삭제하기 버튼을 누른 대상을 위에 todoList에서 뺀 newtodoList임
    const newtodoList = todoList.filter((_, i) => i != index);

    // todoList 태그 자식 전체 삭제
    todoListTag.innerHTML = "";

    // newtodoList로 todoList 태그 자식을 다시 만들기
    newtodoList.forEach(({ time, todo }, index) => {
      todoListTag.appendChild(makeList(index, time, todo));
    });

    // todoList를 newtodoList로 갱신하기
    todoList.length = 0;
    todoList.push(...newtodoList);
  });

  li.appendChild(button);
  return li;
};
