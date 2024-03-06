**Các công cụ cần thiết**
- Trình duyệt: Google Chrome
- IDE: VS Studio Code
**Tạo templates HTML trong VS**
- Tạo file index.html
- Gõ "!" + Enter

I. Tổng quan
    1. Thẻ \<script>
        -src: \<scriptsrc="link_to_js_file"> \<script>
        ví dụ:
        \<script src="./Script.js">
            // . là thư mục hiện tại
        \</script>\
    2. Cách tìm kiếm tài liệu
        - WS3 School
II. Kiến thức
    1. Variable(Biến)
        Khai báo biến: let a = 1;
        Kiểu dữ liệu nào cũng khai báo let
        Ví dụ:
>        let x;       // Now x is undefined
>        x = 5;       // Now x is a Number
>        x = "John";  // Now x is a String

Khi khai báo String nên khai báo trong cặp dấu \`\`(Trong cặp dấu \` \` dùng " hay ' không quan trọng nữa)
Ví dụ:
> alert('Hello, world!');
let message = `Ahihi đồ's chó "Ahihi`;
alert(message);

In ra một chuỗi các biến trong JS nên dùng cú pháp như sau:
> let x = 5, y =6, z = 7;
> console.log(`x =`, x, `y =`, y, `z =`, z);

Kết quả:
![](./pictures/xyz.PNG)

Nếu dùng như Java:
> console.log(`x = ` + x + ` y = ` + y + ` z = ` + z);

Vẫn oke nhaaaa

