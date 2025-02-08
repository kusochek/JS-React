// numOrStr = prompt('Put any value!');

// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log('number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

// console.log(numOrStr && !!numOrStr.trim());
// console.log(numOrStr, !!numOrStr?.trim());

// switch (numOrStr && numOrStr.trim() && !!isNaN(+numOrStr)) {
//   case null: 
//     console.log('ви скасували')
//     break;
//   case '':
//     console.log('Empty String');
//     break;
//   case true:
//     console.log('number is Ba_NaN')
//     break;
//   default:
//     console.log('OK!');
// }


// city = prompt('City?');

// value = true || 'String' || 10;

// if (city === 'Kyiv') {
//   console.log(`${city} is the capital of Ukraine`);
// } else if (city === 'London') {
//   console.log(`${city} is the capital of London`);
// } else if (city === 'Rome') {
//   console.log(`${city} is the capital of Italy`);
// } else {
//   console.log(`You live in ${city}. But I don't know....`);  
// }


// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)

// firstTask = prompt('How much will 2+2?');
// secondTask = prompt('The sun rises in the east?');
// thirdTask = prompt('How much will 5 / 0 be?');
// fourthTask = prompt('What color is the sky?');
// fifthTask = prompt('What is the correct answer to the ultimate question of life, the universe and all that.');

// firstCorrectAnswer = '4';
// secondCorrectAnswer = 'yes';
// thirdCorrectAnswer = 'Infinite';
// fourthCorrectAnswer = 'blue';
// fifthCorrectAnswer = '42';

// totalScore = 0;
// maxTotalScore = 50;

// if (firstTask.toString() === firstCorrectAnswer) {
//   // totalScore = totalScore + 10; // OLD
//   totalScore += 10; // NEW
// }

// if (secondTask.toLowerCase().trim() === secondCorrectAnswer) {
//   totalScore += 10;
// }

// if (thirdTask.toLowerCase().trim() === thirdCorrectAnswer) {
//   totalScore += 10;
// }

// if (fourthTask.toLowerCase().trim() === fourthCorrectAnswer) {
//   totalScore += 10;
// }

// if (fifthTask.toString() === fifthCorrectAnswer) {
//   totalScore += 10;
// }

// console.log(`Quiz finished. Total score: ${totalScore}/${maxTotalScore}`);



// Тернарний оператор 

// dishes = prompt('What would you want to eat today?');

// if (dishes.toLowerCase().trim() === 'beer') {
//   console.log('1L of IPA beer');
// } else if (dishes === 'Kotleta po Kyivski') {
//   console.log('Kotleta po Kyivski');
// } else {
//   console.log('water');
// }

// dishes.toLowerCase().trim() === 'beer' 
//   ? console.log('1L of IPA beer') 
//   : console.log('Kotleta po Kyivski')
//   ? dishes === 'Kotleta po Kyivski'
//   : console.log('water');

// paymentType = prompt('How would you like to pay?');

// type = paymentType === 'card' ? 'You gonna pay by card' : 'You gonna pay by cash';
// console.log(type);



// while, do/while()
// how old are you
// infinite loop

// debugger;
// index = 0;

// while (index < 10) {
//   console.log(`${index} * 1 = ${index * 1}`);
//   index++;
// }

// do {
//   console.log(`${index} * 1 = ${index * 1}`);
//   index++;
// } while (index < 10);


do {
  userAge = prompt('How old are you?');
  
  if (!userAge || isNaN(+userAge) || !+userAge) {
    console.log('Please put correct age!');
    continue;
  }

  
  if (userAge < 18) {
    console.log(`You are ${userAge} years old. You too young!`);
  } else if (userAge >= 18 && userAge < 65) {
    console.log(`You are ${userAge} years old. Access is OK!`);
  } else {
    console.log(`You are ${userAge} years old. You have a lot of experience!`);
  }
} while (!userAge || isNaN(+userAge) || !+userAge); 

// userAge === '' || userAge === null || useAge === 0




// email === null || email === "" || email === 0


