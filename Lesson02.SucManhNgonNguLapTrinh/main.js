/**
    1. Khai báo biến sử dụng từ khóa: var, let, const
    - Khai báo biến và khởi tạo giá 
    let number = 20
    let fullName = 'Đăng Khôi'
    const nhietDoSoi = 100

    let lstHocVien = ['Gia Minh', 'Đăng Khôi', 'Văn Hưng']
    
    - Quy tắc đặt tên biến: theo quy tắc lạc đà

    2. Các kiểu dữ liệu
    - Number: số nguyên, số thực
    - String: chuỗi ký thực
    - Boolean: logic và nhận giá trị true/false
    - Object: kiểu đối tượng và giá trị trả về là cặp key-value
    - Null: kiểu dữ liệu đại diện cho giá trị trống rỗng hoặc không có giá trị. Dùng để chỉ định rằng biến không chứa giá trị hợp lệ
    - Undefined: khi biến chưa được khởi tạo sẽ trả về giá trị Undefined
    - NaN: Not A Number là kiểu giá trị sẽ không chuyển sang kiểu number được
    - Kiểm tra kiểu dữ liệu: typeof <tên_biến>

    3. Phạm vi của biến
    - Phạm vi toàn cục: sử dụng từ khóa Global
    - Phạm vi cục bộ: sử dụng từ khóa: Local
    - Phạm vi trong block: biến được khai báo trong block\
    
    4. Các hàm có bản trong JS
    - Hàm alert(): hiện thông báo
    - Hàm prompt(): hiện thông báo cho phép người dùng nhập liệu
    - Hàm console.log(): xuất thông báo trong cửa sổ console

    --> Lưu ý: nếu là phương thức phải có ()

    5. Ép kiểu trong JS
    - Hàm Number(): chuyển sang kiểu Number
    - Hàm toString(): chuyển sang kiểu chuỗi

    6. Các thao tác với chuỗi (String)
    - length: kiểm tra độ dài
    - Gộp (nối) chuỗi sử dụng toán tử +
    - Trim(): dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi
    - toLocaleLowerCase(): chuyển chuỗi thành chữ thường
    - toUpperCase(): chuyển chuỗi thành chữ Hoa
    - substring(start, end): cắt lấy chuỗi con 
    - Duyệt chuỗi dùng chart(index)
    - split()
    
    7. Chuyển đổi qua lại giữa chuỗi và mảng (string - array)

    - Sử dụng các phương thức: split(), join(), array.from()
        + spit(): chuyển chuỗi sang mảng dựa trên ký tự phân cách
        + join(): chuyển mảng sang chuỗi 

        
    8. Duyệt chuỗi và duyệt mảng

        1. Sử dụng for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }

            const chuoi = "Hello World";
            for (let i = 0; i < chuoi.length; i++) {
            console.log(chuoi[i]); // In từng ký tự
            }


            const mang = ["apple", "banana", "cherry"];
            for (let i = 0; i < mang.length; i++) {
            console.log(mang[i]); // In từng phần tử
            }

            


        2. Sử dụng for (const element of object) {
            console.log(element);
        }


        const chuoi = "Hello World";
        for (const kyTu of chuoi) {
        console.log(kyTu); // In từng ký tự
        }


        const mang = ["apple", "banana", "cherry"];
        for (const phanTu of mang) {
        console.log(phanTu); // In từng phần tử
        }




        3. Sử dụng array.forEach(element => {
            console.log(element);
        });

        Array.from(chuoi).forEach =>(kyTu =>{
            console.log(kyTu);    
        })


        const mang = ["apple", "banana", "cherry"];
        mang.forEach(phanTu => {
            console.log(phanTu); // In từng phần tử
        });

    9. Mảng là loại đối tượng đặc biệt trong JS và có thể chứa kiểu đối tượng (Object)
        
        const danhSachHocVien = [
            {name: 'Gia Minh', age: 16},
            {name: 'Đăng Khôi', age: 18},
        ]
 */

let fullName = "gia minh";

// Kiểm tra độ dài chuỗi
console.log(fullName.length);

// Loại bỏ khoảng trắng ở đầu chuỗi và cuối chuỗi
console.log(fullName.trim());

// Chuyển chuỗi thành chữ thường
console.log(fullName.toLowerCase());

// Chuyển chuỗi thành chữ Hoa
console.log(fullName.toUpperCase());

// Cắt lấy chuỗi con
let str1 = fullName.substring(0, 3);
console.log(`Chuỗi mới cắt được là: ${str1}`);

// Tác chuỗi với split() --> Giá trị nhận được là array

let str2 = fullName.split(" ");
console.log(str2);

// Duyệt Chuỗi
for (let i = 0; i <= fullName.length; i++) {
  console.log(fullName.charAt(i));
}

console.log(fullName.charAt(0));

// // Duyệt mảng
// let str3 = "";
// for (let i = 0; i <= str2.length; i++) {
//   str3 += str2[i].charAt(0).toUpperCase() + str2[i].substring(1) + " ";
//   console.log(str3);
// }

// Mối liên hệ giữa chuỗi và mảng

let lstHocVien = ["Gia Minh", "Đăng Khôi", "Văn Hưng"];
console.log(`Danh sách học viên dạng mảng ban đầu: `);
console.log(lstHocVien);
let strHocVien = lstHocVien.join(", ");
console.log("Chuỗi tên Học viên chuyển từ mảng sang là: ");
console.log(strHocVien);
let lstHocVien2 = strHocVien.split();
console.log("Danh sách học viên dạng mảng chuyển từ chuỗi sang là: ");
console.log(lstHocVien2);
