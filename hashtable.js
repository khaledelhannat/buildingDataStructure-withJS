class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) { // this hash function does not considered O(n) because it's too fast
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
  	let address = this._hash(key);
  	// add array in theis index of the bigest array
  	// add the hashtable item in this adress as a array
  	// to prevent collisions
  	this.data[address] = [];
  	this.data[address].push([key, value]);
  	// console.log(this.data); 
  	return this.data; // O(1)
  }

  get(key) {
  	let address = this._hash(key);
  	const currentBucket = this.data[address];
  	for(let i =0; i < currentBucket.length; i++){
  		if(currentBucket[i][0] === key){
  			// console.log(currentBucket[i][1]);
  			return currentBucket[i][1];
  		}
  	}
  	// console.log(undefined);
  	return undefined; // O(1)
  }

 	keys() { // O(n)
 		const keysArray = [];
 		for(let i = 0; i < this.data.length; i++){
 			if(this.data[i]) {
 				keysArray.push(this.data[i][0][0])
 			}
 		}
 		// console.log(keysArray.join());
 		return keysArray.join();
 	}

 	values() { // O(n)
 		const valuesArray = [];
 		for(let i = 0; i < this.data.length; i++){
 			if(this.data[i]) {
 				valuesArray.push(this.data[i][0][1])
 			}
 		}
 		// console.log(valuesArray.join());
 		return valuesArray.join();
 	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// console.log(myHashTable)
// myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.set('oranges', 2)
myHashTable.keys()



