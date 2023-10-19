function fatorial(x){
    if(x == 0)
        return 1;
    else
        return x*fatorial(x-1);
}

let valor = 6; // 720

console.log(fatorial(valor));