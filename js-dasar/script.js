"use strict";

const gatito = {
  nama: "Fauzi",
  ID: "292500491988",
  room: "TULT0710",
};

let g = 9;

const { nama } = gatito;

let boolean = true;

let char = "'";

document.writeln(`<p>${nama}</p>`); // template string

document.writeln(`${parseInt("9cpp")}`);
document.writeln(`${parseFloat("9.9jkl")}`);

let lapin = Number("sal");
let pablo = lapin + 9;
let juan = isNaN(pablo);
let ucup = null;
let charles = isNaN(ucup);
document.writeln(juan);
document.writeln(charles);

let johnson = [];
johnson.push("your");
johnson.push("octo", 19, true);

console.table(johnson);
console.log(johnson.length);

let hello = 0;

// const name = prompt("Siapa kau?")

/* alert(`Halo ${name}! Selamat Datong`)

const masuk = confirm("Mau masuk nggak");

if (masuk) {
  const name = prompt("siapa namanya dimana rumahnya");
  alert(`Halo! Selamat Datong ${name}!`);
} else {
  alert("Pergi jauh!");
} */

if (hello > 9) {
  console.info("Larger than nine");
} else if (hello < 9) {
  console.info("Smaller than nine");
}

let identity = {
  Name: "Fauzi",
  Class: "IF-49-05",
  Address: "Karimun",
  Age: 19,
  IdNumber: "292500491988",
};

identity["Address"] = "Tg Balai Karimun";

console.log(identity.Address);

let p = undefined;
let q = null;

console.log(p === q);

let l = 10.0;

switch (l) {
  case "A":
    console.log("SUPER DUPER");
    break;
  case "B":
    console.log("GREAT");
    break;
  case "C":
    console.log("GOOD");
    break;
  case "D":
    console.log("WHAT");
    break;
  case "E":
    console.log("BAD");
    break;
  case undefined:
    console.log("KOSONG");
    break;
  default:
    console.log("OKAY");
}

let line = typeof null;
console.log(line);

let data = 9;

if (typeof data === "number") {
  console.log("NUMBER");
}

let vamos = {
  temperatur: "cold",
  pleasant: null,
  goodNight: undefined,
};

let prague = "goodNight" in vamos;

console.info(prague);

const almer = null;

const rome = almer ?? "Genep";

console.info(rome);

let chumbawamba = {};

let great = chumbawamba.address?.region;

console.log(great);

true;

console.info("hello" || 1);
console.info("" || {});
console.info(null || 0);

const k = 9;

p = k > 0 ? "Lebih" : "Kurang";

l = k ?? "Lebih";

// let a, b;

// outer: for (a = 1; a <= 10; a++) {
//   for (b = 1; b <= 10; b++) {
//     console.log(`${a}-${b}`);
//     if (b === a + 1) {
//       continue outer;
//     }
//   }
// }

const arr = ["Fauzi", "Pradiptha", "Panji", "Raditya"];

for (const name of arr) {
  document.writeln(`<p>Anggota: ${name}</p>`);
}

(function () {
  document.writeln("<p>Hello</p>");
})();

(() => document.writeln("<p>Holla</p>"))();

function add(a, b) {
  return a + b;
}

const you = add(2, 3);

document.writeln(`<p>${you}</p>`);

document.writeln(`<p>${add(9)}</p>`);

function greetings(a = `Unknown`, b = `Unknown`, c = `unknown`) {
  document.writeln(`<p>Hola ${a} ${b} ${c}</p>`);
  return;
}

greetings("Fauzi");

function sum(...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  return total;
}

const angka = sum(9, 99, 99, 99, 9, 9);

document.writeln(`<p>${angka}</p>`);

const fungsion = sum;

document.writeln(`<p>${fungsion(12, 3, 4, 3, 2, 3)}</p>`);

const nyan = function () {
  return `<p>Hello World</p>`;
};

const wilson = nyan;
document.writeln(wilson());

function sayMyName(fungsi, player) {
  fungsi(player);
  return;
}

sayMyName(function (player) {
  [];
  document.writeln(`<p>Halo namaku ${player}</p>`);
}, "Fauzi");

function recursiv(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * recursiv(value - 1);
  }
}

document.writeln(`<p>${recursiv(7)}</p>`);

function* kuching() {
  yield 9 * 8;
  yield 6 ** 2;
  yield 8 + 9;
}

const dies = kuching();

document.writeln(`<p>${typeof dies}</p>`);
document.writeln(`<p>${dies}</p>`);

for (const ikuiku of dies) {
  document.writeln(`<p>${ikuiku}</p>`);
}

// console.info(this)

const frog = {
  naml: "Richman",
  fung: (nemo) => console.info(nemo),
  nung: function () {
    console.info(this.naml);
  },
};

frog.nung();

const objekt = {
  et: "zauzi",
  no: "90",
  klauSeire: function () {
    return this.et + this.no;
  },
};

document.writeln(objekt.klauSeire());

let i = 70;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(i);

const arrey = [1, 2, 3, 4, 5];

const [a, b, c, d, ...e] = arrey;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const thunder = {
  player: "Jirolupat",
  isolate: 2009,
  cassa: {
    nova: 98,
  },
  atomNum: 87,
};

const {
  player,
  atomNum,
  cassa: { nova = 0 },
} = thunder;

console.info(player);
console.info(atomNum);
console.info(nova);

!(function () {
  console.log(9);
})();

function Conv() {
  this.cliche = function () {
    return "why";
  };
  this.sayHello = function () {
    console.log("HALOO");
  };
}

Conv.prototype.sayBye = function () {
  console.log("BYE");
};

const freddy = new Conv();
const woody = new Conv();

console.log(freddy);
console.log(woody);

woody.sayBye();

const str1 = "Halo";
const str2 = "Fauzi";
const str3 = "Rama";

console.log("O".charCodeAt(0));

console.log(String.fromCharCode(98));

let counter = 0;

const jaguar = str1 === "Halo" ? counter++ : counter--;

console.log(counter);
console.log(typeof jaguar);

class Operation {
  constructor(str = "operation") {
    this.str = str;
  }

  sum(...any) {
    let total = 0;
    for (const element of any) {
      total += element;
    }
    return total;
  }
}

class President extends Operation {
  constructor(str = "oper", link = "link") {
    super(str);
    this.link = link;
  }
}

const op = new Operation();
console.log(op);
console.log(op.sum(2, 3, 4));

class Shape {
  constructor(name) {
    this.name = name;
  }
  paint() {
    console.log(this.name, "Bentukan");
  }
}

class Lingkaren extends Shape {
  paint() {
    super.paint();
    console.log(this.name, "Lingkerennn");
  }
}

const Bentuk1 = new Shape("Lingkoren");
Bentuk1.paint();

const Lingk = new Lingkaren("Buletan");
Lingk.paint();

var intern = "khalo";

const BankAccount = {
  _balance: 20000,

  get balance() {
    console.log("Mengecek Saldo...");
    return this._balance;
  },

  set balance(amount) {
    if (typeof amount !== "number") {
      console.log("Harus angka!");
      return;
    }

    if (amount < 0 && Math.abs(amount) > this._balance) {
      console.log("Saldo tidak cukup");
      return;
    }

    this._balance += amount;
    console.log(
      `Transaksi berhasil : ${amount > 0 ? "Deposit" : "Penarikan"} ${Math.abs(
        amount
      )}`
    );
  },
};

const amount = 98000;

class Amount {
  #balance = 0;

  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  #viewBalance() {
    return this.#balance;
  }
}

const ray = new Amount(1000);
console.log(ray);

class Guru {
  static fuel = 9;
}

const kalau = new Guru();
console.log(kalau);

let mono;

console.log(mono ? "maujud" : "nggak ada");

const n = 9.2;

console.log(Number.isInteger(n));

document.writeln(`${Number.EPSILON}`);

// berarti ada 4 cara mendeklarasikan sebuah method

class MethodSatu {
  // ini praktik paling bagus, karena *pakai class* dan *nempel ke proto*
  fungsiMethod1() {
    console.log("HIJI");
  }
}

class MethodDua {
  constructor() {
    this.fungsiMethod2 = () => console.log("DUA");
  } // ini kurang bagus, karena *pakai class* tapi *nempel ke instance*
}

function MethodTiga() {}

MethodTiga.prototype.fungsiMethod3 = () => console.log("TILU"); // nah ini mending walaupun *pakai constructor function*, tapi dia *nempel ke proto*

function MethodEmpat() {
  this.fungsiMethod4 = () => console.log("OPAT"); // ini paling ga bagus karena deklarasi *pakai constructor function* dan *nempelnya ke instance*
}

const met1 = new MethodSatu();
const met11 = new MethodSatu();
const met2 = new MethodDua();
const met22 = new MethodDua();
const met3 = new MethodTiga();
const met33 = new MethodTiga();
const met4 = new MethodEmpat();
const met44 = new MethodEmpat();

console.log(met1.fungsiMethod1 === met11.fungsiMethod1 ? "Benar" : "Salah"); // proto = true
console.log(met2.fungsiMethod2 === met22.fungsiMethod2 ? "Benar" : "Salah"); // instance = false
console.log(met3.fungsiMethod3 === met33.fungsiMethod3 ? "Benar" : "Salah"); // proto = true
console.log(met4.fungsiMethod4 === met44.fungsiMethod4 ? "Benar" : "Salah"); // instance = false

function KonstruktorTinggi(panggilan) {
  this.GoodBye = () => console.log(panggilan);
}

function KonstruktorRendah(panggilan, angkaID) {
  KonstruktorTinggi.call(this, panggilan); // kenapa ada keyword this disitu, dan menunjuk ke siapakah this ini?
  this.angkaID = angkaID;
}

// kalau misalkan gini

function KonstruktorTertinggi() {
  this.Hello;
}

function KonstruktorSedang() {
  KonstruktorTertinggi.call(this);
}

function KonstruktorTerendah() {
  KonstruktorSedang.call(this);
}

// trus bikin new object dari KonstruktorTerendah

// KonstruktorTerendah.prototype.prototype.suatuMethod = () => {} // apakah
// bisa untuk menambah langsung proto dari Konstruktor tertinggi menggunakan
// gini, jadi nempelnya ke proto-nya konstreuktor tertinggi?

class KelasBang {}

KelasBang.prototype.surname;

// kalau kita mau bikin class dan butuh parameter, kan constructornya itu mengandung
// this kan ya, dan yang dari parameter tadi dimasukkan ke property this tadi
// (yang nempel ke instance). kaya gini nih

// class KelasBaroe {
//   constructor(manggil) {
//     this.dataAwal = manggil
//   }
// }

// nah apakah bisa misalnya kita gausah pake this, jadi dataAwal itu ditaruh diluar
// constructor, trus kita mau masukin parameter manggil tadi ke dataAwal kaya dibawah
// ini, apakah bisa?

class KelasBaroe {
  constructor(manggil) {
    this.manggil = manggil;
    this.jaguar = manggil * 90;
  }

  jaguarValue() {
    // jadinya ini bakal jadi method (nempel di prototype?)
    return this.jaguar;
  }
}

const ujan = new KelasBaroe(9);

console.log(ujan.__proto__.hasOwnProperty("jaguarValue"));

console.log(ujan);

class A {
  sayHi() {
    console.log("Hi from A");
  }
}

class B extends A {
  sayHi() {
    super.sayHi();
    console.log("Hi from B");
  }
}

const gui = new B();

gui.sayHi();

console.log(gui);

class Peron {
  constructor(rail, electric) {
    this.rail = rail;
    this.electric = electric;
  }
}

class Tapsiun extends Peron {
  constructor(buset) {
    super(buset, "Endog");
    this.buset = buset;
  }
}

const traper = new Tapsiun("908");

console.log(traper);

class Agama {
  pray() {
    console.log("berserah kepada Tuhan");
  }
}

class Islam extends Agama {
  #aliran;
  constructor(aliran) {
    super();
    this.#aliran = aliran;
  }

  pray() {
    super.pray();
    console.log("sujud");
  }

  get aliran() {
    return this.#aliran;
  }

  set aliran(value) {
    this.#aliran =
      typeof value === "string" || value === ""
        ? value
        : console.error("Aliran Tidak Valid!");
  }
}

class Kristen extends Agama {
  pray() {
    super.pray();
    console.log("misa");
  }
}

const saifuddin = new Islam("Sunni");
const imanuella = new Kristen();

console.log(saifuddin);
console.log(imanuella);

saifuddin.pray();
imanuella.pray();

console.log(saifuddin.aliran);

saifuddin.aliran = "Syiah"; // <- ini cara manggil setter

console.log(saifuddin.aliran);

saifuddin.aliran = 999;

console.log(saifuddin.aliran); // ini kenapa undefined, padahal kan kalau gitu mah tinggal gausah berubah, tetep Syiah aja kenapa, kobisa jadi undefined?

saifuddin.aliran = "Ahlussunnah Waljamaah";

console.log(saifuddin.aliran);

class DataDiri {
  firstname;
  surname;
  age;
  #bornYear;

  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.surname = lastname;
    this.age = age;
    this.#bornYear = 2025 - this.age;
  }

  get bornYear() {
    return this.#bornYear;
  }
}

const fauzi = new DataDiri("Muhammad", "Ramadhan", 19);

console.log(fauzi.bornYear);
console.log(fauzi);

class KelasTertinggi {
  constructor() {
    this.kedudukan = "tinggi";
  }
}

class KelasSedang extends KelasTertinggi {
  constructor() {
    super();
    this.kedudukan = "sedang";
  }
}

class KelasRendah extends KelasSedang {
  constructor() {
    super();
    this.kedudukan = "rendah";
  }
}

const hasilKelas = new KelasRendah();

console.log(hasilKelas instanceof KelasRendah);
console.log(hasilKelas instanceof KelasSedang);
console.log(hasilKelas instanceof KelasTertinggi);
console.log(hasilKelas instanceof Object);

console.log(typeof null === "object");

class KelasBaruLagi {
  static fungsiLagi() {
    return "inilah fungsi statis";
  }
  static property = "PROP STATIS BRO";
  static fungsiNempelDiProto = "nah ini sih tapi bukan fungsi";

  fungsiNempelDiProto() {
    return "inimah nempel di proto";
  }
}

const objektBaru = new KelasBaruLagi();
console.log(objektBaru);

console.log(KelasBaruLagi.fungsiLagi());
console.log(KelasBaruLagi.property);

console.log(KelasBaruLagi.fungsiNempelDiProto);

console.log(objektBaru.fungsiNempelDiProto());

const hilang = Math.LOG2E;

function cekUmur(umur) {
  if (umur < 17) {
    throw new Error("Umur tidak cukup");
  } else {
    return "Silakan Masuk";
  }
}

console.log(cekUmur(90));

try {
  console.log("9");
  const makan = lapar;
  console.log("90000");
} catch (e) {
  console.log(e);
  console.log(`Error ditangkap: ${e.message}`);
}

console.log(90808);

class Bahaya extends Error {
  constructor(param, field) {
    super(param);
    this.field = field;
  }
}

const guy = new Bahaya("Jangan!");
// throw guy;

/**
 *
 * COUNTER ITERATOR RESULT memenuhi kontrak IteratorResult
 *
 */

class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

/**
 *
 * COUNTER ITERATOR memenuhi kontrak Iterator
 *
 */

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true); // kenapa ini harus pakai kata kunci return
      } else {
        return new CounterIteratorResult(this.value, false); // ini juga nih
      }
    } finally {
      this.value++; // ini masuk finally karena udah ke return duluan kan di atas, nah kenapa harus pakai return?
    }
  }
}

/**
 *
 * COUNTER memenuhi kontrak Iterable
 *
 */

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counting = new Counter(1, 10);
console.log(typeof counting); // berarti counting ini object tapi dia iterable??

for (const element of counting) {
  console.info(element);
}

const input = "a12342";
const number = Number(input);
console.info(!isNaN(number));

console.info(Number.EPSILON);
console.info(1 / Number.MIN_VALUE);
console.info(typeof Infinity);

console.info(Number.MAX_VALUE);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(0.1 + 0.2 - 0.3);
console.log(0.2 - 0.1);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const kjokkenmoddinger = 192783918n;
console.log(Number.isSafeInteger(kjokkenmoddinger));

console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER);
console.log(0 / 0);
console.log(Math.sqrt(-1));

console.log(Number.parseInt(0.1 + 0.2));

const redem = 190000;

console.log(redem.toLocaleString());

console.log(redem.toString(16));

console.log(Number(0x2e630));

const jake = Number(188);
const noah = new Number(188);
console.log(typeof jake);
console.log(typeof noah);

console.log("Banyak".toUpperCase());
console.log("Banyak".toLowerCase());

const zhongguo = new String("ApaCoba");
console.log(typeof zhongguo);

console.log(String.raw`${jake}, sebuah angka.`);
console.log("Muhammad Fauzi Ramadhan".at(-1));
console.log("Muhammad Fauzi Ramadhan".charAt(2));

let namaDepan = "Muhammad";
let namaTengah = "Fauzi";
let namaBelakang = "Ramadhan";
console.log(namaDepan.concat(namaTengah).concat(namaBelakang).concat(90));

console.log(namaDepan.endsWith("d"));
console.log(namaDepan.includes("m"));
console.log(namaDepan.indexOf("ma"));

namaDepan = namaDepan.toUpperCase();

console.log(namaDepan);
const arrNama = "Muhammad Fauzi Ramadhan".split(" ");
console.log(typeof arrNama);
console.log(arrNama);

/**
 * REGULAR EXPRESSION
 */

console.log(/.\d\s/.test("90"));
/\s/.test("90 ") ? console.log("ada") : console.log("tiada");
console.log(/\w/.test("90"));
console.log(/\w{2,}/.test("llkfk"));
console.log(/\s\d.\w+\s*/.test(" 2lkfkp"));
console.log(/\w+$/.test("la aa"));
console.log(/[a-o]/.test("l "));
const result = /(\d{4})-(\d{2})-(\d{2})/.exec("2025-10-17");
console.log(result);

const array = "Muhammad-Fauzi-Ramadhan".split("-");

for (const element of array) {
  console.log(element);
}

console.log(array.length);

const nami = "    Muhammady Ouse  ";
console.log(nami);
console.log(nami.trim());

const meneer = new Array();
meneer.push("12");
console.log(Array.isArray(namaDepan));
console.log(Array[Symbol.species]);
const jewel = Array.of("f", "a", "u", "z", "i");
console.log(jewel);

array.forEach((value, index) => console.log(`${index}: ${value}`));

console.log(array.shift());
console.log(array.pop());
console.log(array.pop());

const bilangan = [1, 1, 1, 2, 4, 8, 12, 18];

console.log(bilangan.find((value) => value > 9));
console.log(bilangan.findIndex((value) => value > 90));
console.log(bilangan.indexOf(1));
console.log(bilangan.lastIndexOf(1));

const hasilArr = bilangan.filter((value) => value < 5);
console.log(hasilArr);

/**
 * Muhammad Fauzi Ramadhan © 2025, All rights reserved.
 * Regular Expression for Indonesian Plate Licence Number Validation
 */

const platNomor = new RegExp(
  [
    "(?:(?![CIJOQUVXY])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // P. Jawa
    "(?:B(?![CFIJOQRSTUVWXYZ])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // P. Sumatera
    "(?:A(?=[ABDEG])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // Mataraman
    "(?:D(?![FIJOQSUVXYZ])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // Sulawesi, Maluku, Nusa Tenggara
    "(?:E(?=[ABD])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // Sumbawa-Sumba-Flores
    "(?:K(?=[BHTU])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // Kalimantan
    "(?:P(?=[ABGSTY])[A-Z]\\s*\\d{1,4}\\s*(?!X)[A-Z]{1,3})", // Papua
  ].join("|"),
  "g"
);

platNomor.test("BM 2983 SKK")
  ? console.log("PLAT NOMOR SESUAI STANDAR!")
  : console.log("PLAT NOMOR TIDAK SESUAI STANDAR!!");

const dataGua = {
  Name: {
    LastName: "Ramadhan",
    FirstName: "Muhammad",
    MiddleName: "Fauzi",
  },
  Nickname: ["Fauzi", "Rama"],
  DateOfBirth: {
    Year: 2006,
    Month: undefined,
    Day: undefined,
  },
  Address: {
    Country: "Indonesia",
    Province: "Kepulauan Riau",
    Regency: "Karimun",
    Address: "Jl. A. Yani",
  },
  Interests: ["Front-End Development", "Back-End Development"],
};

const jasonFauzi = JSON.stringify(dataGua);
console.log(jasonFauzi);

const objFauzi = JSON.parse(jasonFauzi);
console.log(objFauzi);

class dataOrang {
  constructor() {
    this._Name = {
      FirstName: undefined,
      MiddleName: undefined,
      SurName: undefined,
    };
    this._Nickname = [];
    this._DateOfBirth = {
      Year: undefined,
      Month: undefined,
      Day: undefined,
    };
    this._Gender = undefined;
    this._Address = {
      Country: undefined,
      Province: undefined,
      City: undefined,
    };
    this._Interest = [];
  }

  // Fullname

  get FullName() {
    return `${this._Name.FirstName} ${this._Name.MiddleName} ${this._Name.SurName}`;
  }

  FirstName(value) {
    this._Name.FirstName = value;
  }
  MiddleName(value) {
    this._Name.MiddleName = value;
  }
  SurName(value) {
    this._Name.SurName = value;
  }

  // Nickname

  Nickname(...value) {
    for (const element of value) {
      this._Nickname.push(element);
    }
  }

  // Date Of Birth

  BirthDay(value) {
    this._DateOfBirth.Day = value;
  }
  BirthMonth(value) {
    this._DateOfBirth.Month = value;
  }
  BirthYear(value) {
    this._DateOfBirth.Year = value;
  }

  set Gender(value) {
    this._Gender = value ? "Male" : "Female";
  }

  // Address

  Country(value) {
    this._Address.Country = value;
  }
  Province(value) {
    this._Address.Province = value;
  }
  City(value) {
    this._Address.City = value;
  }

  // Interest

  Interest(...value) {
    for (const element of value) {
      this._Interest.push(element);
    }
  }
}

const Nurul = new dataOrang();
Nurul.FirstName("Nurul");
Nurul.MiddleName("Inayah");
Nurul.SurName("Khairiyah");
Nurul.Nickname("Nurul", "Aya");
Nurul.Country("Indonesia");
Nurul.Province("Jawa Barat");
Nurul.City("Tasikmalaya");
Nurul.Interest("hukum", "advokasi");
Nurul.BirthDay(20);
Nurul.BirthMonth(2);
Nurul.BirthYear(2007);
Nurul.Gender = false;

console.log(JSON.stringify(Nurul));

console.log(typeof (12n + 98n) === "bigint");

let unixTimeZero = Date.parse("2006-10-05T09:30:00Z");
const nowDate = new Date(2006, 9, 5, 9, 30, 49, 879);
console.log(nowDate);

console.log(new Date(1000000000000));
console.log(Date.now());
console.log(new Date().getDate());

console.log(new Date(Date.now()).getTime());

// YYYY-MM-DDTHH:MM:SS.SSSZ

console.log(Date.parse("2006-10-29T19:18:39.129+07:00"));

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

const booleaan = new Boolean();
console.log(booleaan instanceof Object);

const objektNew = Object.create(booleaan);
console.log(objektNew);

const maps = new Map();
console.log(maps);

maps.set("Name", "Fauziye");
maps.set("Address", "Karimun");

console.log(maps);
console.log(typeof maps);
console.log(maps.get("Name"));
console.log(maps.get("Address"));

maps.forEach((value, key) => console.log(`${key}: ${value}`));

const sym1 = Symbol("Fauzi");
const sym2 = Symbol("Fauzi");

console.log(sym1);
console.log(sym2);

console.log(sym1 === sym2);

const first = Symbol();
const last = Symbol();

const personne = {};
personne[first] = "Fauzi";
personne[last] = "Ramadhan";

console.log(personne);
console.log(personne[first]);

const pelat = platNomor.exec(
  "Pria tersebut memiliki plat nomor B1355KZN, dan D2877LDM"
);
console.log(pelat);

const regec = /fz/gi;
let rokok = regec.exec("pjpafsjoiejifaninzFZnoinfoizfzfaoijaeFzpfoj");
rokok = rokok ?? "TIDAK DITEMUKAN";
console.log(rokok);

const bener = platNomor.test("Q4769SK");
bener
  ? console.log("PELAT NOMOR VALID")
  : console.log("PELAT NOMOR TIDAK VALID");

function cekPelat(licensePlate) {
  switch (true) {
    case /^A\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Banten");
      break;
    case /^(AA)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Magelang/Kebumen/Purworejo/Wonosobo/Temanggung");
      break;
    case /^(AB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("DI Yogyakarta");
      break;
    case /^(AD)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log(
        "Surakarta/Karanganyar/Wonogiri/Klaten/Boyolali/Sragen/Sukoharjo"
      );
      break;
    case /^(AE)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Magetan/Madiun/Ngawi/Ponorogo/Pacitan");
      break;
    case /^(AG)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Nganjuk/Blitar/Kediri/Trenggalek/Tulungagung");
      break;
    case /^B\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Jadetabek");
      break;
    case /^(BA)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sumatera Barat");
      break;
    case /^(BB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sumatera Utara Bag. Barat (Tapanuli)");
      break;
    case /^(BD)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Bengkulu");
      break;
    case /^(BE)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Lampung");
      break;
    case /^(BG)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Palembang");
      break;
    case /^(BH)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Jambi");
      break;
    case /^(BK)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sumatera Utara Bag. Timur");
      break;
    case /^(BL)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Aceh");
      break;
    case /^(BM)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Riau");
      break;
    case /^(BN)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kep. Bangka Belitung");
      break;
    case /^(BP)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kepulauan Riau");
      break;
    case /^D\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Bandung/Cimahi");
      break;
    case /^(DA)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kalimantan Selatan");
      break;
    case /^(DB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Utara");
      break;
    case /^(DC)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Barat");
      break;
    case /^(DD)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Selatan bag. Selatan");
      break;
    case /^(DE)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Maluku");
      break;
    case /^(DG)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Maluku Utara");
      break;
    case /^(DH)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Timor");
      break;
    case /^(DK)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Bali");
      break;
    case /^(DL)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sangihe/Talaud/Siau-Tagulandang-Biaro");
      break;
    case /^(DM)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Gorontalo");
      break;
    case /^(DN)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Tengah");
      break;
    case /^(DP)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Selatan bag. Utara");
      break;
    case /^(DR)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Lombok");
      break;
    case /^(DT)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Tenggara");
      break;
    case /^(DW)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sulawesi Selatan bag. Tengah");
      break;
    case /^E\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Cirebon/Kuningan/Majalengka/Indramayu");
      break;
    case /^(EA)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sumbawa");
      break;
    case /^(EB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Flores");
      break;
    case /^(ED)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sumba");
      break;
    case /^F\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Bogor/Sukabumi/Cianjur");
      break;
    case /^G\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Tegal/Brebes/Pemalang/Pekalongan/Batang");
      break;
    case /^H\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Semarang/Kendal/Demak/Salatiga");
      break;
    case /^K\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kudus/Pati/Rembang/Blora/Jepara/Grobogan");
      break;
    case /^(KB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kalimantan Barat");
      break;
    case /^(KH)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kalimantan Tengah");
      break;
    case /^(KT)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kalimantan Timur");
      break;
    case /^(KU)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Kalimantan Utara");
      break;
    case /^L\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Surabaya");
      break;
    case /^M\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Madura");
      break;
    case /^N\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Malang/Batu/Lumajang/Probolinggo/Pasuruan");
      break;
    case /^P\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Jember/Banyuwangi/Bondowoso/Situbondo");
      break;
    case /^(PA)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua");
      break;
    case /^(PB)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua Barat");
      break;
    case /^(PG)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua Pegunungan");
      break;
    case /^(PS)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua Selatan");
      break;
    case /^(PT)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua Tengah");
      break;
    case /^(PY)\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Papua Barat Daya");
      break;
    case /^R\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Cilacap/Banyumas/Purbalingga/Banjarnegara");
      break;
    case /^S\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Jombang/Bojonegoro/Tuban/Lamongan/Mojokerto");
      break;
    case /^T\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Karawang/Subang/Purwakarta");
      break;
    case /^W\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Sidoarjo/Gresik");
      break;
    case /^Z\d{1,4}(?!X)[A-Z]{1,3}$/i.test(licensePlate):
      console.log("Ciamis/Pangandaran/Tasikmalaya/Sumedang/Banjar/Garut");
      break;
    default:
      console.error("Plat Nomor Tidak Valid!");
      break;
  }
}

console.log("banana".match(/a/g));
console.log(platNomor.exec("B1233TGY"));

const obyek = {
  message: "Halo",
  behavior: "Makan",
};

const handler1 = {
  get(target, property, receiver) {
    if (property === "message") {
      return "world";
    }
    return Reflect.get(target, property, receiver);
  },
};

const proxy = new Proxy(obyek, handler1);

console.log(proxy.message);
console.log(proxy.behavior);

const tommy = { ages: 19 };
const handler0 = {
  get: (target, property) => {
    return target[property];
  },
  set: (target, property, value) => {
    target[property] = value;
    return true;
  },
};

const proksi = new Proxy(tommy, handler0);
console.log(proksi.ages);

proksi.ages++;
console.log(proksi.ages);

{
  const gatito = { count: 19 };
  const proxy = new Proxy(gatito, {
    get(target, prop) {
      console.log("Mengakses...", prop);
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log("Trap mengganti...", prop, value);
      return Reflect.set(target, prop, value);
    },
  });

  proxy.count = 1;
  console.log(proxy.count);
  console.log(Reflect.has(gatito, "count"));
  console.log(Reflect.has(gatito, "counter"));
}

{
  const url =
    "https://www.google.com/search?q=searching&oq=searching&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyDggCEAAYChgLGLEDGIAEMgcIAxAAGIAEMg4IBBAAGAoYCxixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDILCAgQABgKGAsYgAQyBwgJEAAYgATSAQgyMTQyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";
  const encoded = encodeURI(url);
  console.log(encoded);
  const decoded = decodeURI(encoded);
  console.log(decoded);
}

{
  const text = "Muhammad Fauzi Ramadhan";
  const base64 = btoa(text);
  console.log(base64);
  const decoded = atob(base64);
  console.log(decoded);
}

// telah selesai satu file untuk belajar, wish you good luck, Fauzi!
// silakan buat file baru, soalnya yang ini udah kebanyakan wkwk.
// total: 1445 baris!
