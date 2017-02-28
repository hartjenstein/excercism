class Transscriptor {
    constructor(){}
    toRna(str) {
    		let transscript = "";
        let rna = new Map()
        rna.set('C', 'G');
        rna.set('G', 'C');
        rna.set('T', 'A');
        rna.set('A', 'U');
        let chars = [ ...str ] // [ "f", "o", "o" ]
        chars.forEach((currentValue) => {
            console.log('get: ',rna.get(currentValue))
            transscript = rna.get(currentValue)
        })
        return transscript;
    }
}


export default Transscriptor;