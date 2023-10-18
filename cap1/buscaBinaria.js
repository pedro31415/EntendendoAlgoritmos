function buscaBinaria(list, key){
    let inicio = 0;
    let fim = list.length - 1;

    while(inicio <= fim){
        let meio = Math.floor((inicio+fim)/2);
        let value = list[meio];

        if(value === key){
            return meio;
        } else if(value > key){
            fim = meio - 1;
        }else {
            inicio = meio + 1;
        }
    }

    return -1;
}

const vet = [1,3,4,7,8,9];

console.log(buscaBinaria(vet,4)); // 2
console.log(buscaBinaria(vet,10)); // -1