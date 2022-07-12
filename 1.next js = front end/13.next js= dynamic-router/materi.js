// dynamic route

/*

dimateri kali ini kita akan belajar mengenai dynamic route

apa itu dynamic route?
dynamic route adalah route yang dinamis artinya dapat berubah ubah

contoh 

misalkan kita punya halaman list produk
dihalaman itu hanya tampil nama produk dan gambarnya

tentu kita harus menyiapkan halaman detil produk untuk 
menjelaskan produk secara detil

jadi urlnya misalkan begini

/produk/1

atau

/produk/2

jadi tergantung produknya yang mana 
dan yang dikirimkan adalah idnya

nah karena next js itu routingnya berdasarkan folder pages
artinya kita tidak bisa seperti react yang langsung memasukkan 
url seperti ini

/produk/:id 

dan langsung memasukkan component mana

nah next js tidak bisa begitu
jadi next js harus mengatur routenya pada file

kalo kita ingin membuat seperti itu didalam next js
maka akan jadi seperti ini

[id].js 

nah jadi kita harus membuat nama filenya seperti itu
dan untuk menambil parameternya kita cukup tuliskan 

const p = useRouter()
p.query.id

oke langsung saja kita coba
dan kita buat page baru yang namanya produk misalnya









































*/