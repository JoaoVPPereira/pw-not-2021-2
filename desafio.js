let vet = []
let start = 0
let step = 1

function range(start, stop, step) {
    if(start > stop) {
        console.log(vet)
    }
    else {
        vet[0] = start
        for(let i = 1; i = stop; i++) {
            vet[i] = vet[i] + step
            console.log(vet)
        }
    }
}

console.log(range(5, 21, 2))