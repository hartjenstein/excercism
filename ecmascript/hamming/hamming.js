class Hamming {
 	compute(a, b) {
    if(a.length !== b.length){
        throw new Error('DNA strands must be of equal length.');
    }
    let counter = 0;
    [...a].reduce((acc,x,i) => {
      if(x != b[i]) {
      counter++
      } 
    },0)
    return counter;
  }
}
export default Hamming;