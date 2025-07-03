export function getRandomColor(len) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < len; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}