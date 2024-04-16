
class List{
	 constructor(data){
	 
	 //Initilize The head and tail of the  Node
		 this.head={
			 value:data,
			 next:null
		     }
		 this.tail=this.head
		 this.size=1 
	 }
	 
	  appendNode(nodeData){
		 let newNode = {
			    value:nodeData,
			    next:null
		    }
		  this.tail.next=newNode
		  this.tail=newNode
		  this.size +=1 
		 }
		 
      //Linked list Traversing
	     linkedListTraversing(){
		   let count = 0;
		   let currNode=this.head
		  while(count < this.size){
		   console.log("count--->",count)
		   console.log(currNode)
		   currNode=currNode.next;
		   count++
		   }
		 }
		 
		 
		 // Delete Node From Linkedlist
		 deleteNode(nodeNumber){
		   let count = 1
		   let leadNode= this.head;
		   if(nodeNumber === 1){
		      this.head =this.head.next;
		   }else {
		     while(count < nodeNumber-1)
	         leadNode = leadNode?.next
			 count +=1
		   }
		   let nextNode=leadNode.next.next
		   leadNode.next = nextNode
		 
		 }
		 
	 }
	 
let list = new List(200)
   list.appendNode(300)
  list.appendNode(400) 
  list.appendNode(500)
  list.appendNode(600)
  list.appendNode(700)
  list.linkedListTraversing()
  list.deleteNode(1)
  console.log(list)

