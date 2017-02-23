//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Hamming {
  compute(a, b) {
    let difference = [];
    let tmpA=a.split("");
    let tmpB=b.split("");
  
    console.log('tmpA: ', tmpA);
    console.log('tmpB: ', tmpB);
    
    tmpA.forEach((e, i) => {
      console.log('i: ', i);
      if(tmpA.length !== tmpB.length){
        throw new Error('DNA strands must be of equal length.');
      }
      if(tmpA[i] !== tmpB[i]) {
         difference.push(tmpA[i]);
         console.log('difference array: ', difference);
         console.log(difference.length);
      }
    })
    return difference.length;
}
};

export default Hamming;

