// Compare the triplet
let a = [5, 6, 7]
let b = [3, 6, 10]
let c = [0, 0];

for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        c[0] += 1
    } else if (a[i] < b[i]) {
        c[1] += 1
    } else {
        c[0] += 0;
        c[1] += 0;
    }
}
console.log(c)

// isPrime
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.ceil(number / 2); i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(137))

// remove duplicate
let numbersArray = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
let removeDuplicate = [...new Set(numbersArray)]
console.log(removeDuplicate);

// reverse in Place
const reverseInPlace = (data) => {
    return data.split(' ').map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseInPlace("what is your name"));

// First non repeating character
let char = "the quick brown fox jumps then quickly blow air"
const nonRepeatChar = (data) => {
    let newData = data.split(' ')
    let firstChar = ''
    let result = ''

    for (let i = 0; i < newData.length; i++) {
        firstChar += newData[i][0]
    }

    for (let i = 0; i < firstChar.length; i++) {
        a = 0
        for (let j = 0; j < firstChar.length; j++) {
            if (firstChar[i] === firstChar[j]) {
                a += 1
            }
        }
        if (a < 2) {
            result = firstChar[i];
            break;
        }
    }
    return result
}

console.log(nonRepeatChar(char))



