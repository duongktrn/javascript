let x ,y,z
function diemTb() {
    x = Number(document.getElementById('ly').value) ;
    y = Number(document.getElementById('hoa').value) ;
    z = Number(document.getElementById('sinh').value) ;
    let diemtb = (x+y+z)/3 ;
    document.getElementById('diem').innerHTML = diemtb;
}
function tong() {
    x = Number(document.getElementById('ly').value) ;
    y = Number(document.getElementById('hoa').value) ;
    z = Number(document.getElementById('sinh').value) ;
    let tongd = x+y+z ;
    document.getElementById('diem').innerHTML = tongd;

}
// doi c sang f
function chuyendoi() {
    var c = Number(document.getElementById('doc').value) ;
    var cF = (9*c)/5 + 32     ;
    document.getElementById('dof').innerHTML = cF ;
}

// tinh dien tich hinh tron
function dienT() {
    var r = Number(document.getElementById('bankinh').value) ;
    var s = 3.14*r*r ;
    document.getElementById('hienthidt').innerHTML = s ;
}
// tinh chu vi hinh tron
function chuvi() {
    var r = Number(document.getElementById('bankinh').value) ;
    var chuvi = 3.14*r*2 ;
    document.getElementById('hienthidt').innerHTML = chuvi ;
}