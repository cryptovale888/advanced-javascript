class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.unshift(element); // Adauga un element in stanga Array-ului (devine ID 0)
    }

    dequeue() {
        return this.items.pop(); // Scoate ultimul element din Array
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0];
        } 
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print();