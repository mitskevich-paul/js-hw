let firstElement = document.getElementById('first');
firstElement.addEventListener('click', event => {
    let name;
    do {
        name = prompt('Enter Your name');
    } while (!name || isFinite(name));
    let forname;
    do {
        forname = prompt('Enter Your forname');
    } while (!forname || isFinite(forname));
    let lastname;
    do {
        lastname = prompt('Enter Your lastname');
    } while (!lastname || isFinite(lastname));
    let liveYear = new Date();
    let yearNow = liveYear.getFullYear();
    let liveMonth = new Date();
    let MonthNow = liveMonth.getMonth();
    let yourYear;
    do {
        yourYear = prompt('Enter year of Your Birthsday', '1995');
    } while (!yourYear || isNaN(yourYear) || yourYear < 1920 || yourYear > (yearNow - 17));
    let yourMonth;
    do {
        yourMonth = prompt('Enter month of Your Birthsday', '11');
    } while (!yourMonth || isNaN(yourMonth) || yourMonth > 12 || yourMonth <= 0);
    let gender;
    do {
        gender = prompt('Enter Your gender', 'м');
    } while (!gender || isFinite(gender));
    switch (gender) {
        case 'м':
        case 'муж':
        case 'муж.':
        gender = 'мужской';
        break;
        case 'ж':
        case 'жен':
        case 'жен.':
        gender = 'женский';
        break;
        default: 
        gender = 'Нестандартный';
        break;
    }
    let parent;
    let kids;
    do {
        parent = prompt('Do You have childrens?', 'нет');
    } while (!gender || isFinite(gender));
    switch (parent) {
        case 'нет':
        case 'нету':
        case 'no':
        case 'not':
        alert('Good!');
        kids = 'Нету';
        break;
        case 'да':
        case 'есть':
        case 'yes':
        case 'yea':
        do {
            kids = prompt('how much?', '2');
        } while (!kids || isNaN(kids) || kids <= 0 || kids > 10);
        break;
        default: kids = 'nobody loves you';
        break;
    }   
    let ageResult = (parseFloat(yearNow) + parseFloat((MonthNow + 1) / 10)) - (parseFloat(yourYear) + parseFloat(yourMonth / 10));
    alert(`
    Greetings ${forname} ${name} ${lastname},
    Yor age ${parseInt(ageResult)},
    Yor childrens: ${kids},
    `);
})
let firstShowElement = document.getElementById('first_show');
firstShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/fx8gkw35/5/");
});

let secondElement = document.getElementById('second');
second.addEventListener('click', event => {
    let a;
    do {
        a = prompt('enter a', 1);
    } while (!a || isNaN(a) || a === 0)
    let b;
    do {
        b = prompt('enter b', -6);
    } while (!b || isNaN(b))
    let c;
    do {
        c = prompt('enter c', 9);
    } while (!c || isNaN(c))
    let equation = (a,b,c) => {
        let d = (Math.pow(b, 2) - 4*a*c);
        if (d < 0) {
            return[];
        } else if (d === 0) {
            let x = (-b / 2*a);
            return[x];
        } else if (d > 0) {
            let x1 = ((-b + Math.sqrt(d) / 2*a));
            let x2 = ((-b - Math.sqrt(d) / 2*a));
            return[x1, x2];
        }
    }
    console.log(equation(a,b,c));
});
let secondShowElement = document.getElementById('second_show');
secondShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/qzn0sd3o/6/");
});

let thirdElement = document.getElementById('third');
third.addEventListener('click', event => {
    let array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
    let max = getMaxValue(array);
    let min = getMinValue(array);
    alert(max);
    alert(min);
        
    function getMaxValue(array){
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i]; 
        }
        return max;
    }
    
    function getMinValue(array){
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
    });
let thirdShowElement = document.getElementById('third_show');
thirdShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/t1qz8aLs/23/");
});

let fourthElement = document.getElementById('fourth');
fourth.addEventListener('click', event => { 
let array = [8, 11, [], [7, 2, 4, [3, 1], 1], 7, 11, [], [1, 8, 1]];
function treeSum(array) {
let sum = 0;
	array.forEach(elem => {
		if (Array.isArray(elem)) {
    			sum += treeSum(elem)
    		} else {
    			sum += elem
    		}
		});
  	return sum;
}
console.log(treeSum(array));
alert(treeSum(array));
});

let fourthShowElement = document.getElementById('fourth_show');
fourthShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/67zps0vg/3/");
});

let fifthElement = document.getElementById('fifth');
fifth.addEventListener('click', event => { 
let unique = (a) => {
	let result = [];
  for (let b of a) {
  	if(!result.includes(b)) {
  		result.push(b);
  	}
  }
	return result;
}
let a = [1,1,2,3,4,4,4,5,6,7,7,4];
alert(unique(a));

let array2 = ['п','р','ы','в','е','т'];
let array1 = ['р','1','2','п'];
console.log(array1.length);
console.log(array2.length);
let ln1 = array1.length;
let ln2 = array2.length;
for (let i = 0; i < ln1; ++i) {
    cache = array1[i];
    for (let j = 0; j < ln2; ++j)
        {
        if (cache == array2[j])
            {
            alert('найдено совпадение: ' + cache);
            break;
           }
    	}
	}
});

let fifthShowElement = document.getElementById('fifth_show');
fifthShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/dar95jeh/");
});

let sixthElement = document.getElementById('sixth');
sixth.addEventListener('click', event => { 
let object1 = {
money: 100,
house: 10,
chiks: 3,};
let object2 = {
money: 100,
house: 10,
chiks: 3,};

let comparision = (object1, object2) => {
	let result;
	let obj1array = []; 
	let obj2array = [];
  obj1array = Object.keys(object1); 
  obj2array = Object.keys(object2);
  let val1array = []; 
	let val2array = [];
  val1array = Object.values(object1); 
  val2array = Object.values(object2);
  	if (obj1array.length === obj2array.length || val1array.length === val2array.length) {
      	let leng = 0;
        while (leng < obj1array.length) {
        	while (leng < obj2array.length) {
          	let val1 = obj1array[leng];
		let val2 = obj2array[leng];
            leng++;
            	if (val1 === val2) {
              		let leng1 = 0;
      	          while (leng1 < val1array.length) {
      	            while (leng1 < val2array.length) {
      	              let val11 = val1array[leng1];
      	              let val12 = val2array[leng1];
      	              leng1++;
      	                if (val11 === val12) {
                        result = 1;
      	                } else {
      	                result = 0;
      	                }
      	            } 
      	         } 
      	     }  
        	}  
			} 
  }
  if (result === 1) {
  return result;
  } else if (result === 0) {
  return;
  }
}  
console.log(comparision(object1, object2));
if (comparision(object1, object2) === 1) {
alert('Объекты одинаковы!')
} else {
alert('Объекты отличаются!')
}
});

let sixthShowElement = document.getElementById('sixth_show');
sixthShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/532pdLhm/5/");
});
