const data = [
    {
      name:'Josh',
      age: '26',
      position: 'Instructor'
    },
    {
      name:'Sam',
      age: '27',
      position: 'Mentor'
    },
    {
      name:'Jon',
      age: '24',
      position: 'Mentor'
    },
    {
      name:'Dan',
      age: '25',
      position: 'Instructor'
    },
    {
      name:'Luis',
      age: '35',
      position: 'Student'
    },
  ]
  function myfunction(name, age) {
      for (var i = 0; i<= data.length; i++) {
         

      }
  }

const names = data.map(e => e.name);

const over25 = data.filter(e => Number(e.age) > 25);

const firstLetters = data.reduce((l, e) => l += e.name[0], '');

let names = [];
let ageOver25 = [];
let firstInitial = "";
function getNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        names.push(arr[i].name);
    }
}
function getAge25(arr) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].age > 25) {
          ageOver25.push(arr[i].age);
      }
  }
}
function getInitials(arr) {
  for (var i = 0; i < arr.length; i++) {
      var first = arr[i].name.substring(0, 1);
      firstInitial += first;
  }
  