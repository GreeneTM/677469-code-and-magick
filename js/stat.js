'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ блока тени
var COLUMN_SPACING = 50; // расстояние между колонками
var TEXT_HEIGHT = 20; // высота строки
var FOND_GAP = 20; // отступ текста
var BAR_WIDTH = 40; // ширина столбца
var FIRST_INDENT = 40; // Первый отступ
var MAX_HEIGHT = 150; // Максималная высота столбца
var LONG_ALLOWED = 16;
var LONG_COLOR = 7;

// функция отрисовки облочка
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
// функция нахождения максимального времени (getMaxElement)
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return Math.round(maxElement);
};
// функция случайного оттенка синего цвета
var randomColor = function () {
  var allowed = 'ABCDEF0123456789';
  var newColor = '#0000';

  while (newColor.length < LONG_COLOR) {
    newColor += allowed.charAt(Math.floor((Math.random() * LONG_ALLOWED) + 1));
  }
  return newColor;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);
  var reactStringX = CLOUD_X + FOND_GAP;
  var reactStringY = CLOUD_Y + GAP + TEXT_HEIGHT;

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', reactStringX, reactStringY);
  ctx.fillText('Список результатов:', reactStringX, reactStringY + TEXT_HEIGHT);

  for (var i = 0; i < names.length; i++) {
    var reactHeight = (MAX_HEIGHT * times[i]) / maxTime;
    var rectX = CLOUD_X + FIRST_INDENT + (BAR_WIDTH + COLUMN_SPACING) * i;
    var rectY = CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - reactHeight;
    var rectNameY = rectY - GAP;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], rectX, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), rectX, rectNameY);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor();
    }
    ctx.fillRect(rectX, rectY, BAR_WIDTH, reactHeight);
  }
};
