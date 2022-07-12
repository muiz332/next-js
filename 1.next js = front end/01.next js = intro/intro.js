//next js

/* 

dimateri kali ini kita akan belajar mengenai next js

apa itu next js?
next js itu adalah sebuah framework dari react yang siap untuk production

jadi kalo kita setup project kita menggunakan next js secara otimatis
sudah siap untuk production

artinya sangat mudah sekali untuk kita deploy dan kita jadikan 
production

kemudian kenapa memilih next js sebagai framework dari react
jadi ini adalah alasan kenapa menggunakan next js



1. mudah untuk setuap project
2.routing yang mudah
    mudah untuk melakukan setup routingnya
    dimana jika kalian memerlukan routing pada aplikasi
    react kalian 

    kalian harus menginstall react router domnya
    untuk melakukan routing

    sedangkan kalo menggunakan next js kita dengan mudah menyiapkan 
    routingnya

3. performa yang baik dengan code spliting,client side navigation dan prefetcing
    nah apa sih code spliting ini 
    di code spliting ini next js akan merender javascript saat pagenya diload

    jadi kalo kita punya banyak page dan banyak javascriptnya 
    maka next js hanya akan meload page dengan javascript dipage tersebut saja
    sehingga speednya sangat cepat

    kemudian ada client side navigation
    jadi kalo kita menggunakan fitur linknya punyanya next js 

    nah kalo kita menggunakan navigation link ini maka perpindahan
    antar pagenya sama dengan single page aplication

    jadi dia tidak akan mereload browsernya 
    kemudian next js datang dengan free fetcingnya

    jadi kalo kalian lebih dalam menggunakan next kita akan 
    melihat bahwa semua page yang diload didalam next ini 
    akan disiapkan pagenya sebelum pagenya muncul

    nah ini akan muncul dipembahasan mengenai SEO friendly

4. east to deploy
    nah kita dengan mudah bisa mendeploy dengan menggunakan vercel

5.SEO friendly
    dengan menggunakan next support SEO dengan sangat baik


    nah kenapa disebut dengan SEO friendly 
    disini ada dua perbandingan 

    kalo menggunakan next js itu ketika initial load 
    jadi ketika pagenya diload paling pertama dia sudah ada 
    htmlnya 

    jadi htmlnya sudah muncul sehingga kalo dibaca oleh botnya 
    google maka htmlnya sudah ada sehingga botnya bisa mendeteksi 
    bahwa website kita ada datanya

    kemudian setelah javascriptnya diload  javascriptnya siap 
    berfungsi next jsnya sudah siap jalan UInya sudah ada
    kemudian javascriptnya sudah muncul 
    maka sudah bisa digunakan 

    nah sedangkan dengan menggunakan pain react js
    menggunakan create react app

    seperti yang kalian tahu SPA react itu 
    ketika pertama kali initial load appnya itu kosong 

    karena dia akan membaca index htmlnya yang masih kosong
    nah karena kosong tersebut ketika dibaca oleh botnya google

    maka botnya tidak bisa mendapatkan data apapun
    baru setelah javascriptnya diload dirender reactnya 
    domnya dimanipulasi barulah ada UI

    nah inilah perbedaan SEO friendlynya 
    jadi untuk next itu contentnya sudah bisa didapatkan 
    ketika pertama kali initial load 

    
6.pre rendering page (static generation dan server side rendering)
    dimana kalo next js itu dari server sudah ada bundle reactnya 
    dia sudah disiapkan htmlnya 

    jadi sebelum dia masuk kebrowser
    ketika browser request sebuah halaman 

    makan htmlnya sudah ready duluan 
    kemudian dia masuk browser sudah dalam bentuk html dan bundle js 
    didalamnya sehingga dia sudah ready

    nah sedangkan kalo create react app
    ketika kita panggil keserver 
    dan masuk ke browser itu masih bundle reactnya 

    barulah didalam browser dia memanipulasi domnya 
    sehingga muncul UInya



nah itu lah perbedaan yang cukup menggambarkan 
kenapa memilih next js dalam project react js 

karena ini sangat membantu kalo app kita berhubungan dengan SEO 
atau kita ingin cepat setup routingnya dan lain lain
maka saya akan menyarankan menggunakan next js

sedangkan untuk fungsi react react yang lainnya
itu berfungsi dengan baik reductnya dll itu berfungsi 
secara normal 

nah itu lah penjelasan dari apa itu next js dan kenapa
saya memilih next js sebagai framework react js

mudah mudahan kalian paham



*/