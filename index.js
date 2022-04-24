//file PDF:
//Câu 1:
function printNumber() {
    for (var i = 1; i <= 100; i += 10) {
        for (var j = i; j < i + 10; j++) {
            document.write(j + ' ')
        }
        document.write('<br></br>')
    }
}
// printNumber();
//Câu 2:
function isPrim(num) {
    if (num == 0 || num == 1) {
        return true;
    } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true
}

function prim_Num(a) {
    const n = a.length
    document.write('Danh sách các số nguyên tố là: ')
    for (var i = 0; i < n; i++) {
        if (isPrim(a[i])) {
            document.write(a[i], ' ')
        }
    }

}
// const a = [1, 2, 3, 4, 5, 6]
// prim_Num(a)
//Câu 3:
function printSum(n) {
    let sum = 2;
    for (let i = 3; i <= n; i++) {
        sum += i;
    }
    sum += 2 * n
    document.write('S= ', sum)
}
// printSum(3);
//Câu 4:
function printDivisor(n) {
    document.write('Ước số của ', n, ' là: ')
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            document.write(i, ' ')
        }
    }
}
// printDivisor(8)
// Câu 5:
function printReverse(n) {
    var s = ''

    var temp = n.toString(10)
    for (var i = temp.length - 1; i >= 0; i--) {
        s += temp[i]
    }
    s = parseInt(s, 10)
    document.write('Số sau khi đảo ngược: ', s)
}
// printReverse(1200)
// Câu 6:
function sentence6() {

    var i = 1;
    var sum = 0;
    while (sum + i <= 100) {
        sum += i;
        i++;
    }
    document.write('Số nguyên x lớn nhất là: ', i - 1)
}
// sen6()
// Câu 7:
function sentence7(n) {
    for (var i = 0; i <= 10; i++) {
        document.write(n, 'x', i, ' = ', n * i)
        document.write('<br></br>')
    }

}
// sen7(3)
// Câu 8:
function sentence8(a) {
    var player1 = []
    var player2 = []
    var player3 = []
    var player4 = []
    for (var i = 0; i < a.length; i += 4) {
        player1.push(a[i])
        player2.push(a[i + 1])
        player3.push(a[i + 2])
        player4.push(a[i + 3])
    }
    document.write('player1: ', player1)
    document.write('<br></br>')
    document.write('player2: ', player2)
    document.write('<br></br>')
    document.write('player3: ', player3)
    document.write('<br></br>')
    document.write('player4: ', player4)
    document.write('<br></br>')
}
// a = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
//     "AS", "7H", "9K", "10D"
// ]
// sen8(a)
//Câu 9:
function sentence9(m, n) {

    var chickens = (4 * m - n) / 2
    var dogs = m - chickens
    document.write('Với tổng số cả gà và chó là ', m, ' và tổng số chân gà và chó là ', n, ' thì:', '<br></br>')
    document.write('+Số con chó: ', dogs, '<br></br>')
    document.write('+Số con gà: ', chickens)
    // x+y=m
    // 4.x+2.y=n=>4.(m-y)+2y=n=>y=(4m-n)/2  
}
// sen(36, 100)
//Câu 10:
function sencentence10(hour, minute) {
    var angleOfHour = (hour / 12) * 360
    var angleOfMinute = (minute / 60) * 360
    document.write('Góc tạo bởi (', hour, ', ', minute, ') là: ', Math.abs(angleOfHour - angleOfMinute - 360))

}

// sen10(12, 30)
//File ảnh png:
//Câu 1:
function SortNumber(a, b, c) {
    let temp;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    console.log('Xuất số theo thứ tự tăng dần: ', a, ' ', b, ' ', c)
}
// SortNumber(2, 3, 1)
//Câu 2:
function checkMoiston(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        return true;
    }
    return false
}
function PrintDay(dayN, monthN, yearN, dayP, monthP, yearP) {
    console.log('Ngày trước đó là: ', dayP, '/', monthP, '/', yearP);
    console.log('Ngày tiếp theo là: ', dayN, '/', monthN, '/', yearN);
}
function newDay(day, month, year) {
    if (checkMoiston(year) && month == 2) {
        if (day === 29) {
            PrintDay(1, 3, year, day - 1, month, year)
            return true;
        }
        if (day === 1) {
            PrintDay(2, month, year, 31, month - 1, year);
            return true;
        }
    }
    else {
        if (day === 28) {
            PrintDay(1, 3, year, day - 1, month, year)
            return true;
        }
        if (day === 1) {
            PrintDay(2, month, year, 31, month - 1, year);
            return true;
        }
    }
    switch (month) {
        case 1:
            if (day === 31) {
                PrintDay(day + 1, month + 1, year, day - 1, month, year)
                return true;
            }
            else if (day === 1) {
                PrintDay(2, month, year, 31, 12, year - 1);
                return true;
            }
            break;
        case 3:
            if (day === 31) {
                PrintDay(day + 1, month + 1, year, day - 1, month, year)
                return true;
            }
            if (day === 1) {
                if (checkMoiston(year)) {
                    PrintDay(2, month, year, 29, month - 1, year);
                    return true;
                }
                else {
                    PrintDay(2, month, year, 28, month - 1, year);
                    return true;
                }
            }
            break;
        case 5, 7, 8, 10:
            if (day === 31) {
                PrintDay(day + 1, month + 1, year, day - 1, month, year)
                return true;
            }
            if (day === 1) {
                PrintDay(2, month, year, 31, month - 1, year);
                return true;
            }
            break;
        case 12:
            if (day === 31) {
                PrintDay(1, 1, year + 1, 1, 1, year + 1);
                return true;
            }
            if (day === 1) {
                PrintDay(2, month, year, 31, month - 1, year);
                return true;
            }
            break;
        default: {
            if (day === 30) {
                PrintDay(1, 1, year + 1, 1, 1, year + 1);
                return true;
            }
            if (day === 1) {
                PrintDay(2, month, year, 30, month - 1, year);
                return true;
            }
        }
    }
    PrintDay(day + 1, month, year, day - 1, month, year)
    return true;
}
// newDay(1, 1, 2020)
// Câu 3:
function machineSaid(s) {
    switch (s) {
        case 'B':
            console.log('Chào Bố')
            break;
        case 'A':
            console.log('Chào Anh Trai')
            break;
        case 'M':
            console.log('Chào Mẹ')
            break;
        case 'E':
            console.log('Chào Em gái')
            break;
        default:
            console.log('Chưa biết ai để chào!')

    }
}
// machineSaid('B');
// Câu 4:
function OddEvenNumber(a, b, c) {
    const array = [a, b, c]
    let odd = 0;
    let Even = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            Even++;
        }
        else {
            odd++
        }
    }
    console.log('Số lượng số chẵn: ', Even);
    console.log('Số lượng số lẻ: ', odd);
}
// OddEvenNumber(3, 2, 4)
// Câu 5:
function dayOfMonth(month, year) {
    switch (month) {
        case 1, 3, 5, 7, 8, 10, 12:
            console.log('Tháng ', month, 'có 31 ngày.')
            break;
        case 2:
            if (checkMoiston(year)) {
                console.log('Tháng ', month, 'có 29 ngày.')
            }
            else {
                console.log('Tháng ', month, 'có 28 ngày.')
            }
            break;
        default:
            console.log('Tháng ', month, 'có 30 ngày.')
    }
}
// dayOfMonth(2, 2020)
// Câu 6:
function distance(x, y, x1, y1) {
    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1))
}
function maxDistance(x1, y1, x2, y2, x3, y3, xSchool, ySchool) {
    var a = [distance(x1, y1, xSchool, ySchool), distance(x2, y2, xSchool, ySchool), distance(x3, y3, xSchool, ySchool)]
    var index = 0;
    var max = a[index];
    for (i = 1; i < 3; i++) {
        if (max < a[i]) {
            max = a[i]
            index = i
        }
    }
    console.log('Sinh viên ở xa trường nhất là: sinh viên ', index + 1)
}
// maxDistance(1, 2, 3, 4, 5, 6, 1, 8)
// Câu 7:
function checkNegative(num) {
    if (num < 0) {
        num = -num;
    }
    return num
}
function absOfNumber(a, b, c) {
    a = checkNegative(a);
    b = checkNegative(b);
    c = checkNegative(c);
    console.log('a= ', a, ' b=', b, ' c=', c)
}
// absOfNumber(1, -22, -3)
// Câu 8:
function readNumber(num) {
    var n = num.toString();
    var tram = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var chuc = ["", "mười", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var donvi = ["", "mốt", "hai", "ba", "tư", "lăm", "sáu", "bảy", "tám", "chín"];
    var link = "mươi";
    if (n[1] == 1 || n[2] == 0) link = '';
    if (n[1] == 0 && n[2] != 0) link = 'linh';
    if (n[2] == 5 && n[1] == 0) donvi[5] = 'năm';
    if (n[2] == 4 && n[1] == 1) donvi[4] = 'bốn';
    console.log(tram[n[0]], " trăm ", chuc[n[1]], link, donvi[n[2]]);
}
readNumber(127)
//Câu 9:
function typeOfTreeAgngle(a, b, c) {
    if (a + b > c || a + c > b || b + c > a) {
        if (a === b && a === c && b === c) {
            console.log('Tam giác đều')
        }
        else if (a === b || a === c || b === c) {
            console.log('Tam giác cân')
        }
        else if (Math.sqrt(a * a + b * b) === c || Math.sqrt(c * c + b * b) === a || Math.sqrt(a * a + c * c) === b) {
            console.log('Tam Giác vuông')
        }
        else {
            console.log('Tam Giác Thường')
        }
    }
    else {
        console.log('Không phải là tam giác.')
    }
}
// typeOfTreeAgngle(2, 2, 2)