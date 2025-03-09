// let s = prompt(`Mời bạn nhập chuỗi s = `);

let s = " nhân quang";

console.log(`Chuỗi vừa nhập s = ${s}`);
console.log(`length là: ${s.length}`);

// // 1. Kiểm tra kiểu dữ liệu
// console.log(`Kiểu dữ liệu của chuỗi s là: ${typeof s}`);

// // 2. Độ dài của chuỗi
// console.log(`Độ dài chuỗi s là: ${s.length}`);

// // 3. Chuyển chuỗi thành list dùng split
// let lst = s.split();
// console.log(lst);
// console.log(`Kiểu dữ liệu của danh sách lst là: ${typeof lst}`);

// 4. Loại bỏ khoảng trắng trong chuỗi
let chuoiTrim = s.trim();
console.log(`Loại bỏ khảng trắng trong chuỗi: ${chuoiTrim}`);
console.log(chuoiTrim.length);

// 5. Chuyển chuỗi thành chữ Hoa
let chuoiHoa = chuoiTrim.toUpperCase();
console.log(`Chuỗi chuyển chữ Hoa là: ${chuoiHoa}`);

// 6. Chuyển kỹ tự đầu thành viết Hoa của các từ trong chuỗi

let lst = chuoiTrim.split(" ");

console.log(lst);
console.log(lst.length);

let chuoiChuyen = "";

for (let i = 0; i < lst.length; i++) {
  console.log(lst[i]);
  chuoiChuyen += lst[i].charAt(0).toUpperCase() + lst[i].substring(1) + " ";
  //   console.log(typeof lst[i]);
}

console.log(chuoiChuyen);

// console.log(lst);
// console.log(`Kiểu dữ liệu của danh sách lst là: ${typeof lst}`);

// Duyệt danh sách list
// for (let i; i <= lst.length; i++) {
//   console.log(lst[i]);
// }
