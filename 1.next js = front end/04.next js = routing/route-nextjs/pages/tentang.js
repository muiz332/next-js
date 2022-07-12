const Tentang = () => {
    return ( 
        <h1>ini adalah halaman tentang</h1>
     );
}

/*

nah pada saat memanggilnya kalian bisa tulis
/tentang 

sesuai dengan nama filenya 

jika misalnya kalian tulis diluar folder pagesnya maka tidak akan 
jalan filenya

kalian juga bisa membuatnya didalam folder 

misalkan nama foldernya jenis
yang didalamnya kalian ada file hewan tumbuhan

nah kalo kalian hanya memanggilnya seperti ini

/jenis

maka dia akan not found karena bukan file yang diakses
melainkan cuma folder

jadi kalian harus menuliskannya seperti ini

/jenis/tumbuhan

*/
 
export default Tentang;