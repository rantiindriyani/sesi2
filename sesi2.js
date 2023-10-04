// No 1 Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
console.log(" 1. membuat fristName, lastName, age, noMarried dengan CONST ")

const firstName = " Ranti ";
const lastName = " indriyani ";
const age = 26;
const isMarried = false;
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(isMarried)

// atau pakai let 
console.log(" 2. membuat fristName, lastName, age, noMarried dengan LET ")

let FirstName = " Ranti ";
let LastName = " Indriyani ";
let Age = 26;
let isMarried1 = true;
console.log(FirstName)
console.log(LastName)
console.log(Age)
console.log(isMarried1)

//atau pakai var 
console.log(" 3. membuat fristName, lastName, age, noMarried dengan VAR ")

var firstname = "Ranti"
var lastname = "indriyani"
var umur = 26;
var isMarried4 = false
console.log(`fristName : ${firstname} lastname : ${lastname} dan umur saya : ${umur} is Married : ${isMarried4}` )

// atau pakai String Template
console.log(" 4. membuat fristName, lastName, age, noMarried dengan STRING TEMPALTE ")

const namaDepan = 'Ranti'
const namaBelakang = 'indriyani'
const usia = 26;
const isMarried3 = 26
const template = `nama depan : ${namaDepan} nama belakang :  ${namaBelakang} dan umur saya : ${usia} noMarried : ${isMarried3 < 20} `
console.info(template)

//untuk menggabungkan nama depan dan nama belakang 
console.log(" 5. menggabungkan fristName, lastName dengan FUNCTION ")

var firstname = " Ranti"
function printFullName(){
    var lastname = " indriyani "
    return firstname + " " + lastname
}
console.log(" fullName " +printFullName())

//MENGGUNAKAN OPERATOR BOOLEAN UNTUK MENENTUKAN NOMARRIED 
console.log(" 6. membuat is married dengan boolean ")

const menikah = 28
const nomarried = 20

const sudahMenikah = menikah > 20
const belumMenikah = nomarried > 20

const KeputusanMenikah = sudahMenikah && belumMenikah
console.log(KeputusanMenikah)

