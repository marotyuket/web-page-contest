let a = 0;
let box;
let tm;

window.onload = function() {
     box = document.getElementById("count");
     //タイマースタートと同時にタイマーを取得
     tm = setInterval("time()",1000);
}

function time() {
    //カウントアップ
     a += 1;
     //aの値を boxオブジェクトに表示
     box.innerHTML = a;
     if(a >= 100) {
         //タイマーを停止
          clearInterval(tm);
     }
     if (a % 15 === 0) {
         //15の倍数の時boxに数字、FizzBuzz、画像を入れる
        box.innerHTML = a + ' FizzBuzz' + '<br>' +  "<img src = 'まー.jpg' class='gazo3'>";
     } else if (a % 5 === 0) {
         //5の倍数の時boxに数字、Buzz、画像を入れる
        box.innerHTML = a + ' Buzz' + '<br>' +  "<img src = 'みー.jpg' class='gazo2'>";
     } else if (a % 3 === 0) {
         //3の倍数の時boxに数字、Fizz、画像を入れる
        box.innerHTML = a + ' Fizz' + '<br>' +  "<img src = 'くー.jpg' class='gazo1'>";
    }
}
