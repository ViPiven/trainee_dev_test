//First task
function check (arr) {
    let arr1 = [];//массив результата
    for(let i = 0; i < arr.length - 2; i++) { //цикл для обхода массива, длинна - 2 потому, что мы сравниваем 3 елемента, это сделано с тем чтобы не выходить за рамки массива
        if(arr[i] > arr[i+1] &&  arr[i+1] < arr[i+2]) { // проверка на условия
            arr1.push(1); //добавляем 1, если утверждение верно
        } else if (arr[i] < arr[i+1] &&  arr[i+1] > arr[i+2]) { //
            arr1.push(1); //так же добавляем 1, если утверждение верно
        } else {   // если нет, то
            arr1.push(0); // добавляем 0
        }
    }
    return arr1; // возвращаем результируюзий массив
}
console.log(check([1,3,5,4,5,7]))

//Second task
function contain (arr) { // функция
    let arr2 = [1,2,3,4,5,6,7,8,9]; // массив чисел, которых мы проверяем на наличие
    let nine = []; // массив участок 3 х 3
    let result = []; // результирующий массив
    for(let k = 0; k < arr[0].length - 2; k++) { //цикл обхода по массивам участка 3 х 3
        for (let i = 0; i < 3; i++) { // цикл обхода по елементам по вертикали
            for (let j = k; j < 3 + k; j++) { // цикл обхода по елементам по горизонтали; 3 + k потому что на следующем обходе мы должны взять следующий 3х3 участок
                nine.push(arr[i][j]); // добавляет значения в пустой массив 3 х 3
            }
        }
        let intersection = arr2.filter(it => nine.includes(it)); // обьединение с массивом nine
        if (intersection.length === 9) { // если два массива между собой равны, значит в обоих массивах есть все 9 чисел
            result.push(true); // если это так, по условию возращаем true
        } else {
            result.push(false); // если это не так, по условию возращаем false
        }
        nine = []; // обнуляем наш массив 3 х 3
    }
    return result; // возвращаем результат
}
console.log(contain([[1,2,3,2,7,4],[4,5,6,8,1,9],[7,8,9,4,5,1]]))

//Third task
function tab(arr, format, limit) { // функция
    let formatText = []; // пустой массив с результатом
    for (let i = 0; i < arr.length; i++) { // цикл обхода по елементу массива
        let col = split(arr[i], limit, format[i]) // вызвал функцию разбивки по лимиту
        formatText = formatText.concat(col); // в форматирующий текст добавить строку
    }
    console.log(formatText); //

}
function split(arr, limit, type) { // функция разбивки по лимиту
    let str = ['']; // результирующая пустая строка
    let division = 0; // лимитный делитель, та строка которую мы проверяем на наличие 16 символов
    for (let j = 0; j < arr.length; j++) { // цикл обхода по каждому слову
        if(checkLimit(str[division], arr[j], limit)) { // если 2 слова помещаются, то мы это слово записываем в строку с пробелом
            str[division] += arr[j] + ' '; //
        } else {
            division++; // нет, идем дальше и переходим на следующую строку
            str[division] = arr[j] + ' '; // записываем в следующую строку, то что не поместилось в лимит
        }
    }
    for (let i = 0; i < str.length; i++) { // удаление лишних пробелов
        str[i] = str[i].trimEnd(); //
        str[i] = format(str[i], limit, type); //
    }
    console.log(str); //
    return str; //
}
function checkLimit(str1, str2, limit) { // функция, которая проверяет действительно ли слово попадает в рамки лимита
    if ((str1 + str2).length < limit) { // если длинна двух слов меньше лимита то все ок и записываются в строку
        return true; //
    } else {
        return false; //
    }
}
function format(str, limit, type) { // функция форматирования
    let result = str; // результат = строке, подходящей по лимиту
    if(type === 'LEFT') { // если тип слева, то
        for (let i = 0; i < limit - str.length; i++) // проходим по циклу, который добавляет пробелы вправо
            result += ' '; //
    } else {
        for (let i = 0; i < limit - str.length; i++) // если вправо, то добавляем пробелы слева, чтоб было выравнивание по правой стороне
            result = ' ' + result; //
    }
    result = '*' + result + '*'; // добавляем звездочки по бокам строки
    return result; // возвращаем результат-массив
}

tab([["Hello", "world"], ["Brad", "come", "to", "dinner", "with", "us"], ['He', 'loves', 'tacos']], ["LEFT", "RIGHT", "LEFT"], 16);




