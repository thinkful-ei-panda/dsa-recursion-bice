
// What is the input to the program?
	// sheep=3;

// What is the output of the program?
	// 3: Another sheep jumps over the fence
	// 2: Another sheep jumps over the fence
	// 1: Another sheep jumps over the fence
	// All sheep jumped over the fence

// What is the input to each recursive call?
	// sheep

// What is the output of each recursive call?
	// count+1

const countSheep=sheep=>{
	console.log(sheep)
	
	if(sheep>1&&sheep!==0){console.log('Another sheep jumps over the fence');}
	
	else{console.log('All sheep jumped over the fence');}

	return (sheep>1) ? countSheep(sheep-1) : sheep; 
}

countSheep(6)

//debugger