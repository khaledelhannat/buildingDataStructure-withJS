class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }else {
            currentNode = currentNode.left;
          }
        }else {
           if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookup(value){
    if(!this.root) {
      console.log(false);
      return false;
    };

    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        currentNode = currentNode.right;
      }else if(value == currentNode.value){
        console.log(currentNode);
        return currentNode;
      }
    }
    console.log(false);
    return false;
  }
  
  // someting wrong with the my remove method  #####
  remove(value) {
    let currentNode = this.root;
    let parentNode = null;

    while(currentNode) {
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else if(value == currentNode.value){
        if(!currentNode.right){

          if(parentNode == null){
            this.root = currentNode.left
          }else {
            if (parentNode.value < currentNode.value){
              parentNode.left = currentNode.left;
            } else if(parentNode.value > currentNode.value){
              parentNode.right = currentNode.left;
            }

          }
        }else if(!currentNode.right.left){

          if(parentNode == null){
            currentNode.right.left = currentNode.left;
            this.root = currentNode.right;
          }else {
            if (parentNode.value < currentNode.value){
              parentNode.right = currentNode.right;
            } else if(parentNode.value > currentNode.value){
              parentNode.left = currentNode.right;
            }
          }
        }else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost !== null){
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;
          leftmostParent.left = null;

          if(parentNode == null){
            this.root = leftmost;
          }else {
            if (parentNode.value < currentNode.value){
              parentNode.right = leftmost;
            } else if(parentNode.value > currentNode.value){
              parentNode.left = leftmost;
            }

        }
    }
    
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
// tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.remove(20)
console.log(JSON.stringify(traverse(tree.root)))
// tree.lookup(3)


// console.log(tree);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

