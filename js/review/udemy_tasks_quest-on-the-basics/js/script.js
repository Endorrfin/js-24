/**
|--------------------------------------------------
  ======= <<<--- Topic #1 - function palmTree(n) --->>>  =======
Реализуйте функцию palmTree(n), которая будет принимать целое положительное n и возвращать строку, состоящую из символов "p". Например, вызов palmTree(3) приведет к тому, что функция вернет "ppp". Примечание: при нечисловом аргументе функция должна вернуть false, а при вызове без аргумента - один символ "p".
|--------------------------------------------------
*/

const palmTree = (n = 1) => typeof n == "number" && n > 0 ? "p".repeat(n) : false;
console.log(palmTree(3)); // ppp
console.log(palmTree(7)); // ppppppp
console.log(palmTree(1)); // p
console.log(palmTree(28)); // pppppppppppppppppppppppppppp
// console.log(palmTree(a32)); // ReferenceError: a32 is not defined
console.log(palmTree(0)); // false

/**
|--------------------------------------------------
  ======= <<<--- Topic #2 - function autoReplace(needles,change,haystack) --->>>  =======
  Реализуйте функцию autoReplace(needles,change,haystack), которая будет принимать целое массив строк, которые нужно поменять на строку change внутри строки haystack. Например, вызов функции

autoReplace(['салат', 'помидоры'], 'еда', 'свежие помидоры пошли в салат')

должна вернуть строку "свежие еда пошли в еда".
Примечание: если хотите, тут можно использовать регулярные выражения, но это не обязательное требование, при этом регистр не должен учитываться. При отсутствии параметров должен вернуться false.

Данная задача, может пригодиться в тех случаях, когда есть массив стоп слов, и нужно очистить один, или несколько наборов текста, так, чтобы эти слова не попадались. Например, зарисовать их звездочками, или какими-то шаблонами, включающими гиперссылку.
|--------------------------------------------------
*/

// Используем декларативный стиль описания функции
function autoReplace(needles, change, haystack) {
  // осуществляем проверку, если что-то не задано из величин, то работа функции прекращается
  if (!needles || !change || !haystack) return false;
  return haystack.replace(new RegExp(needles.join('|'), 'gi'), change);
}

let arr1 = ['салат', 'помидоры'],
  str1 = 'свежие помидоры пошли в салат';
console.log(autoReplace(arr1, 'еда', str1)); // свежие еда пошли в еда

let arr2 = ['лошади', 'ведра'],
  str2 = 'Лошади способны из ведра пить воду';
console.log(autoReplace(arr2, 'что-нибуь', str2)); // что-нибуь способны из что-нибуь пить воду

/**
|--------------------------------------------------
  ======= <<<--- Topic #3 - function autoTags(str, tags, url) --->>>  =======
  Создайте функцию autoTags(str, tags, url), которая принимает входную строку str, массив слов для замены на теги и базовый URL (по умолчанию должен иметь значение "https://mysite.local/tag/"), которые нужно сделать тегами в строке str. Напримерб вызов функции.

autoTags('интересно изучать js', ['html, 'js])
должна вернуть строку должен вернуть строку 'интересно изучать <a href="https://mysite.local/tag/js">@js</a>'.

Примечание: если вы увидите как замыкание может упростить работу над задачей, испльзуйте его.
|--------------------------------------------------
*/

const getAutoTags = (base = 'https://mysity.local/tag/') => {
  return (str, tags, url = base) => {
    tags = '(' + tags.join("|") + ')';
    return str.replace(new RegExp(tags, "gi"), `<a href="${url}$1">@$1</a>`);
  }
}

const autoTags = getAutoTags();
console.log(autoTags("интересно изучать js", ['html', 'js'])); // интересно изучать <a href="https://mysity.local/tag/js">@js</a>



/**
|--------------------------------------------------
  ======= <<<--- Topic #4 - function (genitive = (n, word)) --->>>  =======
const autoTags = getAutoTags();
console.log( autoTags('интересно изучать js', ['html','js']) );

Реализуйте функцию genitive(n, word). Функция принимает положительное целое число и объект word с вариантами записи слов для разных чисел. Объект word имеет свойства singular many1 many2, например {singular: 'товар', many1: 'товара', many2: 'товаров'.
Например, при вызове

genitive(5, {singular: 'курс'б many1: 'курса', many2: 'курсов'})
функция должна вернуть строку '5 курсов'
|--------------------------------------------------
*/

const genitive = (n, word) => { // n - число
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) { // n - не входит в диапазон 5 - 20, если не заканчивается на 5 - 20 окончание будет "курсов"
    if (n % 10 == 1) res = word.singular; // если проверили n и попали на остаток деления на 1, то будет курс
    if (n % 10 > 1 && n % 10 < 5) res = word.many1; // а иначе курса
  }
  return `${n} ${res}`;
}
console.log(genitive(5, {
  singular: 'курс',
  many1: 'курса',
  many2: 'курсов'
})); // 5 курсов





/**
|--------------------------------------------------
  ======= <<<--- Topic #5 - object classNames --->>>  =======
Создайте объекта classNames co свойством cname и методами
add( String [,String]) Добавляет к cname классы
remove( String [,String]) Удаляет из cname классы
toggle ( String [, Boolean]) Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный классб а если true - добавляет.

Например, значение classNames.cname = ‘btn’. После вызова classNames.toggle(‘btn-primary’) значение classNames.cname должно стать ‘btn btn-primary’. При повторном вызове classNames.toggle(‘btn-primary’), значение длолжно вернуться в ‘btn’
ПримечаниеЖ это пригодится в дальнейшем при работе с DOM на HTML-странице. Познакомьтесь с интерфейсом https://developer.mozilla.org/ru/docs/Web/API/Element/classList
|--------------------------------------------------
*/



const classNames = {
  cname: "",
  add: function( ...s ){
  let cname = this.cname.split(" ");
  let tmp = {};
  for(let i in cname){
  tmp[cname[i]] = 1;
  }
  s.forEach( function(e){
  tmp[e] = 1;
  });

  this.cname = "";
  for(let i in tmp){
  this.cname += i + " ";
  }
  this.cname = this.cname.slice(0,-1)
  },
  remove: function( ...s){
  let cname = this.cname.split(" ");
  let tmp = {};
  for (let i in cname) {
  tmp[cname[i]] = 1;
  }
  s.forEach( function(e){
  if(e in tmp) delete tmp[e];
  });
  this.cname = "";
  for(let i in tmp){
  this.cname += i + " ";
  }
  this.cname = this.cname.splice(0,-1)
  },
  toggle: function( str, flag ){
  let cname = this.cname.split(" ");
  let  tmp = {};
  for(let i in cname){
  tmp[cname[i]] = 1;
  }

  if( (str in tmp) || (!flag && flag != undefined )) {
  delete tmp[str];
  } else if( !(str in tmp) || flag){
  tmp[str] = 1;
  }

  this.cname = "";
  for(let i in tmp){
  this.cname += i + " ";
  }
  this.cname = this.cname.splice(0,-1)
  }
  }
  classNames.cname = 'btn';
  classNames.add("btn-primary");
  console.log(classNames);



/**
|--------------------------------------------------
  ======= <<<--- Topic #6 - function lorem --->>>  =======
Напишите функцию lorem(n), которая принимает положительное целое n (от 1 до 445) и при вызове возвращает строку длинной n символов из строки.

“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eveniet neque quasi placeat aliquam, hic voluptas magnam. Similique recusandae libero reprehenderit deleniti voluptas blanditiis, ipsa eaque ratione repellendus deserunt placeat, illum perspiciatis nulla? Molestiae eum similique molestias nam ut officiis provident beatae cumque. Ad, laboriosam iste. Dicta odio consectetur vitae autem voluptatibus architecto, repellendus reiciendis accusamus sit iusto excepturi dolore quaerat aliquam debitis molestiae modi a voluptate officia delectus ex, numquam neque laborum? Perspiciatis repellat sequi eligendi fugiat velit illo minus voluptates excepturi, praesentium libero aut corrupti odio aliquam dolorum in nulla eveniet odit est esse? Vero minus explicabo labore.”

Например, при вызове lorem(100) функция должна вернуть строку
“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eveniet neque quasi placeat aliquam, hic”
|--------------------------------------------------
*/

const lorem = n => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eveniet neque quasi placeat aliquam, hic voluptas magnam. Similique recusandae libero reprehenderit deleniti voluptas blanditiis, ipsa eaque ratione repellendus deserunt placeat, illum perspiciatis nulla? Molestiae eum similique molestias nam ut officiis provident beatae cumque. Ad, laboriosam iste. Dicta odio consectetur vitae autem voluptatibus architecto, repellendus reiciendis accusamus sit iusto excepturi dolore quaerat aliquam debitis molestiae modi a voluptate officia delectus ex, numquam neque laborum? Perspiciatis repellat sequi eligendi fugiat velit illo minus voluptates excepturi, praesentium libero aut corrupti odio aliquam dolorum in nulla eveniet odit est esse? Vero minus explicabo labore.".slice(0,n);

// на выходе мы будем получать результат похож на тот, который выдает emmet в html
console.log(lorem,(100)); // n => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eveniet neque quasi placeat aliquam, hic voluptas magnam. Similique recusandae libero reprehenderit deleniti voluptas blanditiis,… 100




/**
|--------------------------------------------------
  ======= <<<--- Topic #7 - function myReplace  --->>>  =======
Напишите функцию myReplace(s1, s2, s3), которая будет принимать три строковых аргумента s1 , s2, s3 и заменять в первом аргументе s1 все слова, совпадающие со вторым аргументом s2, на третий аргумент s3. Функция должна возвращать измененную строку. Например, вызов
myReplace(“Ехал Грека, через реку”, “р”, “л”)

должен вернуть строку “Ехал Глека, челез леку”

Примечание: эта задача является частным случаем одной из предыдущих задач. Она более простая, позволяет отдохнуть и приступить к следующим задачам. Внимание, функция должна учитывать регистр слов.
|--------------------------------------------------
*/

const myReplace = (s, k, m) => s.split(k).join(m);
console.log(myReplace("Ехал Грека через реку", "р", "л" )); // Ехал Глека челез леку
