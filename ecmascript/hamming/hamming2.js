class Hamming {
  compute(a, b) {
    let difference = [];
    let tmpA=a.split("");
    let tmpB=b.split("");
    tmpA.forEach((e, i) => {
      if(tmpA.length !== tmpB.length){
        throw new Error('DNA strands must be of equal length.');
      }
      if(tmpA[i] !== tmpB[i]) {
         difference.push(tmpA[i]);
      }
    })
    return difference.length;
}
}

export default Hamming;

