let masterCounter=0;
const anagrams=(originalWord,tmpWord,possibilities,mainCount,count)=>{
	masterCounter++
	console.log(`\nmasterCounter=${masterCounter-1}\n`);
	// Initialize anagram possibilities array.
	if(possibilities===undefined){possibilities=[];}
	// Initialize mainCount.
	if(mainCount===undefined){mainCount=0;}
	// Initialize the count.
	if(count===undefined){count=0;}
	
	// Temporary catch to prevent infinite Lupin the 3rd.
	if(possibilities.length<24){

		// Recursion catch.
		if(originalWord!==tmpWord){
			// Initialize tmpWord.
			if(tmpWord===undefined){tmpWord=originalWord;}
			// Split the tmpWord into an array for processing.
			let letterArray=tmpWord.split('');
			// console.log(letterArray);

			// Meat and potatoes.
			// if(mainCount<1){
				if(count===0){
					console.log(`count=${count}`);
					// Splice letterArray[1] to letterArray[2]; 
					letterArray.splice(2,0,letterArray.splice(1,1).toString());
					// console.log(letterArray);
					
					tmpWord=letterArray.join('');
					console.log(tmpWord);
					
					possibilities.push(tmpWord);
					console.log('possibilities=');
					console.log(possibilities);
			
					
					anagrams(originalWord,tmpWord,possibilities,mainCount,count+1);
					// return
				}
				if(count===1){
					count++;
					console.log(`count=${count}`);
					// Splice letterArray[2] to letterArray[3]; 
					letterArray.splice(3,0,letterArray.splice(2,1).toString());
					// console.log(letterArray);
					
					tmpWord=letterArray.join('');
					console.log(tmpWord);
					
					possibilities.push(tmpWord);
					console.log('possibilities=');
					console.log(possibilities);
			
					
					// anagrams(originalWord,tmpWord,possibilities,mainCount,count-1);
					// return;
				}
				// if(count===2){
				// 	if(tmpWord!==originalWord){
				// 		console.log(`tmpWord=${tmpWord}`)
				// 		console.log(`originalWord=${originalWord}`)
				// 		count=0;
				// 		anagrams(originalWord,tmpWord,possibilities,mainCount,count);
				// 	}
				// }
			// }

			// Where the reset takes place.
			// if(mainCount>3){
			// 	// Shift tmpWord[0] to the end of the array.
			// 	mainCount=0;
			// 	count=0;
			// 	anagrams(originalWord,tmpWord,possibilities,mainCount,count);
			// }
			
		
		}
	}
}

anagrams('east');
// console.log()