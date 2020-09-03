const fibonacci=(n,arr)=>{
	if(typeof arr==='undefined'){
		arr=[0,1];
	}
	if(arr.length!==n){
		x=arr.length;
		y=arr.length+x-1;
		arr.push(y);
		fibonacci(n,arr)
	}
	else{
		console.log(arr);
	}
}

fibonacci(100);

debugger