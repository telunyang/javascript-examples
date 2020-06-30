//建立陣列，裡面有自定義的字庫
let words = ["javascript", "goodjob", "hello"];

//隨機取得字庫當中的字串
let word = words[ Math.floor( Math.random() * words.length ) ];

//放置答案用的陣列
let arrAns = [];

//建立跟字串同長度的數量之底線，待使用者猜出字母後，顯示在陣列元素中
for(let i = 0; i < word.length; i++){
    arrAns[i] = '_';
}

//將字串的長度作為計數的依據，猜對字就遞減，全猜出來，變數值為 0
let countRemainingLetters = word.length;

//使用 while 特性，無限次判斷剩餘字數，當全猜出來的時候，結束 while
while(countRemainingLetters > 0){
    //顯示玩家目前的進度
    alert( arrAns.join(" ") );

    let yourLetter = prompt("輸入 1 個 a - z 之間的字母，或是按下 取消 離開遊戲");

    //若是使用者按下取消，此時 guess 變數為 null，便用 break 跳出 while 迴圈
    if(yourLetter === null){
        document.write(`你已離開遊戲；請重新整理頁面。`);
    };

    //若只輸入超過 1 個以上的字，則提醒玩家；輸入正常，則進行
    if( yourLetter.length !== 1 ){
        alert("請輸入 1 個 a - z 之間的字母，母湯黑白來");
    } else {
        //逐一比對輸入的定母，有沒有存在隨機選出的字串中
        for(let j = 0; j < word.length; j++){
            //判斷輸入的字母，有沒有在字串索引中
            if(word[j] === yourLetter){
                //若是猜到文字，且放置答案的陣列索引對應的值，是底線，則改成正確字母
                if( arrAns[j] === '_' ){
                    //猜到文字，將放置底線的陣列索引代表的值，改成真正位置的字母
                    arrAns[j] = yourLetter;

                    //猜中就遞減，讓 while 判斷剩餘未猜中的字有多少個
                    countRemainingLetters--;
                } else {
                    //若是猜到文字，但放置答案的陣列索引對應的值，已經不是底線，代表已經猜過
                    alert("你猜過了!!");
                    break;
                }
            }
        }
    }
}

//若是剩餘計數值為 0，代表你都猜出來了，則在網頁上顯示正確答案
if(countRemainingLetters === 0){
    document.write(`恭喜你答對了！正確答案: ${word}`);
}

