// server side rendering dan client side rendering

/*

dimateri kali ini kita akan membahas mengenai server side rendering atau ssr
dan client side rendering atau csr

nah ini sering ditemukan ketika menggunakan framework javascript
atau library javascript

nah sebagai contoh kalian bisa jalankan dua buah aplikasi 
dimana kita bisa membedakan antara ssr dan csr 

kalian bisa jalankan aplikais next js dan react js

nah kalo kita ingin mengetahui apakah sebuah aplikasi ini 
server side rendering atau client side rendering

kalian bisa klik kanan pada browsernya 
kemudian view page source

kalo next js ketika kalian liaht view page sourcenya
itu ada element element yang terdapat pada halaman itu

disitu terlihat bahwa dia dirender diserver 
dan dikirim ke browser

kalo misalkan kita lihat diaplikasi react
itu elementnya kosong cuma ada html tapi didalam bodynya itu kosong

nah jadi ini adalah manipulasi DOm 
artinya ini dirender saat sudah sampai dibrowser

jadi sebelum dibrowser dia tidak ada dan ketika
dibrowser itu ada karena react memanipulasi dom

sehingga tampilah gambar dan element lainnya 

selain itu client side rendering itu saat perpindahan halaman
juga dirender dibrowser

jadi diciptakan dibrowser dan ada beberapa proses yang dilakukan saat diawal
pagenya diload 



nah selanjutnya kita akan membahas mengenai kelebihan dan kekurangan

server side rendering

kelebihan

- meningkatkan perfomance
    karena ketika dia request kesebuah halaman
    yang direquest itu adalah aset aset atau file html yang berada dihalaman ini 

    jadi ini tidak akan meload halaman yang selain kita request
    ketika kita melakukan request kehalaman home misalnya 

    yang dikembalikan itu hanya halaman home tersebut dan aset aset
    yang dimiliki seperti gambar dll


- bisa dibaca oleh bot goole atau search engine google
    jadi salah satu keuntungannya ketika sudah diindex karena 
    ketika dilihat sourcenya itu ada informasi element
    yang ditampilkan



kekurangan 

- membutuhkan proses saat berganti halaman
    karena ketika request kehalaman home
    ya yang dikembalikan adalah html halaman home itu beserta
    aset asetnya 

    ketika kita melakukan request lagi 
    maka akan membutuhkan proses dari server

    jadi dia perhalaman ada request




client side rendering

kelebihan

- lebih interaktif
    lebih cepat dalam melakukan interaksi 
    karena karena diawal walaupun dia loadnya agak lama
    tapi kedepannya akan lebih cepat interaksinya

    karena prosesnya diload saat pertama kali dibuka 
    halamannya

- navigate route cepat
    karena diawal dia sudah merender semuanya termasuk routenya
    jadi diawal banyak sekali proses dan setelah proses itu selesai
    
    maka proses yang lain akan cepat 
    karena semua halaman akan dirender


kekurangan

- terdapat blank screen dan proses render diawal load
    kalo misalkan udah besar aplikasinya maka akan lama
    render diawalnya 

    karena diawal meminta file html kosong
    dan meminta file javascript yang mana akan memanipulasi dom




tapi sebenarnya ssr dan csr dua duanya bisa dipakai tergantung
kebutuhan

kalo aplikasinya kecil dan tidak terlalu besar bisa pakai csr saja
dan kalo misalnya aplikasinya besar sudah ada leazy dan dinamic import

jadi sistemnya seperti ssr
mendownload atau request file sesuai kebutuhan


kalo ssr halamanya bisa dibaca oleh searc engine google
ini bagus untuk SEO seperti yang dijelaskan dimateri sebelum ini

misalnya bikin website untuk company profile
atau website lainnya yang membutuhkan peringkat digoogle
server side rendering pilihannya

jadi tergantung nanti kita butuh yang mana  

oke mungkin itu saja untuk materi kali ini 
mudah mudahan kalian paham



*/  