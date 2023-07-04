class Stack {
  constructor(){
    this.array = [];

  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    console.log(this);
    return this;
    
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