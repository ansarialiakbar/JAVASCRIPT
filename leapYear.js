function leapYear(year){
      if(year%4 === 0){
          if(year%100 === 0){
               if(year%400 === 0){
                   return "Leap year"
               }
               else{
                return "Not a leap year"
               }
          }
          else{
            return "Leap year"
          }
      }
      else{
        return "Not a leap year"
      }
}
console.log(leapYear(2000));
console.log(leapYear(2100));