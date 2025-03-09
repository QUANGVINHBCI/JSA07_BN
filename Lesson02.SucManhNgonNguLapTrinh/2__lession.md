# BÀI 2: NGÔN NGỮ JAVASCRIPT

1.  # Tìm hiểu về JavaScript

    - Là ngôn ngữ LT bậc cao phổ biến và được sử dụng để phát triển web
    - 1995 được chuẩn hóa bởi ECMA International: ES1 (1997) -> ES2 (1998) -> ES5 (2009) -> ES6 (2015 đến nay)
    - JS được thiết kế để làm việc cùng HTML và CSS mang lại sự linh hoạt và tương tác cao hơn cho trang web
    - Vị trí viết JS cho HTML?
    - Thứ tự code chạy trong lập trình web: trái -> phải, trên -> xuống
    - Cách xem JS hiển thị kết quả: console trên trình duyệt web
    - Giới thiệu một số hàm cơ bản trong JS: alert('giá trị'), prompt('giá trị), console.log('giá trị')

2.  # Biến và quy tắc đặt tên biến trong JS

    - Một biến là tên đại diện cho một giá trị nào đó và giúp chúng ta lưu trữ và thao tác trong chương trình
    - Cú pháp: <từ_khóa> <tên_biến> = <giá_trị>

             + <từ_khóa>: -> var, let, const (hằng số) -> sử dụng khai báo giá trị cố định không thay đổi trong chương trình hoặc khai báo cho kiểu object

    - Quy tắc đặt tên biến: CamelCase (quy tắc Lạc Đà) -> tên biến bắt đầu bằng chữ cái thường và tất cả các chữ cái đầu tiên của những từ tiếp theo sẽ viết HOA

      Ví dụ:
      let hoTen = 'MindX';
      conts doSoiNuoc = 100;

    - Thực hành khai báo biến:

    - Phạm vi của biến:

            + Biến toàn cục (Global Scope): Có thể truy cập từ bất kỳ đâu.
            + Biến cục bộ (Local Scope): Chỉ có thể truy cập trong hàm nơi nó được khai báo.
            + Biến khối (Block Scope): Chỉ có thể truy cập trong khối mã nơi nó được khai báo.

3.  # Data Type - Kiểu dữ liệu trong JS

    - Number: kiểu số học (số nguyên và số thập phân)
    - String: kiểu chuỗi ký tự
    - Boolean: kiểu logic (True/False)
    - Null: kiểu giá trị rỗng
    - Undefined: biến chưa được gán giá trị
    - Object: tập hợp các cặp key-value
    - NaN: Not a Number

    ==> Cách kiểm tra kiểu dữ liệu: typeof <tên_biến>

    - Thực hành các kiểu dữ liệu

    - Lưu ý: các giá trị nhập vào từ hàm prompt() --> Đều là kiểu string

4.  # Các phương thức cơ bản với kiểu chuỗi trong JS

    - Cộng chuỗi --> toán tử: <chuỗi_1> + <chuỗi_2>
    - Đếm số ký tự trong chuỗi --> <chuỗi>.length
    - Tách chuỗi --> <chuỗi>.split() --> Kết quả trả về là một mảng [giá_trị]

                + split()        --> Tách chuỗi không chỉ định ký tự phân cách
                + split(" ")    --> Tách chuỗi bằng khoảng trắng
                + split(",")    --> Tách chuỗi bằng dấu phẩy
                + split(",", 2) --> Tách chuỗi với giới hạn phần tử

    - Cắt chuỗi --> substring(start, end)

                + nếu start > end --> Hoán đổi vị trí
                + Nếu chỉ số là âm (-) thì sẽ chuyển thành 0
                + Nếu có 1 chỉ số mặc định cắt từ chỉ số đó đến hết chuỗi

    - Cắt chuỗi --> slice(start,end) --> cắt chuỗi hoặc mảng mà không làm thay đổi chuỗi(mảng) gốc.

    - Viết Hoa/Thường chuỗi --> <chuỗi>.toUpperCase() / <chuỗi>.toLowerCase()
    - Loại bỏ khoảng trắng --> <chuỗi>.trim()
    - ...

5.  # Thực hành: Đổi cách viết hoa trong văn bản
