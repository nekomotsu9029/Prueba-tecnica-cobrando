1. Retornar al usuario con nombre de usuario “Frank_blog”.
R// db.usuario.find({nombre_usuario: “Frank_blog”})

2. Retornar los usuarios llamados “Peter”.
R// db.usuario.find({nombre: “Peter”})

3.  Contar el número de usuarios con CP= “39005”.
R// db.usuario.find({cp: “39005”})

4. Retornar a un usuario con número de teléfono: “111111111”.
db.usuario.find({$or: [{telefono1: “111111111”}, {telefono2: “111111111”},
… ]})

5. Retornar nombre_usuario y cuenta_twitter, sin _id, de usuarios con CP igual o mayor que “39005”.
R// db.usuario.find({cp: {$gte: “39005”}},{nombre_usuario: 1,
cuenta_twitter: 1, _id:0})