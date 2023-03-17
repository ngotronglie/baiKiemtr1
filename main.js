//bai 2
console.log("bai 2")
document.write("Ngo Trong Liem - ph36778")


//bai 3:
console.log("bai 3")
var chieuCao = prompt("moi ban nhap chieu cao:")
var canNang = prompt("moi ban nhap can nang:")

var BMI = canNang / (chieuCao * chieuCao);

console.log(`BMI cua nguoi do la ${BMI} kg/m2`)
if(BMI>=25){
    console.log("\t=> ban bi thua can")
}else if(BMI>=18 && BMI<25){
    console.log("\t=> ban binh thuong")
}else if(BMI<18){
    console.log("\t=> ban gầy")
}

//bai 4:
console.log("bai 4:")
var myArr = [1, 2, 7, 9, 10, 12, 20, 8];
console.log(myArr)
function soChan(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }``
    }
    return newArr;
}


var ArrChan = soChan(myArr);
console.log(ArrChan);

myArr.splice(2, 1, 100);
console.log(myArr);


// bai 5:
console.log("bai 5")

let hs1={
    hoten : "Ngo trong Liem",
    diemTrungBinh: 7.6,

}

let hs2={
    hoten : "Hau",
    diemTrungBinh: 8.8,

}

let hs3={
    hoten : "MInh",
    diemTrungBinh: 8.5,

}

let hs4={
    hoten : "Quan",
    diemTrungBinh: 9.0,

}

let hs5={
    hoten : "Quang",
    diemTrungBinh: 10,

}

const danhSachLop = []

danhSachLop.push(hs1)
danhSachLop.push(hs2)
danhSachLop.push(hs3)
danhSachLop.push(hs4)
danhSachLop.push(hs5)

for(let i =0 ; i<danhSachLop.length;i++){
    console.log(`Bạn ${danhSachLop[i].hoten} được ${danhSachLop[i].diemTrungBinh} điểm trong block 2 Kỳ Spring 2023`)
}

