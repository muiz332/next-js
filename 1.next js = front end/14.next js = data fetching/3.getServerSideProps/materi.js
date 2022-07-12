// data fetching


/*

dimateri kali ini kita akan belajar mengenai getServerSideProps

kita sudah mempelajari bahwa getStaticProps dan getStaticPaths itu
itu akan membuat seluruh keperluan page kita sebelum dipanggil oleh user

jadi htmlnya sudah ada beserta dengan datanya
jadi dia sudah dipanggil dulu APInya sebelum dipanggil atau diakses oleh user

nah ini akan bermanfaat untuk data data yang bersifat static
akan tetapi tidak cocok ketika datanya sering berubah

seperti data postingngan, ketika ada postingan baru 
maka ditambahkan didatabasenya dan datanya juga berubah

itu tidak cocok menggunakan getStaticProps dan getStaticPaths
nah yang cocok untuk data dynamis adalah getServerSideProps

nah kita akan coba pada page tentang








































*/