const selectForm = document.querySelector(".js-select");
  selectInput = selectForm.querySelector("input");
  input = document.querySelector(".js-print");
  playGame = document.querySelector(".js-play");

let teamName = [];
const T_NAME = 'teamName';


function menuSelect (number) {
  switch (number) {
    case '1':
      makeTeam();
      break;

    case '2':
      removePrint();
      load_team();
      break;

    case '3':
      removePrint();
      play();
      break;

    default:
      removePrint();
      alert("다시 입력해주세요.");
  }
}

function saveTeam () {
  sessionStorage.setItem(T_NAME, JSON.stringify(teamName));
}

function teamSubmit (event) {
  let teamObj = event.target.value;
  let newId = teamName.length + 1;
  teamObj = {
    value: text,
    id: newId
  };
  teamName.push(teamObj);
  saveTeam();
}

function makeTeam () {
  let str = document.createElement("p");
  let textBox = document.createElement("input");
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('class', 'save');
  str.innerText = "팀 이름을 입력하세요.";
  input.appendChild(str);
  input.appendChild(textBox);
}


function removePrint() {
  input.innerText = '';
}

function handleSubmit (event) {
  event.preventDefault();
  const selNum = selectInput.value;
  menuSelect(selNum);
}

function load_team() {
    const loadTeam = sessionStorage.getItem(T_NAME);
    if (loadTeam !== null) {
      input.innerText = loadTeam;
    }
  
  }

function play() {
  let str1 = "";
  teams = ballCounter(player.avg);
  str1 += team.result;
  str1 += gameOver(player1.hit);
  playGame.innerText = str1;
}

function ballCounter(hitter) {
  let count = { strike: 0, ball: 0, out: 0, hit: 0 };
  let rs = "";
  let calculate = (1 - hitter) / 2 - 0.05;
  while (count.out != 3) {
    let rate = Math.random();
    let call = "";

    if (rate <= hitter) {
      count.strike = count.ball = 0;
      call = "hit";
      ++count.hit;
    }

    else if (hitter < rate && rate < calculate + hitter) {
      call = "ball";
      ++count.ball;

      if (count.ball > 3) {
        count.strike = count.ball = 0;
        call = "hit";
        ++count.hit;
      }
    }

    else if (hitter > 0.9) {
      count.strike = count.ball = 0;
      call = "out";
      ++count.out;
    }

    else {
      call = "strike";
      ++count.strike;

      if (count.strike > 2) {
        count.strike = count.ball = 0;
        call = "out";
        ++count.out;
      }
    }
    rs += swingResult(call, count);

  }

  return { result: rs, hit: count.hit };

}

function swingResult(call, count) {
  let res = "";
  const switchHitter = " 다음 타자가 타석에 입장했습니다.\n";

  switch (call) {
    case 'strike':
      res += "스트라이크!\n";
      break;
    case 'ball':
      res += "볼!\n";
      break;
    case 'hit':
      res += ("안타!" + switchHitter);
      break;
    case 'out':
      if (count.out != 3) {
        res += ("아웃!" + switchHitter);
      } else {
        res += "아웃!\n";
      }
      break;

    default:
      break;
  }

  res += printCount(count);
  return res;

}

function printCount(count) {
  return (count.strike + "S " + count.ball + "B " + count.out + "O\n\n");
}

function gameOver(hit) {
  return ("\n "+ "\n\nThank you!\n");
}

function init () {
  selectForm.addEventListener("submit", handleSubmit);
  
}

init();