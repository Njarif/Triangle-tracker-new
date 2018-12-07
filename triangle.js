function triangletracker() {
  var x = (document.getElementById("Valuex").value);
  var y = (document.getElementById("Valuey").value);
  var z = (document.getElementById("Valuez").value);
  var result;

  if (x == y && y == z) {
    result = "Your triangle is an Equilateral: All sides are equal"
    document.getElementById('output').innerHTML = result
  } else if ((x == y && y != z) || (x != y && z == x) || (z == y && z != x)) {
    result = "Your triangle is an Isosceles: Exactly 2 sides are equal"
    document.getElementById('output').innerHTML = result
  } else if (x != y && y != z && x != z) {
    result = "Your triangle is a Scalene: No sides are equal"
    document.getElementById('output').innerHTML = result
  } else if (x >= (y + z) || x >= (y + x) || y >= (x + z)) {
    result = "That is NOT a triangle"
    document.getElementById('output').innerHTML = result
  }
}
