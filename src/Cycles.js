/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    if (start % 2 != 0) {
        start++;
    }
    for (let i = start; i <= end; i += 2) sum += i;
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let counter = 0;
    while (a > 0.1) {
        a = a / 2;
        counter++;
    }
    return counter;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let allstring = Array.from(message);
    let i = 2;
    do {
        allstring[i] = '_';
        i += 3;
    } while (i < allstring.length);
    let result = allstring.join('');
    return result;
}
