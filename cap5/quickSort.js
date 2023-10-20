function partition(vet, inicio, fim){
    let pivo = vet[inicio];
    let i = inicio;
    for(let j = inicio + 1; j <= fim; j++){
        if(vet[j] <= pivo){
            i++;
            let aux = vet[i];
            vet[i] = vet[j];
            vet[j] = aux;
        }
    }
    aux = vet[i];
    vet[i] = vet[inicio];
    vet[inicio] = aux;

    return i;
}

function quickSort(vet, inicio, fim){
    if(inicio < fim){
        let pivot = partition(vet, inicio, fim);
        quickSort(vet, inicio, pivot - 1);
        quickSort(vet, pivot + 1, fim);
    }
}


function list(vet){
    for(let value of vet){
        console.log(value);
    }
    console.log("\n\n");
}

let vet = [50, 40, 22, 10, 66, 63, 33];

list(vet);
quickSort(vet,0, vet.length-1);
list(vet);

