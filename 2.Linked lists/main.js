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
let removedNode;
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

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value); //aici nu facem increase de increment pt ca se ocupa metoda prepend de asta
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    searchForFirst(value) {
        if (this.isEmpty()) {
            return -1;
            // return console.log(-1);
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty'); //daca lista e goala, printam 'List is empty"
        } else {
            //daca lista este !empty.
            //trebuie sa trecem prin lista de la primul nod pana la ultimul.
            //printand valoarea fiecarui nod.
            let curr = this.head;
            let listValues = '';
            //cream o variabila pentru a stora valorile nodurilor in lista
            while (curr) {
                //atata timp cat curr e trutty, punem valoarea in listValue
                listValues += `${curr.value} `;
                curr = curr.next; //aici curr va parcurge pana ce nodul e null
            }
            console.log(listValues);
        }
    }
}
//daca e gol punem ce e in node in head, node fiind un obiect cu valoarea venita la prepend

const list = new LinkedList();
console.log('Is list empty? ', list.isEmpty());
console.log('List size ', list.getSize());
console.log('List content is: ', list);
list.prepend(10);
console.log('Is list empty? ', list.isEmpty());
console.log('List size ', list.getSize());
console.log('List content is: ', list);
list.prepend(20);
console.log('List content is: ', list);
list.prepend(30);
console.log('List content is: ', list);
list.print();
list.print();
list.prepend(50);
list.print();
list.prepend('prepend');
list.print();
list.append('append');
list.print();
list.insert('insert', 3);
list.print();
list.removeFrom(4); //Sterge elementul de pe indexul dat
list.prepend(40);
list.prepend(40);
list.print();
list.removeValue(40);
list.removeValue(40); //Sterge primul element intalnit cu valoarea data
const test = list.removeValue(40);
console.log(test);
list.print();
const search = list.searchForFirst('append');
console.log(search);
list.print();
list.removeFrom(0);
list.removeFrom(0);
list.removeFrom(0);
list.removeFrom(0);
list.removeFrom(0);
list.removeFrom(0);
list.print();

list.searchForFirst(10);
