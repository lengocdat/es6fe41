// // let number = 1;
// // {
// //     let number = 2;
// //     console.log('log lan 1',number);
// // }
// // console.log('log lan 2',number);
// // const PI = 3.141641;
// // const sinhVien = {ma:1,ten:'nguyen van a'};
// // sinhVien.ma = 2;
// // sinhVien.ten ='nguyen van b';
// // // arrow function
// // // khai bao theo es5
// // let showMessage = function(mess){
// //     console.log(mess);
// // }
// // // khai bao them es6
// // let showMessageES6 = (mess) =>{
// //     console.log(mess);
// // }
// // // doi voi ham co lenh return
// // // es5
// // let tinhDiemTrungBinh = function(dToan,DLy,DHoa){
// //     return (dToan + DLy + DHoa)/3;
// // }
// // // es6
// // let tinhDiemTrungBinh = (dToan,DLy,DHoa) => (dToan + DLy + DHoa)/3;

// // // var hoTen = 'aaaa';
// // // window.hoTen = 'aaaa';(nhu nhau voi dong tren)
// // // khac biet ve ngu canh cua con tro this
// // let hocVien = {
// //     hoTen:'nguyen van a',
// //     lop:'Font End 41',
// //     layThongTinHocVien: function(){
// //         let hienThiThongTin = () => {
// //             console.log("Ho ten",this.hoTen,"lop:", this.lop);

// //         }
// //         hienThiThongTin();
// //     }
// // }
// // hocVien.layThongTinHocVien();
// // // rest param(toan tu ...)
// // // let hienThiThongTinHocVien = function(hoTen, lop){
// // //     console.log('ho ten '+ hoTen);
// // //     console.log('lop '+ lop)
// // // }
// // let hienThiThongTinHocVien = function(...rest){
// //     switch (rest.length)
// //     {
// //         case 2 : {
// //             console.log('ho ten ' + rest[0]);
// //             console.log('lop ' + rest[1]);
// //         };break;
// //         case 3 : {
// //             console.log('ma: ' + rest[0]);
// //             console.log('ho ten ' + rest[1]);
// //             console.log('lop  '+ rest[2]);
// //         };break;
// //         default : console.log('khong hop le')
// //     }

// // }
// // hienThiThongTinHocVien(1,'nguyen van a','fe 41',4);
// // // resParam
// // //object
// // let sinhVienA = {ma:1,ten:'nguyen van a'};
// // let sinhVienB = {...sinhVienA};// cap phat 1 o nho moi co nhung thuoc tinh cua B(sao chep gia tri ben trong cua obj hoac array)
// // let sinhVienB = {...sinhVienA,lop:'FrontEnd41'};//neu them thuoc tinh da co roi thi no se de len thuoc tinh cu
// // // sinhvienB.ten = 'nguyen thi b';
// // console.log('sinhVienA', sinhVienA.ten);
// // console.log('sinhVienB', sinhVienB);
// // //array tuong tu o tren
// // let arrNumA =[1,2,3,5];
// // let arrNumB = [...arrNumA,4,arrNumA];
// // arrNumB.push(4);
// // console.log('arrNumA',arrNumA);
// // console.log('arrNumB',arrNumA);
// // let sanPham = {
// //     ma:1,
// //     tenSP: 'Samsung galaxy note 10+',
// //     gia:1000,
// //     thongTinSanPham:{
// //         Rom:'256gb',
// //         CPU:'Snapdragon 855',
// //         Ram:'8GB'
// //     },
// //     hienThiThongTinSanPham:function(){
// //         console.log('Ma SP',this.ma);
// //         console.log('Ten SP',this.tenSP);
// //         console.log('Gia SP',this.gia);
// //     }
// // }
// // // let {tenSP,ma,gia,thongTinSanPham,hienThiThongTinSanPham}= sanPham;
// // // let {Rom} = sanPham.thongTinSanPham;
// // // hienThiThongTinSanPham();
// // let sinhVienArr = [1,'Nguyen van a','FrontEnd41'];
// // let [ma,ten,lop,hienThiThongTin] =[1,'nguyen van a','FrontEnd41',()=>{console.log(1,'nguyen van a')}];
// // console.log('ten');
// // hienThiThongTin();
// // es5
// // var ma = sanPham.ma;
// // var tenSP = sanPham.tenSP;
// // var gia = sanPham.gia;
// // es6
// // let {tenSP,ma,gia} = sanPham;

// // let getInfo = (ten ='truc', namSinh = 1998, tuoi= 2020-namSinh) =>{//truyen thi lay gia tri cua minh con ko truyen thi laly gia tri mac dinh
// //     console.log('ten: ', ten);
// //     console.log('tuoi: ', 2020 - namSinh)
// // }
// // getInfo('Khai',2000);
// // let propsMaSV = 'maSV';
// // let sinhVien123 = {
// //     ['maSV']:123,
// //     ['tenSV']:'Tran van teo'
// // }
// // // cac gia tri lay tu dom
// // let ma = '123';
// // let tenHV = 'Le Thi B';
// // let hienThiThongTinHocVien = () =>{console.log(hello)}

// // let hocVien = {
// //     ma,
// //     tenHV,
// //     hienThiThongTinHocVien
// // }
// // console.log('hocVien')
// //for in
// // let mangDienThoai = [
// // {ma:1,ten:'Sony Xperia XZ5', gai: 1500},
// // {ma:2,ten:'Iphone XS MAX', gai: 2000},
// // {ma:3,ten:'Samsung Galaxy note 10', gai: 3000}
// // ]
// // let mangDienThoaiob = {
// //     'a12323':{ma:1,ten:'Sony Xperia XZ5', gai: 1500},
// //     'fadf23':{ma:2,ten:'Iphone XS MAX', gai: 2000},
// //     'fasdda':{ma:3,ten:'Samsung Galaxy note 10', gai: 3000}
// // }
// // // for in: chay tren index
// // console.log('for-in')
// // for(let index in mangDienThoai){
// //     console.log(mangDienThoai[index]);
// // }
// // console.log('for-of')
// // for(let item of mangDienThoai){
// //     console.log('dien thoai ',item);
// // }
// // // for - in dung de duyet key  trong obj
// // // for-of dung cho mang
// // for(let key in mangDienThoaiob){
// //     console.log(mangDienThoai[key]);
// // }
// import { NhanVien, TruongPhong } from "./models/NhanVien.js";
// let truongPhong = new TruongPhong(1, "nguyen van b");
// console.log(NhanVien);
// console.log(TruongPhong);
// import NhanVienPrototype from'./models/NhanVien.js'
let mangSanPham = [
  { MaSP: 1, TenSP: "Sony Xperia XZ2", Gia: 17500000, HangSX: "Sony" },
  { MaSP: 2, TenSP: "Sony Xperia Y", Gia: 15500000, HangSX: "Sony" },
  { MaSP: 3, TenSP: "Sony Xperia Z", Gia: 55500000, HangSX: "Sony" },
  { MaSP: 4, TenSP: "goole Xperia XZ2", Gia: 32500000, HangSX: "Google" },
  { MaSP: 5, TenSP: "goole Xperia y", Gia: 13500000, HangSX: "Google" },
  { MaSP: 6, TenSP: "samsung Xperia XZ2", Gia: 51500000, HangSX: "SamSung" },
  { MaSP: 7, TenSP: "samsung Xperia XY2", Gia: 32150000, HangSX: "SamSung" },
  { MaSP: 8, TenSP: "samsung Xperia ZZ2", Gia: 23500000, HangSX: "SamSung" },
];
// filter
let mangDienThoaiSony = mangSanPham.filter(
  (sanPham) => sanPham.HangSX === "Sony"
);
console.log(mangDienThoaiSony);
let mangGiaTienLonHon17tr = mangSanPham.filter(
  (giaTien) => giaTien.Gia > 17000000
);
console.log(mangGiaTienLonHon17tr);
// find tra ra doi tuong dau tien thoa dieu kien arrow function thuong dung cho id,neu khong thoa tra ra undefine
let sp = mangSanPham.find((item) => item.MaSP === 8);
console.log(sp);
// findIndex tuong tu find tuy nhien  tra ra vi tri phan tu tim thay, khong tim thay ra ve -1
let index = mangSanPham.findIndex((item) => item.MaSP === 8);
console.log(index);
if (index !== -1) {
}
console.log(mangSanPham);
let mangCardSanPham = mangSanPham.map((item, index) => {
  return `<div class="card text-left">
      <img class="card-img-top" src="holder.js/100px180/" alt="">
      <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Body</p>
      </div>
    </div>}`;
});
console.log(mangCardSanPham);

let tongTien = mangSanPham.reduce((tongTien,item,index)=>{
    return tongTien += item.Gia;
},0)
console.log(tongTien);