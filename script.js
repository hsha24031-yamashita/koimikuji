const fortunes=[
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "吉　慎重に動こう",
    "凶　動かないほうがいいかも"
];

const button=document.getElementById("omikuji-bt")
const result=document.getElementById("result")


button.addEventListener("click",function(){

    const randomNumber=Math.floor(Math.random() * fortunes.length);

    result.textContent=fortunes[(randomNumber)];
});