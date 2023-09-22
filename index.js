let a = 42;
let b = "42";

/* if (a === b) {
  console.log("x и y равны по значению и типу");
} else if (a == b) {
  console.log("x и y равны по значению, но не по типу");
} else {
  console.log("x и y не равны ни по значению, ни по типу");
} */

a === b
  ? console.log("x и y равны по значению и типу")
  : a == b
  ? console.log("x и y равны по значению, но не по типу")
  : console.log("x и y не равны ни по значению, ни по типу");
