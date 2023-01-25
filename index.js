let array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, el1){
  return array.filter((el2) => {
    return el2 !== el1;
  })
};

console.log(removeElement(array, 5));