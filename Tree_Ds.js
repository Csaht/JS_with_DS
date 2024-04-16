
 //Class For Node
  class Node{
     constructor(val){
	  this.value=val
	  this.left = null
	  this.right=null
	 }
  }
  
  
 //Class For Binary search Tree
  class Bstree{
  constructor(){
     this.root = null
    }
	
//Check tree is empty or Not 
	isTreeEmpty(){
	 return this.root === null
	}
	
// Make Basic Tree	
	makeTree(val){
	  let newNode= new Node(val);
	  if(this.root === null){
	  this.root = newNode
	  }else{ 
	  this.insertNode(this.root,newNode)
	  }
	}
	
	//Insert Node 
	insertNode(root,newNode){
	if (root.value > newNode.value ){
	     if(root.left === null){
		    root.left = newNode
		 }else{
		  this.insertNode(root.left,newNode)
		 }
	      
	   }else{
	    if(root.right === null){
		    root.right = newNode
		 }else{
		  this.insertNode(root.right,newNode)
		 }
	   }
	}
	
	
	//search the node
	bstSearch(root,val){
	 
	if(root === null){
	  return false
	}else if(root?.value === val){
	     return true
	}else if(root?.value > val){
	  return this.bstSearch(root?.left,val)
	}else{
	 return this.bstSearch(root?.right,val)
	}
	}
	
	//Tre traversing
	
	// (1)DFS & (2)BFS
	//Preorde,inorder,postorder(approchases)
	 preOrder(root){
	   //root-->left-->left-reverse--->right--right--------
	   if(root){
	   console.log(root.value)
	     this.preOrder(root.left)
		 this.preOrder(root.right)
		 ////OP 20,10,5,11,20,23,30,40
	   }
	 }
	 
	  inorder(root){
	  //left Most child --5,10,11,like first LMC-root-right then will go top
	   if(root){
	     this.inorder(root.left)
		 console.log(root.value)
		 this.inorder(root.right)
		 
		 //OP 5,10,11,20,23,30,40
	   }
	 }
	 
	   postOrder(root){
	  //LRT -5,11,10,23,30,40,20
	   if(root){
	     this.postOrder(root.left)
		 this.postOrder(root.right)
		 console.log(root.value)
		 //OP 5,10,11,20,23,30,40
	   }
	 }
	//(2)BFS
	bfsTraversing(root){
	console.log("this.root--",this.root)
	     let Q = []
	     Q.push(this.root)
		 while(Q.length){
		    let current =Q.shift()
			if(current.left){
			Q.push(current.left)
			}
			if(current.right){
			Q.push(current.right)
			}
			
			 console.log(current.value)
		 }
	//OP 20,10,30,5,11,23,40	
	}
	
	//Find min and max node
	//logic  left Most node and right Most node
	
	findBstMinValue(root){
	   if(!root.left){
	   return root.value}
	   else{
	    return  this.findBstMinValue(root.left)
	   }
	  // OP  5
	}
	
	findBstMaxValue(root){
	if (!root.right){
	return root.value
	}else{
	 return this.findBstMaxValue(root.right) 
	}
	}
	
	// delete node from the tree
	removeData(val){
	this.root=this.deletenode(this.root,val)
	}
	
	deletenode(root,val){
	if(root ===null){return};
	if(val < root.value){
	root.left =this.deletenode(root.left,val)
	}else if(val > root.value){
	  root.right =this.deletenode(root.right,val)
	}else{
	  if(!root.left && !root.right){
	    return null
	  }else if(!root.left){
	  return root.right
	  }else if(!root.right){
	  return root.left
	  }
	  root.value=this.findBstMinValue(root.right)
	  root.right=this.deletenode(root.right,root.value)
	}
	return root
	
	
	}
	
  }
 let bst=new  Bstree()
 bst.makeTree(20)
 bst.makeTree(10)
 bst.makeTree(5)
 bst.makeTree(11)
 bst.makeTree(30)
 bst.makeTree(40)
 bst.makeTree(23)
 
 
 //BST Searching
console.log(bst.bstSearch(bst.root,5))
 
 //traversing  DFS
 //bst.preOrder(bst.root)
 //bst.inorder(bst.root)
 //bst.postOrder(bst.root)
 
 //traversing  BFS
 //console.log(bst.bfsTraversing(bst.root))
 
 //find Min value
//console.log(bst.findBstMinValue(bst.root))

 //find Max value
//console.log(bst.findBstMaxValue(bst.root))

 bst.removeData(5)
 console.log(bst.bfsTraversing(bst.root))
 console.warn(bst)

