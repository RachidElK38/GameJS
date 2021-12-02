var x = Math.floor(Math.random() * 100 + 1);
var remaining = document.getElementById("tmp");
var result = document.getElementById("result");
var attemp = 10;/* Les tentatives */
var guess = 1;
document.getElementById("btn_check").addEventListener('click',function(){
    var y = document.getElementById("txt");
    if(x==y.value)
    {
        (guess<=2) ? result.innerHTML ="Well done, you are a Genius !!!" : result.innerHTML ="Congratulations, you won after "+ guess +" attempts";
        
    }
    else if(x>y.value){
        guess++;
        result.innerHTML ="Smaller";
        attemp--;
    }
    else
    {
        guess++;
        result.innerHTML ="Greater";    
        attemp--;
    }
    if(attemp==0){
        result.innerHTML ="It's missed !";
        attemp=10;
    } 
    remaining.innerHTML = attemp;
    }
)

