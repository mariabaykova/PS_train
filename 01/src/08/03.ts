// сериализация нестандартных объектов
// написать функцию, которая преобразовывает заданные js объекты в строку и обратно
// JSON.stringify/parse параметры???

const original = {
    myDate: new Date(),
    mySet: new Set([1, 2, 3]),
    myMap: new Map([
      [new Date(), {a: 1}]
    ])
  };
  
  const str = serialize(original);

  console.log(str);

  function serialize( obj ): string {
    return JSON.stringify(obj);
  }
  
  // Объект должен иметь аналогичную структуру с original
//   parse(str);