'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomSelections = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var wizards = [
  {
    name: randomSelections(WIZARD_NAME),
    surname: randomSelections(WIZARD_SURNAME),
    coatColor: randomSelections(WIZARD_COAT_COLOR),
    eyesColor: randomSelections(WIZARD_EYES_COLOR)
  },
  {
    name: randomSelections(WIZARD_NAME),
    surname: randomSelections(WIZARD_SURNAME),
    coatColor: randomSelections(WIZARD_COAT_COLOR),
    eyesColor: randomSelections(WIZARD_EYES_COLOR)
  },
  {
    name: randomSelections(WIZARD_NAME),
    surname: randomSelections(WIZARD_SURNAME),
    coatColor: randomSelections(WIZARD_COAT_COLOR),
    eyesColor: randomSelections(WIZARD_EYES_COLOR)
  },
  {
    name: randomSelections(WIZARD_NAME),
    surname: randomSelections(WIZARD_SURNAME),
    coatColor: randomSelections(WIZARD_COAT_COLOR),
    eyesColor: randomSelections(WIZARD_EYES_COLOR)
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
