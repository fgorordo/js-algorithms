function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let numberToCompare = i - 1;

        while(numberToCompare >= 0 && arr[numberToCompare] > numberToInsert) {
            arr[numberToCompare + 1] = arr[numberToCompare]
            numberToCompare = numberToCompare - 1;
        }

        arr[numberToCompare + 1] = numberToInsert;
    }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr) // [-6, -2, 4, 8, 20]
console.log(arr)