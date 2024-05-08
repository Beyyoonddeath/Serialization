// методы сериализации и десериализации
const ser = arr => JSON.stringify(arr),
    deser = str => JSON.parse(str);

// функция получения рандомного натурального числа
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// создание массивов под группы чисел для тестинга
let random50 = [], random100 = [], random500 = [], random1000 = [];
let singleDigs = [], doubleDigs = [], threeDigs = [], tripled = [];

let i;

// заполнение этих массивов
i=0; for (;i<50;i++) random50.push(getRandomArbitrary(1, 300));
i=0; for (;i<100;i++) random100.push(getRandomArbitrary(1, 300));
i=0; for (;i<500;i++) random500.push(getRandomArbitrary(1, 300));
i=0; for (;i<1000;i++) random1000.push(getRandomArbitrary(1, 300));

i=0; for (;i<10;i++) singleDigs.push(i);
i=10; for (;i<100;i++) doubleDigs.push(i);
i=100; for (;i<1000;i++) threeDigs.push(i);
i=0; for (;i<300;i++) tripled.push(i, i, i);

// тесты

// сериализация
ser_random50   = ser(random50)
ser_random500  = ser(random500)
ser_random100  = ser(random100)
ser_random1000 = ser(random1000)
ser_singleDigs = ser(singleDigs)
ser_doubleDigs = ser(doubleDigs)
ser_threeDigs  = ser(threeDigs)
ser_tripled    = ser(tripled)

// десериализация
deser_random50   = deser(ser_random50)
deser_random500  = deser(ser_random500)
deser_random100  = deser(ser_random100)
deser_random1000 = deser(ser_random1000)
deser_singleDigs = deser(ser_singleDigs)
deser_doubleDigs = deser(ser_doubleDigs)
deser_threeDigs  = deser(ser_threeDigs)
deser_tripled    = deser(ser_tripled)