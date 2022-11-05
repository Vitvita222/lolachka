let symbol = document.querySelector('.input3')

function mimateba() {
    var n1 , n2 , res;
    n1=Number(document.querySelector('.input1').value);
    n2=Number(document.querySelector('.input2').value);
    res=n1 + n2;
    document.querySelector('.jami1').value=res;
}

function gamokleba() {
    var n1 , n2 , res;
    n1=Number(document.querySelector('.input1-1').value);
    n2=Number(document.querySelector('.input2-1').value);
    res=n1 - n2;
    document.querySelector('.sxvaoba').value=res;
}


