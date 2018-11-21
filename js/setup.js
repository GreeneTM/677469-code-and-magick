var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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
