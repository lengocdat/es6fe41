let number = 1;
{
    let number = 2;
    console.log('log lan 1',number);
}
console.log('log lan 2',number);
const PI = 3.141641;
const sinhVien = {ma:1,ten:'nguyen van a'};
sinhVien.ma = 2;
sinhVien.ten ='nguyen van b';
// arrow function
// khai bao theo es5
let showMessage = function(mess){
    console.log(mess);
}
// khai bao them es6
let showMessageES6 = (mess) =>{
    console.log(mess);
}
// doi voi ham co lenh return
// es5
let tinhDiemTrungBinh = function(dToan,DLy,DHoa){
    return (dToan + DLy + DHoa)/3;
}
// es6
let tinhDiemTrungBinh = (dToan,DLy,DHoa) => (dToan + DLy + DHoa)/3;

// var hoTen = 'aaaa';
// window.hoTen = 'aaaa';(nhu nhau voi dong tren)
// khac biet ve ngu canh cua con tro this
let hocVien = {
    hoTen:'nguyen van a',
    lop:'Font End 41',
    layThongTinHocVien: function(){
        let hienThiThongTin = () => {
            console.log("Ho ten",this.hoTen,"lop:", this.lop);

        }
        hienThiThongTin();
    }
}
hocVien.layThongTinHocVien();
// rest param(toan tu ...)
// let hienThiThongTinHocVien = function(hoTen, lop){
//     console.log('ho ten '+ hoTen);
//     console.log('lop '+ lop)
// }
let hienThiThongTinHocVien = function(...rest){
    switch (rest.length)
    {
        case 2 : {
            console.log('ho ten ' + rest[0]);
            console.log('lop ' + rest[1]);
        };break;
        case 3 : {
            console.log('ma: ' + rest[0]);
            console.log('ho ten ' + rest[1]);
            console.log('lop  '+ rest[2]);
        };break;
        default : console.log('khong hop le')
    }
  
}
hienThiThongTinHocVien(1,'nguyen van a','fe 41',4);