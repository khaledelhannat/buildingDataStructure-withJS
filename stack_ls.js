class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.bottom == null) {
      this.bottom = newNode;
      this.top = newNode;
      this.length++;
      return this;

    } else {
      // const topHolder = this.top;
      // this.top = newNode;
      // this.top.next = topHolder;
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
      return this;
    }

  }
  pop(){
    if (this.bottom == this.top || this.top == null) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      console.log(this);
      return this
    }else {
      this.top = this.top.next;
      this.length--;
      console.log(this);
      return this;
    }
  //isEmpty
  }

} 
const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.pop()
myStack.pop()
myStack.pop()

//Discord
//Udemy
//google