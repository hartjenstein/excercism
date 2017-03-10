//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Gigasecond {

  /*  constructor (date) {
        this.date1 = date 
    }*/

    date(date1) {
       /* let date1 = new Date();
        date1.setUTCHours(0,0,0,0);
       const timeD = Math.abs(date2.getTime() - date1.getTime());
       const diffDays = Math.ceil(timeD / (1000 * 3600 * 24)); 
        return diffDays;    
    }*/
    date1 = new Date();  
     date1.setUTCHours(0,0,0,0);   
        const milliSeconds = Math.pow(date1.getMilliseconds(),10);
        date1 = date1 + milliSeconds;
    }
}

export default Gigasecond;
