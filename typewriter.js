let sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    
    if (i === sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write('\n'); 
      }, 50); 
    }
  }, i * 50); 
}