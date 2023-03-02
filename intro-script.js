//вывод четных чисел от 2 до 10
for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log (i);
	}
}
//адаптация кода под цикл while
i = 0;
while (i < 3) {
	console.log( `number ${i}!` )
	i++;
}

/*исходная функция
function ask(question, answer, yes, no) {
		  question();
		  if (answer) yes()
		  else no();
		}

		ask(
		  function() { console.log("Вы согласны?"); },
		  true,
		  function() { console.log("Вы согласились."); },
		  function() { console.log("Вы отказались."); }
		);
*/

/*Function Expression
let ask = function (question, answer, yes, no) {
	question();
	if (answer) yes()
	else no();
}

ask(
		  function() { console.log("Вы согласны?"); },
		  true,
		  function() { console.log("Вы согласились."); },
		  function() { console.log("Вы отказались."); }
		);
*/

/*Стрелочная функция
let ask = (question, answer, yes, no) => {
	question();
	if (answer) yes()
	else no();
	}

ask(
		  function() { console.log("Вы согласны?"); },
		  true,
		  function() { console.log("Вы согласились."); },
		  function() { console.log("Вы отказались."); }
		);
*/

/*Дать имена каллбек-функциям и передать их как каллбек через переменную описания*/


let questionCallback = function() { console.log("Вы согласны?"); },
	yesCallback = function() { console.log("Вы согласились."); },
	noCallback = function() { console.log("Вы отказались."); }

function ask(questionCallback, answer, yesCallback, noCallback) {
		  questionCallback ();
		  if (answer) yesCallback ()
		  else noCallback ();
		}
ask(questionCallback, true, yesCallback, noCallback);
ask(questionCallback, false, yesCallback, noCallback);



