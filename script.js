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
    const resultText=fortunes[(randomNumber)];

    result.textContent=fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
        result.style.color="red";
    }else if(resultText.includes(中吉)){
        result.style.color="pink"
    }else {
        result.style.color="gray"
    }
});