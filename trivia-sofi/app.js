// varianles para la introduccion al usuario//
var userName = prompt('¡Hola! Por favor, ingresa tu nombre')

if(userName.length == 0)
{
  userName = 'Usuario';
}

document.getElementById('user').textContent = 'Bienvenid@, ' + userName;

if (confirm(userName + ', estás list@ para jugar?')) {

} else {

  document.getElementById('cancel').textContent = '¡Jugaremos para la próxima!';
}


//checkeando las respuestas//
function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

  if (question1 == '4') {
    correct++;
    document.getElementById('question1Checked').style.background = '#DAF7A6';
  } else {
    document.getElementById('question1Checked').style.background = '#FFC0CB';

  }
  if (question2 == '18 años') {
    correct++;
    document.getElementById('question2Checked').style.background = '#DAF7A6'
  } else {
    document.getElementById('question2Checked').style.background = '#FFC0CB';

  }
  if (question3 == '6') {
    correct++;
    document.getElementById('question3Checked').style.background = '#DAF7A6'
  } else {
    document.getElementById('question3Checked').style.background = '#FFC0CB';

  }
  if (question4 == 'Javascript') {
    correct++;
    document.getElementById('question4Checked').style.background = '#DAF7A6'
  } else {
    document.getElementById('question4Checked').style.background = '#FFC0CB';
  }
  if (question5 == 'Código que transforma') {
    correct++;
    document.getElementById('question5Checked').style.background = '#DAF7A6'
  } else {
    document.getElementById('question5Checked').style.background = '#FFC0CB';
  }

  //Respuestas que van a mostrar los resultados//
  var messages = ['¡Impresionante!', '¡Buen trabajo!', '¡Bien!', 'Podrías mejorar', '¡Lo sentimos!', '¡Que lástima!'];
  var pictures = ['img/mindblown.gif', 'img/theforce.gif', 'img/nice.gif', 'img/justdoit.gif', 'img/sorry.gif', 'img/sad.gif'];
  //Puntaje de las respuestas//
  var score;
  if (correct == 0) {
    score = 5;
  }
  if (correct == 1) {
    score = 4
  }
  if (correct == 2) {
    score = 3
  }
  if (correct == 3) {
    score = 2
  }
  if (correct == 4) {
    score = 1
  }
  if (correct == 5) {
    score = 0
  }


  //visibilidad luego de que el usuario entregue las respuestas//
  document.getElementById('after_submit').style.visibility = 'visible';

  document.getElementById('messages').innerHTML = messages[score];
  document.getElementById('number_correct').innerHTML = 'Obtuviste ' + correct + ' respuestas correctas de 5.'
  document.getElementById('pictures').src = pictures[score];

}
