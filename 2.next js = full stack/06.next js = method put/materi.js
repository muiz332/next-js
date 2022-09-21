// update data menggunakan method put

/*

nah dimateri kali ini kita akan belajar bagaimana cara
mengupdate data dengan menggunakan method put pada next js

kita menggunakan method put tidak patch

PUT dan PATCH paling banyak digunakan untuk melakukanhal yang sama yaitu melakukan update. diantara dua jenis itu memiliki perbedaan secara teknikal PUT bekerja dengan cara menimpa replace resource dengan resource yang baru. sedangkan method PATCH digunakan untuk meng-update sebagian field yang diminta yang ada dari resource.

contoh Request PUT dengan data name dan hoby, maka jika ingin melakukan update salah satu data misal name maka data yang harus dikirimkan harus semuanya

kirim data Update dengan PUT :

{
  "name": "Sigit N",
  "hoby": "Drawing"
}
sedangkan untuk mengirimkan dan melakukan Update data hanya name maka field name saja yang dikirimkan, seperti berikut.

PATCH Request yang dirikimkan:

{
  "name": "Sigit Foo Bar"
}

nah jadi nanti kita akan kirimkan semua data baru yang sudah kita update
oke langsung saja kita pergi folder post/[id].js










*/