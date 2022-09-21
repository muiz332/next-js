// authorisasi

/*

nah sekarang kita akan melakukan refaktoring authorization
jadi kita akan mengubah fungsi authorization menjadi promise

karena kita juga butuh handle pada saat servernya error yaitu 500
bersamaan dengan itu kita juga harus handle error pada method verify

ketika error nanti akan mengearah ke catch dimana dia mengembalikan
500 dan itu tidak sesuai dengan errornya

dan juga kita membuat middleware / fungsi yang memiliki akses ke request dan response
untuk digunakan dicreate update dan delete

untuk itu kita langsung saja coba
kita bikin folder yang namanya middlewares


































*/