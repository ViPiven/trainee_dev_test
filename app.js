//First task
function check (arr) {
    let arr1 = [];
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] > arr[i+1] &&  arr[i+1] < arr[i+2]) {
            arr1.push(1);
        } else if (arr[i] < arr[i+1] &&  arr[i+1] > arr[i+2]) {
            arr1.push(1);
        } else {
            arr1.push(0);
        }
    }
    return arr1;
}
console.log(check([1,3,5,4,5,7]))

//Second task
function contain (arr) {
    let arr2 = [1,2,3,4,5,6,7,8,9];
    let nine = [];
    let result = [];
    for(let k = 0; k < arr[0].length - 2; k++) {
        for (let i = 0; i < 3; i++) {
            for (let j = k; j < 3 + k; j++) {
                nine.push(arr[i][j]);
            }
        }
        let intersection = arr2.filter(it => nine.includes(it));
        if (intersection.length === 9) {
            result.push(true);
        } else {
            result.push(false);
        }
        nine = [];
    }
    return result;
}
console.log(contain([[1,2,3,2,7,4],[4,5,6,8,1,9],[7,8,9,4,5,1]]))

//Third task
function tab(arr, format, limit) {
    let formatText = [];
    for (let i = 0; i < arr.length; i++) {
        let col = split(arr[i], limit, format[i])
        formatText = formatText.concat(col);
    }
    console.log(formatText);

}
function split(arr, limit, type) {
    let str = [''];
    let division = 0;
    for (let j = 0; j < arr.length; j++) {
        if(checkLimit(str[division], arr[j], limit)) {
            str[division] += arr[j] + ' ';
        } else {
            division++;
            str[division] = arr[j] + ' ';
        }
    }
    let res = '';
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].trimEnd();
        str[i] = format(str[i], limit, type);
    }
    console.log(str);
    return str;
}
function checkLimit(str1, str2, limit) {
    if ((str1 + str2).length < limit) {
        return true;
    } else {
        return false;
    }
}
function format(str, limit, type) {
    let result = str;
    if(type === 'LEFT') {
        for (let i = 0; i < limit - str.length; i++)
            result += ' ';
    } else {
        for (let i = 0; i < limit - str.length; i++)
            result = ' ' + result;
    }
    result = '*' + result + '*';
    return result;
}

tab([["Hello", "world"], ["Brad", "come", "to", "dinner", "with", "us"], ['He', 'loves', 'tacos']], ["LEFT", "RIGHT", "LEFT"], 16);




