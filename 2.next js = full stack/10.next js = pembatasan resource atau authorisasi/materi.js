// authorisasi

/*

dimateri kali ini kita akan belajar bagaimana melakukan authorisasi
atau pembatasan resource pada aplikasi kita

jadi nanti hanya user tertentu yang sudah melakukan login 
bisa mengakses seluruh aplikasi kita

setelah token tersebut dibuat maka kita bisa gunakan token itu untuk 
mengakses aplikasi kita

jadi saat pengiriman request nanti akan mengirimkan token itu
jika tokennya ada dan juga valid maka kita bisa berikan akses
ke resource kita

yang nanti token tersebut akan kita simpan pada cookie browser
jadi nanti user tidak perlu melakukan login berulang kali

cukup kita atur kadaluarsa tokennya kapan 
jika sudah habis maka user diwajibkan login lagi

tapi untuk penjelasan mengenai cookie itu nanti akan kita bahas 
dimater yang akan datang


jadi nanti kita bisa mengirimkan request beserta tokennya
token itu bisa kita kirim pada query stringnya

atau pada headernya pada key authorization yang valuenya itu 
jadi nulisnya gini


authorization : bearer/JWT tokennya

jadi jenis tokenny akalian bisa gunakan bearer atau jwt

setelah kalian kirimkan tokennya maka kita bisa check tokennya
pada bagian yang mau kita batasi resourcenya 

pada kasus kita kali ini adalah api /api/post

kita pergi kehalaman /api/post dengan methodnya GET






































*/