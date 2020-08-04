// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

/*
let dayToday = new Date();
let dayWeek = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let dayText = dayToday.getDay();
let weekDay = dayWeek[dayText];
let hourDay = dayToday.getHours();
let minuteDay = dayToday.getMinutes();
let secondsDay = dayToday.getSeconds();
console.log(`Today is ${weekDay}\n Current time is: ${hourDay}:${minuteDay}:${secondsDay}`);
*/

// 2. Write a JavaScript program to print the contents of the current window.  
/*
const windowPrint = () => {
    return window.print();
}

console.log(windowPrint());
*/

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
/*
let todayDate = new Date();
const month = todayDate.getMonth();
const dayToday = todayDate.getDay();
const yearToday = todayDate.getFullYear();
console.log(`${month}-${dayToday}-${yearToday}`);
console.log(`${month}/${dayToday}/${yearToday}`);
*/

// // 4. Write a JavaScript program to find the area of a triangle where 
// lengths of the three of its sides are 5, 6, 7.
/*
const triangleArea = (base, height) => {
    return base * height / 2
}
console.log(triangleArea(5,6));
*/

// 5. Write a JavaScript program to determine 
// whether a given year is a leap year in the Gregorian calendar. 
/*
-Saber si año es biciesto
-calcular año entrada
-ver mes de febrero
-preguntar si tiene 28 dias 
- si tiene 28 decir qeu es biciesto sino no 
-retornar valor
*/
/*
const askYear = prompt('Please Enter Year to know if its Leap: ');

function daysInMonth (month, askYear) { 
     const resultAnswer = new Date(askYear, month, 0).getDate();

      if(resultAnswer <= 28) {
          alert(`${askYear} is Leap Year!!`)
      } else {
          alert(`${askYear} is Not a Leap Year!!`)
      }
    
    return resultAnswer;
} 

daysInMonth(2, askYear);

*/

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

for( year = 2014; year <= 2050; year++) {
    let day = new Date(year, 0, 1);
    if (day.getDay() === 0) {
        console.log('YEAH ' + year)
    }
}
