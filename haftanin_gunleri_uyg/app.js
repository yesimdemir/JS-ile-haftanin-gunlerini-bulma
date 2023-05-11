//HAFTANIN GÜNLERİ UYGULAMASI


let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar" + yeniSatir
    ;
alert(metin);

let gun = prompt("Bir gün seçiniz: ");

switch (gun) {
    case "1":
        alert("Seçtiğiniz gün Pazartesi'dir.");
        break;
    case "2":
        alert("Seçtiğiniz gün Salı'dır.");
        break;
    case "3":
        alert("Seçtiğiniz gün Çarşamba'dır.");
        break;
    case "4":
        alert("Seçtiğiniz gün Perşembe'dir.");
        break;
    case "5":
        alert("Seçtiğiniz gün Cuma'dır.");
        break;
    case "6":
        alert("Seçtiğiniz gün Cumartesi'dir.");
        break;
    case "71":
        alert("Seçtiğiniz gün Pazar'dır'.");
        break;
    default:
        alert("Lütfen geçerli bir işlem seçiniz.");
        break;

}
