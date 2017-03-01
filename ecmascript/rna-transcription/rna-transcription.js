class Transcriptor {
    toRna(str) {
        let chars = [ ...str ] // [ "f", "o", "o" ]
    	let transcript = "";
        let rna = new Map()
            rna.set('C', 'G');
            rna.set('G', 'C');
            rna.set('T', 'A');
            rna.set('A', 'U');
        chars.forEach((currentValue) => {
            console.log('get: ',rna.get(currentValue))
            if(rna.get(currentValue) === undefined){
                throw new Error('Invalid input DNA.')
            } else {
            transcript = transcript + rna.get(currentValue);
            }
        })
        return transcript;
    }
}


export default Transcriptor;