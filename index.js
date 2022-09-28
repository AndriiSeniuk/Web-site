let doska = ""
for (let line = 0; line < 40; line += 5)    {
    for (let column = 0; column < 40; column += 5) {
        if ((line/5+column/5)&1)
            doska = doska + "_";
        else    
           doska = doska + "#";
    }
    doska = doska + "\n";   
}
console.log(doska)



let flag = 1;
while(flag<=100){
    if (flag%3==0){
        console.log("bus")
    }
    else {
        console.log(flag)
    }
    flag+=1
}
