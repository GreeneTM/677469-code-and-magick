var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ блока тени
var COLUMN_SPACING = 50; //расстояние между колонками
var TEXT_HEIGHT = 20; //высота строки
var FOND_GAP = 20; // отступ текста
var BAR_WIDTH = 40; // ширина столбца
var FIRST_INDENT = 40; // Первый отступ
var MAX_HEIGHT = 150; // Максималная высота столбца
// функция отрисовки облочка
var renderCloud = function (ctx, x, y, color,) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
// функция нахождения максимального времени (getMaxElement)
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  return Math.round(maxElement);
};
// функция случайного оттенка синего цвета
var randomColor = function(){
  var allowed = "ABCDEF0123456789", S = "#0000";

  while(S.length < 7){
    S += allowed.charAt(Math.floor((Math.random()*16)+1));
  }
  return S;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + FOND_GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FOND_GAP, CLOUD_Y + GAP + TEXT_HEIGHT * 2);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + FIRST_INDENT + (BAR_WIDTH + COLUMN_SPACING) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + FIRST_INDENT + (BAR_WIDTH + COLUMN_SPACING) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 3 - TEXT_HEIGHT - (MAX_HEIGHT * times[i]) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor ();
      }
    ctx.fillRect(CLOUD_X + FIRST_INDENT + (BAR_WIDTH + COLUMN_SPACING) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - (MAX_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (MAX_HEIGHT * times[i]) / maxTime);
  }
};
