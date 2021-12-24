function toRanking() {
  // ランキング表示ボタンを非表示
  rankButton.style.display = "none";
  // メイン画面を非表示
  main.style.display = "none";
  // ランキングを表示
  ranking.style.display = "block";
  // データ取得
  checkRanking();
}

// 保存したデータの取得
function checkRanking() {
  // **********ランキングを表示しよう！**********
  let highScore = ncmb.DataStore("GameScore");
  // scoreの降順でデータ5件を取得するように設定する
  highScore.limit(5)
  .order("score", true)
  .fetchAll()
  .then(function(results){
    // 検索に成功した場合の処理
    console.log("検索に成功しました。");
    // テーブルにデータをセット
    setData(results);
  })
  .catch(function(error){
    // 検索に失敗した場合の処理
    console.log("検索に失敗しました。エラー:" +error);
  });
  // ******************************************************
}

// テーブルにデータを設定
function setData(scoreData) {

    // 名前の設定
    let table = document
    .getElementById("rankingTable");
    for(let i=0; i<scoreData.length; i++){
      table.rows[i].cells[1].innerHTML = scoreData[i].name;
    }

    // スコアの設定
    for(let i=0; i<scoreData.length; i++){
      table.rows[i].cells[2].innerHTML = scoreData[i].score;
    }
  }
function toMain() {
  // ランキング表示ボタンを表示
  rankButton.style.display = "block";
  // ゲーム画面を表示
  main.style.display = "block";

  // ランキングを非表示
  ranking.style.display = "none";

}


