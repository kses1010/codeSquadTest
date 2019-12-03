# 신나는 야구게임

사용언어(JS)

## Step1

timePrint() :  시간딜레이로 Html에 출력하는 함수입니다. 

play(): player가 참여하는 함수로 야구카운트와 안타카운트를 실행합니다.

ballCounter(): 스트라이크, 볼, 안타, 아웃을 랜덤으로 생성, 기록하고 swingResult()를 호출합니다.  생성자속성 중 rs는 swingResult()값을 hit 는 count.hit로 안타갯수를 리턴합니다.

swingResult(): ballcounter에서 받은 호출값을 switch문으로 문자열을 res값에 추가하고,

printCount()에서 사용하는 count를 리턴합니다.

printCount(): swingResult에서 받은 count값을 출력을 리턴합니다.

gameOver(): ballCounter의 hit값의 출력을 리턴합니다.

init(): 작동함수입니다.



