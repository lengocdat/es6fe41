// es5
// var SinhVien = function (){
//     this.ma ='';
//     this.hoTen ='';
//     this.hienThiThongTin = function(){
//         console.log('ma',this.ma);
//         console.log('hoTen',this.hoTen);
//     }
// }
// es6
export class NhanVien {
  ma = "";
  hoTen = "";
  constructor(maSV, tenSV) {
    //vua khoi tao vua goi luon
    this.ma = maSV;
    this.hoTen = tenSV;
  }
  hienThiThongTin() {
    console.log("ma", this.ma);
    console.log("hoTen", this.hoTen);
  }
}
export class TruongPhong extends NhanVien {
  constructor(maSV, tenSV) {
    super(maSV, tenSV);
  }
}
export default NhanVien;
