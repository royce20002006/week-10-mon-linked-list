class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let nn = new LinkedListNode(val);
    nn.next = this.head;
    this.head = nn;
    this.length++;
  }

  addToTail(val) {
    let nn = new LinkedListNode(val);
    if(!this.head) this.head = nn;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = nn;
      

    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
