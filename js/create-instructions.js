'use strict';

window.createInstructionsPanel = (function() {
  return function(text) {
    var button = document.createElement('div');
    button.classList.add('button', 'button-casual', 'small');
    button.innerHTML = 'Оценить интерфейс';

    var action = document.createElement('div');
    action.classList.add('instructions-action');

    var link = document.createElement('a');
    link.href = 'https://kontur.typeform.com/to/c8t11a';
    link.target = '_blank';
    link.setAttribute('onclick', "yaCounter45458382.reachGoal('feedback-click'); return true;");
    link.appendChild(button);
    action.appendChild(link);


    var instruction = document.createElement('p');
    instruction.classList.add('instructions-text');
    instruction.innerHTML = text;

    var content = document.createElement('div');
    content.classList.add('instructions-content');
    content.appendChild(instruction);
    content.appendChild(action);

    var panel = document.createElement('div');
    panel.classList.add('instructions');
    panel.appendChild(content);


    return panel;
  }

})();
