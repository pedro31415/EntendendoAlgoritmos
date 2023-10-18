function selectionSort(vet){
    let aux;
    for(let i = 0; i < vet.length - 1; i++){
        for(let j = i+1; j < vet.length; j++){
            if(vet[j] < vet[i]){
                aux = vet[j];
                vet[j] = vet[i];
                vet[i] = aux;
            }
        }
    }
}

function list(vet){
    for(let i = 0; i < vet.length; i++){
        console.log(vet[i]);
    }
    console.log("\n\n"); 
}


const vet = [30,60,2,13,45,6];
list(vet);
selectionSort(vet);
list(vet);