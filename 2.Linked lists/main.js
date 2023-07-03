class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//la valoarea 10 nodul arata asa:
// const nodeObj= {
//     value:10;
//     next:null;
// }

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //
  // const newListObj{
  // head: null;
  // size:0;
  //}

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      //noul nod il atasam la headul listei care initial  era null
      // noua lista arata asa:
      // head: {value:10, next:null};
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}
//daca e gol punem ce e in node in head, node fiind un obiect cu valoarea venita la prepend

const list = new LinkedList();
console.log("Is list empty? ", list.isEmpty());
console.log("List size ", list.getSize());
console.log("List content is: ", list);
list.prepend(10);
console.log("Is list empty? ", list.isEmpty());
console.log("List size ", list.getSize());
console.log("List content is: ", list);
list.prepend(20);
console.log("List content is: ", list);
list.prepend(30);
console.log("List content is: ", list);
