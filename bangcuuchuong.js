let a;
a = "<table border='2' width='1000' cellspacing='1' cellpadding='3'>";
for ( let i = 1; i <=9; i++) {
    a = a + "<tr>"
    for ( let j = 2; j <=9; j++) {
    a = a +  "<td>" + j + "x" + i +  "=" + (i * j ) + "</td>";
    }
    a = a + "</tr>";

}
a = a + "</table>";
console.log(a);
document.write(a);
