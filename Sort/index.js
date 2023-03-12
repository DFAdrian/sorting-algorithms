const createBtn = document.getElementById('createBtn')
const sortBtn = document.getElementById('sortBtn')
const insertBtn = document.getElementById('insertBtn')

class Node{
  constructor(value,next=null,prev=null){
    this.value = value;
    this.next = next;
    this.prev =prev;
  } 
}

class DoubleLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode
    }else{
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
    this.length++;
  }

//   check(cb){
//     let currentNode = this.head;
//     while(currentNode !== null){
//       cb(currentNode)
//       currentNode = currentNode.next
//     }
//   }

  traverse(el){
    let currentNode = this.head;
    el.textContent=''
    while(currentNode !== null){
        el.textContent += `${currentNode.value} `
        currentNode = currentNode.next
    }
  }



  sort(){
    if (this.length < 2) return; // no ordenar
    let currentNode = this.head.next; // empieza en el segundo nodo
    while (currentNode !== null) {
      let temp = currentNode.value;
      let prevNode = currentNode.prev;
      while (prevNode !== null && prevNode.value > temp) {
        prevNode.next.value = prevNode.value; // moveer el valor mas grande
        prevNode = prevNode.prev;
      }
      
      if (prevNode === null) { // el current node es la nueva cabeza
        this.head.value = temp;
      } else { 
        prevNode.next.value = temp;
      }
      currentNode = currentNode.next;
    }
  }
}

// const print = (node) => console.log(node.value)

const list = new DoubleLinkedList()


// create random strings 
function randomStr(){
  for (let i = 0; i < 20; i++) {
    const randomString = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    list.append(randomString);
  }
  list.traverse(document.querySelector('#unsorted'))
} 


// create strings and display in table

createBtn.addEventListener('click',randomStr)

// sort 

sortBtn.addEventListener('click',()=>{
  list.sort()
  list.traverse(document.querySelector('#sorted1'))
})


// insert value in list

insertBtn.addEventListener('click',()=>{
  let inp = document.querySelector('input')
  if (inp.value !== '') {
    let value = inp.value;
    list.append(value);
    // sort again after insert value 
    list.sort()
    list.traverse(document.querySelector('#sorted2'))
    inp.value =''
  } else {
    alert('empty input');
  }
})



// bubble sort 

// let numbers = [5,4,3,2,1]

// function swap(arr){
//   let hold;
//   let newArr = [...arr]
//   for(let h = 0;h<newArr.length;h++){
//     for(let i = 0;i<newArr.length-1;i++){
//       if(newArr[i] > newArr[i+1]){
//         hold = newArr[i]
//         newArr[i] = newArr[i+1]
//         newArr[i+1] = hold
//     }
//   }
//   }
//   return newArr
// }
// console.log(numbers)
// console.log(swap(numbers))
// console.log(numbers)


///insertion sort

// function insertionSort(arr){
//   for(let i = 1;i<arr.length;i++){
//     let temp = arr[i]
//     let j;
//     for(j = i-1;i>=0 && arr[j] > temp;j--){
//       arr[j+1] = arr[j]
//     }
//     arr[j+1]= temp
//   }
//   return arr
// }

// console.log(insertionSort(numbers))
