
// border: dinh nghia do day duong vien xung quanh
// witdh: mo ta chieu rong
// cellspacing: khoang cach giua cac o trong bang
// cellpadding: khoang cach giua cac noi dung cua o va vien cua o
let a = "<table border= '1' width='300' cellspacing= '0' cellpadding= '3'>";
for (let i = 1; i<=10 ; i++) {
    a = a + "<tr>";
    for (let j =1;j<=10;j++) {
        a = a + "<td>" + i * j + "</td>"; // đối với vòng lặp lồng nhau thì

    }
    a = a + "</tr>"; // đóng hàng
}
a = a + "</table>"; // đóng bảng
console.log(a);
document.write(a);