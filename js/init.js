// APIキーの設定
const APPLICATION_KEY = "7ef23266940636fe3bdf1a7d2f8ea3df363e6041819dd0454dce607075b2a77e";
const CLIENT_KEY = "faeea21af5a9c1705b0c83727a02fb7639ff937d72c11f7c3d4443f5a32fbeeb";

// タイマー設定
let countTimer = 13;
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById('countDown');
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");
// ランキング表示関連エレメント
const rankButton = document.getElementById("rankButton");
const ranking = document.getElementById("ranking");
