# BÀI 1: HỆ THỐNG LƯỚI TRONG THIẾT KẾ GIAO DIỆN

1. # Ôn tập kiến thức cũ

2. # Giới thiệu về Display Grid

3. # Tìm hiểu về Grid Sizing (Kích thước lưới) và Grid Placement (Vị trí lưới)

4. # Thực hành xây dựng dự án Mondrian-Style Painting

<!--
    5 phút
    - Thực hiện điểm danh học viên -> LMS
    - GV giới thiệu khóa học, HV giới thiệu bản thân
    - GV nêu rõ nội quy lớp học: đúng giờ, nghe giảng và thực hành cùng GV. Không sử dụng điện thoại... Làm bài tập đầy đủ và bài tập phải chất lượng
    - GV giới thiệu tổng quan về khóa Web Advance: JS, GitHub, API
        +  JS: là ngôn ngữ lập trình bậc cao nhằm cung cấp tạo ra các trang web tương tác với người dùng
        + GitHub: là công cụ giúp quản lý mã nguồn (code) và lưu trữ mã nguồn web trực tuyến, chia sẽ mã nguồn
        + API: là giao thức cho phép các ứng dụng phần mềm giao tiếp với nhau
    - Nhấn mạnh các mốc quan trọng trong khóa học: Bài 5, 9 (CheckPoint - Kiểm tra) -> điều kiện cho Bài 14: Thuyết trình dự án cuối khóa
 -->

<!--
    5 phút
    1. Ôn tập kiến thức cũ:
    - Khóa cơ bản: sắp xếp các phần tử trên web -> Float (Left/Right) và FlexBox: flex-direction, justify-content, align-items... -> Gặp khó khăn?
    - Với trang web có nhiều phần tử? -> Sử dụng?
    - GV lấy ví dụ 2 page dùng FlexBox/Grid -> So sánh
        + FlexBox: các phần tử có chiều cao khác nhau, các hàng không đồng đều -> không nhất quán trong bố cục
        + Grid: csc hàng/cột luôn đều nhau bất kể height của các phần tử -> bố cục nhất quán và dễ dàng quản lý hơn
    - Tìm hiểu về Display Grid
 -->

<!--
    15 phút
    2. Giới thiệu về Display Grid
    - CSS Grid: là phương pháp sắp xếp và cấu trúc trang web dựa trên hệ thống ô lưới. Cho phép chia trang web thành các ô hình chữ nhật và điều khiển vị trí các phần tử trên trang web.
    - GV chiếu hình ảnh khác niệm về Grid CSS và giải thích:
        + Grid Line, Grid Cell, Grid Track(Column/Row), Grid Area
    - GV lấy vị dụ về trang web: dêm-grid-css-main -> Inspect (Ctrl + Shift + I)


    - Display Grid:
        + Là một tính năng mạnh mẽ trong CSS cho phép tạo ra các layout phức tạp với cấu trúc dạng lưới là các grid cell -> thiết kế giao diện trở lên linh hoạt và hiệu quả hơn

    - Cách hoạt động:
        + Grid Container: để sử dụng grid cần xác định một phần tử là Grid Container bằng cách sử dụng thuộc tính 'display: grid'
        + Grid Items: các phần tử con bên trong Grid Container sẽ tự động trở thành Grid Items

    - Các thuộc tính cơ bản:
        + grid-template-columns:    -> số lượng và kích thước các cột
        + grid-template-rows:       -> số lượng và kích thước các hàng
        + grid-gap:                 -> đặt khoảng cách giữa các hàng và cột
        + grid-are:                 -> xác định vị trí của một grid item trong Grid bằng cách chỉ định hàng và cột mà nó chiếm

    - GV cùng HV thực hành với Grid: tạo ra trang web với 8 hình chữ nhật

    - GV làm mẫu -> HV làm theo
    - HV nhận xét kết quả hiển thị

    - GV giải thích các thuộc tính CSS Grid:
        + display: grid
        + grid-template-columns: repeat(2, 1fr) // fraction (đơn vị tương đối)
        + grid-template-rows: repeat(4, 1fr)

    - Các phần tử trong trang web thường có kích thước không đều nhau -> Làm thế nào để các phần tử đó trong gọn gàng và dễ dàng quản lý?
 -->

 <!-- 
    5 phút
    3.1 Tìm hiểu về Grid Sizing (Kích thước lưới)
    - Grid Sizing: là quá trình xác định kích thước của các hàng/cột trong Grid Container
    - Bao gồm việc thiết lập chiều cao/chiều rộng và khoảng cách của các phần tử đó

    - GV lấy ví dự chia khoảng cách trong Grid
    - HV thực hành cùng GV và nhận xét về kết quả hiển thị

    - GV giải thích: 
        + grid-template-columns: auto auto auto
        + grid-template-columns: 200px 200px 400px
        + grid-template-row: 100px 300px
        + grid-column-gap: 10px
        + grid-row-gap: 20px

        -> Gộp code: grid-gap: 10px 20px

    - GV: đưa yêu cầu về z-index: 

    - GV chiếu hình ảnh Grid-Placement -> Hỏi HV
    Khi sắp xếp các phần tử trên web -> để các phần tử có vị trí và kích thước chính xác như trong hình?

  -->

  <!-- 
    15 phút
    - HV trả lời: Điều chỉnh kích thước width/height ... hay sử dụng position
    - GV: sử dụng Grid Line -> Column Line/Row Line
    - GV thực hành và hiển thị kết quả
    - HV thực hành và hiển thị kết quả

    - GV giải thích: 
        + grid-column-start:
        + grid-column-end:
        -> Code gọn: grid-column: 1/4

    - GV hướng dẫn thêm thuộc tính:
        + grid-column: span 2
        + grid-row: span 3

    -> Sử dụng grid-row: span 2; khi bạn chỉ cần xác định số hàng mà phần tử sẽ chiếm mà không cần quan tâm đến vị trí cụ thể. -> Nhanh gọn đơn giản

    -> Sử dụng grid-row-start và grid-row-end khi bạn cần kiểm soát chính xác vị trí bắt đầu và kết thúc của phần tử trong lưới -> yêu cầu kiểm soát chính xác vị trí

    - GV: hình ảnh layout phổ biến -> gán vị trí các phần tử vào đúng vị trí như hình?
    -> grid-template-areas:

-->

<!--
    5 phút
    3.3 Grid Areas
    - Grid Areas: cho phép định nghĩa các khu vực (areas) trong lưới của trang web.

    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 100px 300px 100px;
        grid-template-areas:
            "header header"
            "main contents"
            "footer footer ";
    }

    - GV chiếu hình yêu cầu HV thực hành
    .container {
    display: grid;
    grid-template-areas:
        "header"
        "navigation"
        "content sidebar"
        "footer ";
}

 -->

 <!-- 
    5 phút
    4. Thực hành xây dựng dự án Mondrian-Style Painting
    - GV: như vậy chúng ta đã cùng nhau tìm hiểu về Display Grid: để định vị các phần tử chính xác trong lưới -> Thực hành:
    - Đề bài: Xây dựng dự án Mondrian-Style theo mẫu sau:

    -GV: phân tích: Dự án gồm row/column (7/7)
        + Màu sắc chủ đạo: 
            Red:        #CA2B1D        
            Gold Earth: #F3CB44
            White:      #fff

    30 phút: 
    - GV cho HV thực hành dự án theo mẫu

    5 phút:
    - HV nộp lại phần bải làm dự án
    - GV: đến từng bài làm các nhân để kiểm tra và đánh giá tiến độ hoàn thành
        + 50%: HV còn thao tác chậm, cần cải thiện và chú ý thiết kế bố cục hiển thị các khối trước sau (ưu tiên xây dựng khung nửa phần trên trước rồi tới nửa phần dưới) -> Chỉnh sửa khoảng cách -> Màu sắc
        + 75%: HV áp dụng kiến thức về CSS Grid ở mức khá, cần rèn luyện thêm thao tác code nhanh nhẹn hơn
        + Tiến độ >= 90%: HV nắm chắc kiến thức về CSS Grid. Tiếp tục phát huy

    10 phút:
        - GV tổng kết kiến thức buổi học
        - GV nhắc nhở HV làm bài tập về nhà và nhớ DeadLine nộp bài và chuẩn bọ và tìm hiểu kiến thức bài tiếp theo
        - GV nhắc tiêu đề buổi học tiếp theo

 -->

            Chọn flex khi cần sắp xếp các phần tử theo một chiều
            Chọn grid khi cần một layout phức tạp với cả hàng và cột

# Nên sử dụng thuộc tính của Grid CSS để Responsive

            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
