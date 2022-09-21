// membuat login dengan authentifikasi JWT

/*

nah dimateri kali ini kita akan membahas autentifikasi menggunakan JWT untuk membuat tokennya
autentifikasi ini nanti adalah fungsi login jadi kita mengirimkan email dan password 
lalu dicheck apakah benar 
jika benar maka kita kirimkan tokennya dari Json Web Token
jadi nanti resourcenya akan dibatasi 

jadi hanya akun tertentu yang sudah memiliki token dan tokennya itu valid
maka akan masuk kedalam aplikasi kita atau resource kita yaitu API kita

nah proses itu dinamakan authorisasi atau membatasi pengguna untuk memasuki
aplikasi kita sedangkan fitur loginnya yang mengirimkan token itu disebut dengan authentifikasi

nah maka dari itu untuk membuat tokennya kita bisa menggunakan json web token
walaupun secara fundamental itu tidak butuh juga kita bisa membuat token sendiri 

tapi kita bisa pakai JWT supaya mudah untuk memverifikasi oleh kedua belah pihak
jadi json web token ini adalah random string yang panjang dengan menggunakan json 
agar supaya tidak ada yang tahu tokennya itu apa dan aplikasi kita akan aman

untuk cara kerjanya nanti seperti ini 

ketika users berhasil melakukan Login maka server akan memberikan sebuah Token. 
Nanti Token tersebut akan disimpan oleh users pada Local Storage atau Cookies Browser 

dan bila users ingin mengakses halaman halaman tertentu maka harus menyertakan token tersebut. 
Untuk itu users akan mengirim balik token yang dikasih diawal tadi sebagai bukti bila user ini, 

sudah melakukan login. Sekarang kita akan lihat struktur dasarnya Tokennya dimana terdiri dari 
tiga bagian yaitu yang pertama header lalu kedua bagian payloadnya atau datanya 
dan yang ketiga adalah bagian verify signature.



1.Header 
    biasanya terdiri dari dua bagian: jenis token, yaitu JWT, dan algoritma penandatanganan 
    yang digunakan, seperti HMAC SHA256 atau RSA

2. paylod
    sebagai infomasi atau data yang ingin kita kirimkan, dalam penerapannya di otentikasi atau pun otorisasi, 
    biasanya data ini berupa data yang sifatnya unik bagi user, seperti: email, id/uuid, dan juga data 

    yang berkaitan dengan otorisasi seperti role, karena data tersebut akan digunakan sebagai tanda pengenal si pengirim token.
    Oh ya, jangan pernah menyelipkan data yang sifatnya konfidental atau sensitif ke dalam JWT (seperti password).

3. Verify Signature
    adalah hasil dari Hash atau gabungan dari isi encode Header dan Payloadnya lalu ditambahkan kode secretnya. 
    Signature ini berguna untuk memverifikasi bahwa header maupun payload yang ada dalam token tidak berubah dari nilai aslinya 
    (karena untuk membuat payload dan header palsu itu cukup mudah).
    
    Signature-nya sendiri tidak mungkin dapat diakali, karena sudah dalam berbentuk hash; yang mana adalah fungsi satu arah (tidak dapat dikembalikan ke nilai semula), dan meski kita tahu algoritma hashing-nya, kita juga memerlukan secret key yang mana hanya si pembuat aplikasi yang tahu.

Jika kita satukan semuanya dan hasil ketiga bagian tersebut 
akan digabung dan otomatis di encode menjadi Token string random panjang

Jika isi Header atau Payload dirubah maka isi Signature menjadi tidak valid. 
Satu hal lagi JWT ini tidak tergantung sama bahasa program tertentu jadi kita 
bisa mengimplementasikan di Laravel Codeigniter Node JS dan yang lainnya

sumber: https://codepolitan.com/blog/kenalan-yuk-dengan-json-web-token-jwt


nanti kalian bisa atur pake alogitma apa pada bagian option
didocumentasi npmnya 

dan kalian bisa atur juga kadaluarsanya mau berapa 
ada didocumentasi npmnya 

kita install dulu ja jwtnya 

npm i jsonwebtoken

nah sekarang kita buat enpointnya 

/api/auth/login

























*/