

const txt = document.querySelector(".txtclick")
const btn = document.querySelector(".btn")
const btnAll = document.querySelectorAll(".btn-all button")
console.log(btnAll)

const lotto = []
let scr = 0;

function reset(){
  // while 반복
  while(lotto.length>0){
    // pop 뒤에 하나를 제거
    lotto.pop()
  }

  for(let i=0; i<1; i++){
    let num = Math.floor(Math.random() * 45) +1;
    
    for(let j in lotto){
      if(num === lotto[j]) {
        num = Math.floor(Math.random() * 45) +1
      }
    }
    lotto.push(num);
    lotto.sort(function(a, b){
      return a - b;
    });
  }
  
}


btn.addEventListener("click", function(){
  reset();
  txt.innerHTML = "";
  lotto.forEach(function(item){
    txt.innerHTML += `<li>${item}</li>`;
  });
})

btnAll.forEach(function(item){
  item.addEventListener("click", function(){
      reset();
      txt.innerHTML = "";
      lotto.forEach(function(item){
      txt.innerHTML += `<li>${item}</li>`;
    });
  })
})




