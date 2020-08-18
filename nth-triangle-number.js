const nthTriangleNumber1=n=>{
	return n*(n+1)/2;
}

const nthTriangleNumber2=n=>{
	if(n<=1){
		return n;
	} 
	else{
	  return n+nthTriangleNumber2(n-1);
	}
}

debugger