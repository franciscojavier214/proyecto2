// insertOne crea un archivo simple.
db.procesadores.insertOne({"modelo":"AMD Ryzen 5 3600","nucleos": 6 })
db.procesadores.insertOne({"modelo":"AMD Ryzen 7 3700X","nucleos": 8 })
db.procesadores.insertOne({"modelo":"AMD Ryzen 9 3900X","nucleos": 12 })
db.procesadores.insertOne({"modelo":"Intel Core i5-9600","nucleos": 6 })
db.procesadores.insertOne({"modelo":"Intel Core i7-9700K","nucleos": 8 })
db.procesadores.insertOne({"modelo":"Intel Core i9-10900K","nucleos": 10 })


// find() busca los archivos dentro de una colección ademas acepta criterios de busqueda

db.procesadores.find()
/*
{ "_id" : ObjectId("5f85e5d32ba85af1104a77f2"), "modelo" : "AMD Ryzen 5 3600", "nucleos" : 6 }
{ "_id" : ObjectId("5f85e6942ba85af1104a77f3"), "modelo" : "AMD Ryzen 7 3700X", "nucleos" : 8 }
{ "_id" : ObjectId("5f85e7822ba85af1104a77f4"), "modelo" : "AMD Ryzen 9 3900X", "nucleos" : 12 }
{ "_id" : ObjectId("5f85e7892ba85af1104a77f5"), "modelo" : "Intel Core i5-9600", "nucleos" : 6 }
{ "_id" : ObjectId("5f85e7982ba85af1104a77f6"), "modelo" : "Intel Core i7-9700K", "nucleos" : 8 }
{ "_id" : ObjectId("5f85e79c2ba85af1104a77f7"), "modelo" : "Intel Core i9-10900K", "nucleos" : 10 }
*/

// $gte es un criterio de busqueda (mayor o igual)
db.procesadores.find({"nucleos": {$gte : 8 } } ).pretty()
/*
 "_id" : ObjectId("5f85e6942ba85af1104a77f3"),
        "modelo" : "AMD Ryzen 7 3700X",
        "nucleos" : 8
}
{
        "_id" : ObjectId("5f85e7822ba85af1104a77f4"),
        "modelo" : "AMD Ryzen 9 3900X",
        "nucleos" : 12
}
{
        "_id" : ObjectId("5f85e7982ba85af1104a77f6"),
        "modelo" : "Intel Core i7-9700K",
        "nucleos" : 8
}
{
        "_id" : ObjectId("5f85e79c2ba85af1104a77f7"),
        "modelo" : "Intel Core i9-10900K",
        "nucleos" : 10
*/

db.procesadores.find({"nucleos": {$lt : 10 } } ).pretty()
/*
{
        "_id" : ObjectId("5f85e5d32ba85af1104a77f2"),
        "modelo" : "AMD Ryzen 5 3600",
        "nucleos" : 6
}
{
        "_id" : ObjectId("5f85e6942ba85af1104a77f3"),
        "modelo" : "AMD Ryzen 7 3700X",
        "nucleos" : 8
}
{
        "_id" : ObjectId("5f85e7892ba85af1104a77f5"),
        "modelo" : "Intel Core i5-9600",
        "nucleos" : 6
}
{
        "_id" : ObjectId("5f85e7982ba85af1104a77f6"),
        "modelo" : "Intel Core i7-9700K",
        "nucleos" : 8
}
*/

