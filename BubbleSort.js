
function BubbleSort(arr) {
  //make a nested for loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //check if index i > index j:
      if (arr[j] > arr[j + 1]) {
        //make a temporal variable and store the greater value
        let temp = arr[j];
        //swap the spot with the greater index value for the smaller value
        arr[j] = arr[j + 1];
        //set the greater index value where the smaller value was located
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}
