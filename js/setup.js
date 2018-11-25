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

var randomElementFromArray = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var NUMBER_OF_OBJECTS = 4;

var generatesAnArray = function () {
  var object = [];
  for (var i = 0; i < NUMBER_OF_OBJECTS; i++) {
    object[i] = {
      name: randomElementFromArray(wizardName),
      surname: randomElementFromArray(wizardSurname),
      coatColor: randomElementFromArray(wizardCoatColor),
      eyesColor: randomElementFromArray(wizardEyesColor)
    };
  }
  return object;
};

var wizards = generatesAnArray();

for (var i = 0; i < wizards.length; i++) {
  var WizardsIndex = wizards[i];
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WizardsIndex.name + ' ' + WizardsIndex.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = WizardsIndex.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WizardsIndex.eyesColor;
  similarListElement.appendChild(wizardElement);
}
