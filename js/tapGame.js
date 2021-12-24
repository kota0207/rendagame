// NCMBの初期化
let ncmb = new NCMB(APPLICATION_KEY, CLIENT_KEY);
ranking.style.display = "none";

// 「Start」ボタン押下時の処理
function startGame() {
  // ボタンの非表示
  startButton.style.display = "none";
  // タップカウンターリセット
  counter = 0;
  let score = document.getElementById('score');
  score.textContent = "0";

  // タイマーリセット(カウントダウン＋10秒)
  countTimer = 13;
  // タイマーを起動
  countTime(countTimer);
}

// データの保存
function saveScore (name, score) {
  // **********名前とスコアを保存しよう！**********
  // 保存先を作成
  let GameScore = ncmb.DataStore("GameScore");
  let gameScore = new GameScore();

  // 値を設定
  gameScore.set("name", name);
  gameScore.set("score", score);

  // データストアに保存
  gameScore.save()
  .then(function (){
    // 保存に成功した場合の処理
    console.log("保存に成功しました。");
  })
  .catch(function (error){
    // 保存に失敗した場合の処理
    console.log("保存に失敗しました。エラー:" + error);
  });
  // ********************************************************
}

// タイマー処理
function countTime(time) {
  if (time > 0){
    if (time >= 11) {
      tapFlag = false;
      countDown.textContent = time-10;
    } else if (time == 10) {
      tapFlag = true;
      countDown.textContent = "スタート！";
    } else {
      tapFlag = true;
      countDown.textContent = time;
    }
    countTimer -= 1;
    // １秒後にcountTime()を呼び出す
    setTimeout("countTime(countTimer)",1000);
  } else {
    tapFlag = false;
    countDown.textContent = "タイムアップ！";
    imputName(counter);
    // ボタンの表示
    startButton.style.display = "block";
  }
}

// 名前入力処理
function imputName(count){
  // 入力プロンプトを表示
  let name = window.prompt("名前を入力してください", "");
  if (name == null || name == "") {
    countDown.textContent = "保存がキャンセルされました";
  } else {
    // スコアと名前の保存と表示
    saveScore(name, count);
    countDown.textContent = name + "さんのスコアは" + count + "連打でした";
  }
}

// タップ数カウント
function tapCount() {
  if (tapFlag) {
    counter += 1;
    score.textContent = counter;
  }
}
