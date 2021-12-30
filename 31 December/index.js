// document.getElementById().innerHtml = 'abc';

// what are methods/function?




function illogicalWork(num1, num2) {
  var res1 = num1 + num2;
  var res2 = res1 * (num1 - num2);
  var finalResult = (res2 + res1) * (num1 + num2);

  return finalResult;
}

var result = illogicalWork(10, 20);
console.log('result is', result);

// string / numbers / arrays / booleans
// objects

// model, make, year, seatingCapacity

// var myObj = {
//   make: 'Honda',
//   model: 'City ZX',
//   year: 2021,
//   seatingCapacity: 5
// };

// var myObj2 = {
//   make: 'Hyundai',
//   model: 'Creta SX',
//   year: 2018,
//   seatingCapacity: 5
// };

// const oldCarsArr = ['Honda City', 'Hyundai Creta'];

const carsArr = [
  {
    make: 'Honda',
    model: 'City ZX',
    year: 2021,
    seatingCapacity: 5,
    print: function () {
      console.log(this.make + ' ' + this.model)
    }
  },
  {
    make: 'Hyundai',
    model: 'Creta SX',
    year: 2018,
    seatingCapacity: 5,
    print: function () {
      console.log(this.make + ' ' + this.model)
    }
  },
  {
    make: 'Hyundai',
    model: 'Verna SX',
    year: 2016,
    seatingCapacity: 5,
    print: function () {
      console.log(this.make + ' ' + this.model)
    }
  },
  {
    make: 'Mahindra',
    model: 'XUV 500',
    year: 2017,
    seatingCapacity: 7,
    print: function () {
      return this.make + ' ' + this.model;
    }
  },
];

/**
() // parantheses // function/methods
[] // square braces // arrays
{} // curly braces // objects
 */

// for (let i = 0; i < carsArr.length; i++) {
//   const car = carsArr[i];

//   console.log(car.make + ' ' + car.model);
// }

function getMyCarDetails(carName) {
  let carDetails;

  for (let i = 0; i < carsArr.length; i++) {
    const car = carsArr[i];
    if (car.model.toLowerCase().includes(carName.toLowerCase())) {
      carDetails = car;
      break;
    }
  }
  return carDetails;
}

var car = getMyCarDetails('verna');
if (car === undefined) {
  console.log('car details not found!');
} else {
  console.log(car.print());
}



// simple todo
/**
 * {
 *  id: Date.now();
 *  title: 'Pick mom at 5:00'
 *  completed: false 
 * }
 */

const todosArr = [];
const pendingTodos = [];
const completedTodos = [];

function addTodo() {
  const newTodo = {
    id: Date.now(),
    todo: document.getElementById('todoInput').value,
    completed: false
  };

  todosArr.push(newTodo);

  // const todoList = document.getElementById('todoList');
  // todoList.innerHTML = todoList.innerHTML + '<li><input type="checkbox" onclick="toggleTodo(' + newTodo.id + ')" />' + newTodo.todo + '</li>';

  // todoList.innerHTML = todoList.innerHTML + `
  //   <li>
  //     <input
  //       type='checkbox'
  //       onClick="toggleTodo(${newTodo.id})"
  //     />
  //     ${newTodo.todo}
  //   </li>
  // `;
}

function toggleTodo(id) {
  console.log('id', id);
  console.log(todosArr.find(todo => todo.id === id));
}
