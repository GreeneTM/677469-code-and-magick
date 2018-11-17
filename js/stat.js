var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ блока тени
var COLUMN_SPACING = 50; //расстояние между колонками
var TEXT_HEIGHT = 20; //высота строки
var FOND_GAP = 20; // отступ текста
var BAR_WIDTH = 40; // ширина столбца

var renderCloud = function (ctx, x, y, color,) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + FOND_GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FOND_GAP, CLOUD_Y + GAP + TEXT_HEIGHT * 2);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 140, 260);
  ctx.fillRect(140, 240, 40, -150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Кира', 230, 260);
  ctx.fillRect(230, 240, 40, -20);

  ctx.fillText('Вика', 320, 260);
  ctx.fillRect(320, 240, 40, -70);

  ctx.fillText('Давид', 410, 260);
  ctx.fillRect(410, 240, 40, -110)

};
