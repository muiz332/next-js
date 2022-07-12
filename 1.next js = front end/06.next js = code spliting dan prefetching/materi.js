// code spiting dan prefetching

/* 

dimateri kali ini kita akan memahami apa itu code spliting dan juga 
prefetching didalam next js

salah satu kelebihan dari next js itu adalah bagusnya performa dari 
code spliting kemudian dia memiliki sistem prefetching

nah kita akan melihat bagaimana sih code spliting didalam next js ini


untuk melihat code splitingnya next js kalian bisa klik inspect klik network
kalo kaian reload halamannya akan ada file file responsenya

kalo misalkan kita pindah halaman ketentang
maka dia hanya akan memanggil filenya khusus untuk tentang
hanya ketika dipanggil saja

jadi ini akan sangat bagus untuk performa dimana saat kita masuk
home page javascript yang dipanggil hanya home tersebut saja

javascript yang lain tidak dipanggil

nah karena dis sudah pernah mengunjungi halaman tentang 
jadi ketika kita masuk lagi kehalaman tentang maka tidak akan memanggil
kembali file javascript yang berhubungan dengan halaman tentang

nah ini akan mempercepat performa dari website kita


selain itu didalam next js juga dia memailiki konsep prefretching
jadi kalo kita mendefinisikan component link didalam aplikasi kita

maka dia sudah menyiapkan bundle halaman halaman 
jadi ketika kita masuk kedalam link tersebut

halaman tersebut sudah ready
jadi sudah siap ketika kita masuk akan melihat performa yang
baik saat mengunjungi halaman tersebut

nah itulah salah satu alasan kenapa kita memilih next js
karena performanya yang baik untuk code splitingnya dan juga prefecthingnya






































*/