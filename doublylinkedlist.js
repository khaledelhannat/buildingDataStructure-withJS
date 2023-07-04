
// class Node {
// 	constructor(value) {
// 		this.valuel = value;
// 		this.next = null;
// 	}
// }


class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
			prev: null
		};
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		// console.log(this)
		return this;
	}

	prepend(value) {
		const newNode = {
			value: value,
			next: null,
			prev: null
		};
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		// console.log(this)
		return this 
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		let counter = 0;
		while(counter != this.length){
			array.push(currentNode.value);
			currentNode = currentNode.next;
			counter++;
		}
		console.log(array);
		return array;
	}

	insert(index, value) {
		if(index === 0) {
			return this.prepend(value)
		} else if(index >= this.length){
			return this.append(value)
		} else {
			const newNode = {
				value: value,
				next: null,
				prev: null
			};
			const leader = this.traverseToIndex(index-1);
			const follower = leader.next;
			follower.prev = newNode;
			newNode.next = follower;
			newNode.prev = leader;
			leader.next = newNode;
			this.length++;
			// console.log(this);
			return this;
		}
	}

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		if (index == 0) {
			const newHead = this.head.next;
			newHead.prev = this.head.prev;
			this.head = newHead;
			this.length--;
			return newHead
		} else if(index == this.length-1){
			const leader = this.traverseToIndex(index-1);
			const unwantedNode = leader.next;
			leader.next = unwantedNode.next;
			this.tail = leader;
			this.length--;
			return unwantedNode;
		} else {
			const leader = this.traverseToIndex(index-1);
			const unwantedNode = leader.next;
			const follower = unwantedNode.next;
			leader.next = follower;
			follower.prev = leader;
			this.length--;
			return unwantedNode;
		} 
	}
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 80);
myLinkedList.remove(2);
myLinkedList.remove(4);
myLinkedList.printList()
console.log(myLinkedList)