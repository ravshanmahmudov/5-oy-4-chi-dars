let texts =document.getElementById("textss")
let texts2 =document.getElementById("textss2")
let texts3 =document.getElementById("textss3")
let desc =document.getElementById("desc")
let desc2 =document.getElementById("desc2")
let desc3 =document.getElementById("desc3")
let p =document.getElementById("p")
let c =document.getElementById("c")
let d =document.getElementById("d")

texts.addEventListener('click',function(){
desc.style.backgroundColor = 'white'
p.style.color ='red'
})
texts2.addEventListener('click',function(){
 desc2.style.backgroundColor = 'white'
 c.style.color ='#000'
})
texts3.addEventListener('click',function(){
    desc3.style.backgroundColor = 'white'
    d.style.color ='#0, 204, 255'
})


// 1 chi massalla

// Talabalar ro'yxati berilgan. Har bir talaba obyekt ko'rinishida bo'lib, ism, yoshlari, baholari (massiv) bor. Eng yaxshi talabaning ismini qaytaruvchi funksiya yozing. Eng yaxshi talaba - bu barcha baholari o'rtachasi eng yuqori bo'lgan talaba.
// const students=[
// {ism: "ali",yoshi:20,baholari:[90,85,88]},
// {ism: "vali",yoshi:21,baholari:[90,85,87]},
// {ism: "sami",yoshi:22,baholari:[92,84,88]}
// ]
// function engYaxshiTalaba(students) {
//     let maxAverage = -Infinity;
//     let bestStudentName = '';
//     students.forEach(student => {
//         const average = student.baholari.reduce((total, mark) => total + mark, 0) / student.baholari.length;

//         if (average > maxAverage) {
//             maxAverage = average;
//             bestStudentName = student.ism;
//         }
//     });
//     return bestStudentName;
// }
// const engYaxshiTalabaIsmi = engYaxshiTalaba(students);
// console.log("Eng yaxshi talaba:", engYaxshiTalabaIsmi);

// 2chi massalla
// Mahsulotlar ro'yxati berilgan. Har bir mahsulot obyekt ko'rinishida bo'lib, nom, narx, mavjud (haqiqat yoki yolg'on) bor. Mavjud bo'lgan mahsulotlar ichidan eng qimmat mahsulotni qaytaruvchi funksiya yozing.
// const products=[
// {nomi: "kompyuter",narxi:1000,mavjud:true},
// {nomi: "telifon",narxi:700,mavjud: false},
// {nomi: "planshet",narxi:500,mavjud:true},
// {nomi: "monitor",narxi:300,mavjud:true}
// ]

// function engQimmatMahsulot(products) {
//     let engQimmat = products[0];
//     for (let i = 1; i < products.length; i++) {
//         if (products[i].mavjud && products[i].narxi > engQimmat.narxi) {
//             engQimmat = products[i];
//         }
//     }
//     return engQimmat;
// }
// const engQimmatMahsulot = engQimmatMahsulot(products);
// console.log("Eng qimmat mahsulot:", engQimmatMahsulot);

// 3 chi massalla

// Talabalar ro'yxati berilgan. Har bir talaba obyekt ko'rinishida bo'lib, ism, yoshlari, fanlari (fan nomlari massiv) bor. Har bir fanni necha talaba o'rganyotganini hisoblovchi funksiya yozing.
// const students=[
// {ism: "ali",yoshi:20,baholari:["matematika","fizika"]},
// {ism: "vali",yoshi:21,baholari:["matematika","informatika"]},
// {ism: "sami",yoshi:22,baholari:["fizika","informatka"]}
// ]
// function fanlarSoni(students) {
//     let fanlar = {};
//     students.forEach(student => {
//         student.fanlari.forEach(fan => {
//             if (fan in fanlar) {
//                 fanlar[fan]++;
//             } else {
//                 fanlar[fan] = 1;
//             }
//         });
//     });
//     return fanlar;
// }
// const fanlar = fanlarSoni(students);
// console.log("Har bir fanni necha talaba o'rganganligi:", fanlar);

// 4 chi massalla
// Ishchilar ro'yxati berilgan. Har bir ishchi obyekt ko'rinishida bo'lib, ism, lavozim, maosh bor. Maoshi eng katta bo'lgan lavozimni va ishchilar sonini qaytaruvchi funksiya yozing.
// const students=[
// {ism: "ali",lavozim:'dasturchi',maosh:2000},
// {ism: "vali",lavozim:'dizayner',maosh:1800},
// {ism: "sami",lavozim:'dasturchi',maosh:2200},
// {ism: "sami",lavozim:'loyixa boshqaruvchisi',maosh:2500}
// ]

// function engKattaMaoshLavozimi(employees) {
//     let maxSalary = -Infinity;
//     let maxSalaryPosition = '';
//     let count = 0;
//     employees.forEach(employee => {
//         if (employee.maosh > maxSalary) {
//             maxSalary = employee.maosh;
//             maxSalaryPosition = employee.lavozim;
//         }
//     });
//     employees.forEach(employee => {
//         if (employee.lavozim === maxSalaryPosition) {
//             count++;
//         }
//     });
//     return {
//         lavozim: maxSalaryPosition,
//         ishchilarSoni: count
//     };
// }
// const engKattaMaoshLavozimiInfo = engKattaMaoshLavozimi(employees);
// console.log( engKatta.lavozim);
// console.log( engKatta.ishchilarSoni);