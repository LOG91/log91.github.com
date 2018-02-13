// 베이스볼 게임

// 현재 컴퓨터 숫자를 담아둘 객체 (전역변수를 쓸 수 없다고 하여 일단은 제가 아는 선에서 이렇게 했습니다..)
let game = { ball: null, victory: false };

// 페이지가 로드될 때에 새 게임 생성
window.onload = function() {
        newGame();
    }
    // 새 게임 생성
document.getElementById('newGame').onclick = function() {
    newGame();
    alert('숫자가 새로 세팅되었습니다 .');
}

// 내 숫자를 입력
document.getElementById('playBall').onclick = function() {
    let myNum = document.getElementById('myNum').value;
    playGame(myNum);
    alert(playGame(myNum));
}

// 승리 조건 달성
function victory() {
    const img = document.querySelector('img');
    img.src = 'image/victory.png';
    img.style.width = '500px';
    img.style.height = '200px';
    document.getElementById('input').style.visibility = 'hidden';
    game.victory = true;
}

// 새 게임 생성 함수
function newGame() {
    if (game.victory === true) location.reload();
    let check = true;
    let num = 0;
    while (check) { // 컴퓨터의 숫자 자릿수에 중복을 없게하는 while문
        num = Math.floor(Math.random() * (899) + 100);
        if (!(isOverlap(num))) check = false;
    }
    game.ball = num;
    console.log('컴퓨터 : ' + num);
    return num;
}

// 플레이 게임
function playGame(myNum) {
    const COM_NUM = game.ball.toString();
    myNum = parseInt(myNum);
    if (!isRange(myNum)) return '세 자리 수를 입력해야 합니다';
    if (isOverlap(myNum)) return '중복되는 숫자가 없게 다시 입력해주세요'
    let result = throwBall(COM_NUM, myNum);
    if (result.strike === 3) {
        victory();
        return `3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }

    return (result.strike === 0 && result.ball === 0) ? 'Nothing' : `strike : ${result.strike}\nball : ${result.ball}`

}

// 숫자가 세 자리 정수인지 체크
function isRange(num) {
    return num >= 100 && num <= 999;
}

// 중복되는 숫자 있는지 체크
function isOverlap(num) {
    num = num.toString().split('');
    var tested = new Set();
    tested = num.reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    return num.length !== tested.length;
}

// 컴퓨터 숫자와 내 숫자 비교한 후 스트라이크, 볼 리턴
function throwBall(comNum, myNum) {
    myNum = myNum.toString().split('');
    comNum = comNum.split('');
    let strike = strikeCheck(comNum, myNum);
    let ball = checkBall(comNum, myNum);
    return {
        strike: strike,
        ball: ball
    };
}

// 볼 개수 측정
function checkBall(comNum, myNum) {
    let ball = 0;
    myNum.map(function(obj, index) {
        for (let i = 0; i < comNum.length; i++) {
            if (obj === comNum[i] && i !== myNum.indexOf(obj)) ball++;
        }
    })
    return ball;
}

// 스트라이크 개수 측정
function strikeCheck(comNum, myNum) {
    let strike = 0;
    myNum.map(function(obj, index) {
        if (obj === comNum[index]) strike++;
    })

    comNum.map
    return strike;
}