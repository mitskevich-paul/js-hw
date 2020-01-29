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
            alert('Корней нет');
            return[];
        } else if (d === 0) {
            let x = (-b / 2*a);
            alert(`D = 0, 1 корень (x = ${x})`);
            return[x];
        } else if (d > 0) {
            let x1 = ((-b + Math.sqrt(d) / 2*a));
            let x2 = ((-b - Math.sqrt(d) / 2*a));
            alert(`D > 0, 2 корня (x1 = ${x1}, x2 = ${x2})`);
            return[x1, x2];
        }
    }
    console.log(equation(a,b,c));
});
let secondShowElement = document.getElementById('second_show');
secondShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/qzn0sd3o/5/");
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
    window.open("https://jsfiddle.net/AlfaOne/t1qz8aLs/8/");
});

let fourthElement = document.getElementById('fourth');
fourth.addEventListener('click', event => { 
var array = [1, 2, [], [2, 5, 3, [32, 5], 3], 7, 4, [], [3, 3, 5, 7, 8]];
var sum = 0;
function maxValue(array) {
    array.forEach(function(value, index) {
        Array.isArray(value) ? maxValue(value) : sum += value; 
    });
    return sum;
}
console.log(maxValue(array));
allert(`${array},
sum = ${maxValue(array)}`
});

let fourthShowElement = document.getElementById('fourth_show');
fourthShowElement.addEventListener('click', event => {
    window.open("https://jsfiddle.net/AlfaOne/67zps0vg/1/");
});
