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