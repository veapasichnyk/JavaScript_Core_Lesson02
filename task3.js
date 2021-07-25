    let sum;
    let devide;
    let subtract;
    let multiply;

function calculator(a,b) {
  try {
      sum = a + b;
      subtract = a - b;
      multiply = a * b;
      if ( 0 == b ) {
          throw new Error('Error!!! Can`t be divided by 0 ')
        } else {
            devide = a/b;
        }
      } catch (err) {
          console.log(err)
      }

      return sum, subtract, multiply, devide;

  }

  calculator(2, 0);

  console.log("a+b = " + sum);
  console.log("a-b = " + subtract);
  console.log("a*b = " + multiply);
  console.log("a/b = " + devide);

  calculator (6,3);

  console.log("a+b = " + sum);
  console.log("a-b = " + subtract);
  console.log("a*b = " + multiply);
  console.log("a/b = " + devide);