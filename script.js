let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");

let boxVal = [];
let values = [];

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableButtons();
  values = [];
  boxVal = [];
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    let boxText = box.innerText;
    infiniteFunction(boxText, box);
    checkWinner();
  });
});

const infiniteFunction = (val, box) => {
  values.push(val);
  boxVal.push(box);
  console.log(values);

  if (values.length === 6) {
    let deleteVal = values.shift();
    let deletebox = boxVal.shift();
    console.log(deleteVal);
    deletebox.innerText = "";
    deletebox.disabled = false;
  }
  if (values.length >= 5) {
    const [first] = boxVal;
    console.log(first);
    first.style.color = "rgb(112, 100, 80, 0.5)";
  }
};

const disbaleButtons = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableButtons = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = "Congratulations! Winner is " + winner;
  msgContainer.classList.remove("hide");
  values = [];
  boxVal = [];
  disbaleButtons();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3val && pos1Val === pos3val) {
        showWinner(pos1Val);
      } else {
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
