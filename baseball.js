const hitter1 = document.querySelector('.js-hitter1');
const baseballGame = document.querySelector('.js-baseball');

function timePrint () {
  setTimeout(function() {
    hitter1.innerText = "첫 번째 타자가 타석에 입장했습니다.\n\n";
  }, 500);
  setTimeout(function() {
    play();
  }, 1500);

}

function play() {
  let str1 = "";
  let player1 = ballCounter();
  str1 += player1.result;
  str1 += gameOver(player1.hit);
  baseballGame.innerText = str1;
}

function ballCounter() {
  let count = {strike: 0, ball: 0, out: 0, hit: 0};
  let rs = "";

  while (count.out != 3) {
    let random = Math.floor(Math.random() * 4);
    let call = "";

    if (random === 0) {
      call = "strike";
      ++count.strike;

      if (count.strike > 2) {
        count.strike = count.ball = 0;
        call = "out";
        ++count.out;
      }
    } 
    else if (random === 1) {
      call = "ball";
      ++count.ball;

      if (count.ball > 3) {
        count.strike = count.ball = 0;
        call = "hit";
        ++count.hit;
      }
    }
    else if (random === 2) {
      count.strike = count.ball = 0;
      call = "hit";
      ++count.hit;
    }
    else if (random === 3) {
      count.strike = count.ball = 0;
      call = "out";
      ++count.out;
    }
    rs += swingResult(call, count);
    
  }
  
  return {result: rs, hit: count.hit};

}

function swingResult (call, count) {
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
      res +=  "아웃!\n"; 
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
  return ("\n최종 안타수: " + hit + "\n\nGAME OVER\n");
}

function init() {
  timePrint();
}

init();