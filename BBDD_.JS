function createUserOfBBDD(){

    const mysql = require('mysql');
    
    
    const users = [
        {
            "name": "pepe",
            "email": "pepe@gmail.com",
            "password": "12345678",
            "address": "calle margarita,4",
            "phone": "555555555",
            "usertype": "driver",
            "genre": "masculino",
            "age": 23
        }
        {
            "name": "John Smith",
            "email": "johnsmith@example.com",
            "password": "p@ssw0rd",
            "address": "123 Main Street",
            "phone": "555-1234",
            "usertype": "user",
            "genre": "male",
            "age": 30
        },
        {
            "name": "Jane Doe",
            "email": "janedoe@example.com",
            "password": "secure123",
            "address": "456 Elm Avenue",
            "phone": "555-5678",
            "usertype": "user",
            "genre": "female",
            "age": 25
        },
        {
            "name": "David Johnson",
            "email": "davidjohnson@example.com",
            "password": "password123",
            "address": "789 Oak Drive",
            "phone": "555-9012",
            "usertype": "driver",
            "genre": "male",
            "age": 40
        },
        {
            "name": "Emily Williams",
            "email": "emilywilliams@example.com",
            "password": "letmein123",
            "address": "321 Pine Lane",
            "phone": "555-3456",
            "usertype": "user",
            "genre": "female",
            "age": 35
        },
    
        {
            "name": "Michael Brown",
            "email": "michaelbrown@example.com",
            "password": "changeme123",
            "address": "654 Cedar Road",
            "phone": "555-7890",
            "usertype": "driver",
            "genre": "male",
            "age": 28
        },
    
        {
            "name": "Sarah Taylor",
            "email": "sarahtaylor@example.com",
            "password": "sarah12345",
            "address": "987 Maple Court",
            "phone": "555-2345",
            "usertype": "driver",
            "genre": "female",
            "age": 32
        }
    ];
    
    // Conexión a la base de datos
    connection.connect((err) => {
        if (err) throw err;
    
        console.log('Conexión exitosa a la base de datos MySQL');
    
        // Iterar sobre la lista de trips1 e insertar en la base de datos
        users.forEach((user) => {
            const insertQuery = `INSERT INTO trips1 (name, email, password, address, phone, usertype, genre, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const insertValues = [
                user.name,
                user.email,
                user.password,
                user.address,
                user.phone,
                user.usertype,
                user.genre,
                user.age
            ];
    
            connection.query(insertQuery, insertValues, (err, result) => {
                if (err) throw err;
    
                console.log(`Usuario ${user.name} insertado correctamente`);
            });
        });
    
        // Cerrar la conexión a la base de datos
        connection.end((err) => {
            if (err) throw err;
    
            console.log('Conexión cerrada a la base de datos MySQL');
        });
    });
}



function createTripOfBBDD() {

    const mysql = require('mysql');


    const trips1 = [
        {
            "date": "2023-06-01",
            "departure_time": "09:00",
            "available_seats": 4,
            "vehicle_type": "Sedan",
            "favorite_genre": "Pop",
            "lenguaje": "English",
            "driving_skill": "Experienced",
            "pets_accepted": true,
            "maximum_baggage": 2
        },

        {
            "date": "2023-06-02",
            "departure_time": "14:30",
            "available_seats": 2,
            "vehicle_type": "SUV",
            "favorite_genre": "Rock",
            "lenguaje": "Spanish",
            "driving_skill": "Intermediate",
            "pets_accepted": false,
            "maximum_baggage": 3
        },

        {
            "date": "2023-06-03",
            "departure_time": "11:00",
            "available_seats": false,
            "vehicle_type": "Van",
            "favorite_genre": "Hip Hop",
            "lenguaje": "English",
            "driving_skill": "Experienced",
            "pets_accepted": true,
            "maximum_baggage": 4
        },

        {
            "date": "2023-06-04",
            "departure_time": "08:45",
            "available_seats": true,
            "vehicle_type": "Compact",
            "favorite_genre": "Electronic",
            "lenguaje": "English",
            "driving_skill": "Beginner",
            "pets_accepted": true,
            "maximum_baggage": 1
        },

        {
            "date": "2023-06-05",
            "departure_time": "15:15",
            "available_seats": true,
            "vehicle_type": "Sedan",
            "favorite_genre": "R&B",
            "lenguaje": "English",
            "driving_skill": "Experienced",
            "pets_accepted": false,
            "maximum_baggage": 2
        },

        {
            "date": "2023-06-06",
            "departure_time": "10:30",
            "available_seats": true,
            "vehicle_type": "SUV",
            "favorite_genre": "Country",
            "lenguaje": "English",
            "driving_skill": "Intermediate",
            "pets_accepted": true,
            "maximum_baggage": 3
        }
    ];

    // Conexión a la base de datos
    connection.connect((err) => {
        if (err) throw err;

        console.log('Conexión exitosa a la base de datos MySQL');

        // Iterar sobre la lista de viajes e insertar en la base de datos
        viajes.forEach((viaje) => {
            const insertQuery = `INSERT INTO viajes (date, departure_time, available, vehicle_type, favorite_genre, lenguaje, driving_skill, pets_accepted, maximum_baggage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const insertValues = [
                viaje.date,
                viaje.departure_time,
                viaje.available,
                viaje.vehicle_type,
                viaje.favorite_genre,
                viaje.lenguaje,
                viaje.driving_skill,
                viaje.pets_accepted,
                viaje.maximum_baggage
            ];

            connection.query(insertQuery, insertValues, (err, result) => {
                if (err) throw err;

                console.log(`Viaje en la fecha ${viaje.date} insertado correctamente`);
            });
        });

        // Cerrar la conexión a la base de datos
        connection.end((err) => {
            if (err) throw err;

            console.log('Conexión cerrada a la base de datos MySQL');
        });
    });
}


function createRatingOfBBDD() {

    const mysql = require('mysql');


    const ratings = [
        { "user_id_qualifier": 1, "user_id_qualified": 2, "score": 4.5, "comments": "Excelente servicio al cliente." },
        { "user_id_qualifier": 3, "user_id_qualified": 4, "score": 3.2, "comments": "El producto llegó tarde y en mal estado." },
        { "user_id_qualifier": 5, "user_id_qualified": 6, "score": 2.8, "comments": "La calidad del producto no cumple con las expectativas." },
        { "user_id_qualifier": 5, "user_id_qualified": 2, "score": 5.0, "comments": "El envío fue rápido y el artículo estaba en perfectas condiciones." },
        { "user_id_qualifier": 2, "user_id_qualified": 1, "score": 1.5, "comments": "Mala atención al cliente, no resolvieron mis problemas." },
        { "user_id_qualifier": 3, "user_id_qualified": 6, "score": 4.0, "comments": "Buena relación calidad-precio, lo recomendaría a otros usuarios." }
    ];

    // Conexión a la base de datos
    connection.connect((err) => {
        if (err) throw err;

        console.log('Conexión exitosa a la base de datos MySQL');

        // Iterar sobre la lista de ratings e insertar en la base de datos
        ratings.forEach((rating) => {
            const insertQuery = `INSERT INTO ratings (user_id_qualifier, user_id_qualified, score, comments) VALUES (?, ?, ?, ?)`;
            const insertValues = [
                rating.user_id_qualifier,
                rating.user_id_qualified,
                rating.score,
                rating.comments
            ];

            connection.query(insertQuery, insertValues, (err, result) => {
                if (err) throw err;

                console.log(`Rating insertado correctamente: ${JSON.stringify(rating)}`);
            });
        });

        // Cerrar la conexión a la base de datos
        connection.end((err) => {
            if (err) throw err;

            console.log('Conexión cerrada a la base de datos MySQL');
        });
    });
}














function createOriginOfBBDD() {

    const mysql = require('mysql');


    // Conexión a la base de datos
    connection.connect((err) => {
        if (err) throw err;

        console.log('Conexión exitosa a la base de datos MySQL');

        LOAD DATA INFILE '../csv/destination.csv',
        INTO TABLE destination,
        FIELDS TERMINATED BY ',',
        ENCLOSED BY '"',
        LINES TERMINATED BY '\n',
        //IGNORE 1 ROWS;


        // Cerrar la conexión a la base de datos
        connection.end((err) => {
            if (err) throw err;

            console.log('Conexión cerrada a la base de datos MySQL');
        });
    });
}


function createOriginOfBBDD() {

    const mysql = require('mysql');


    // Conexión a la base de datos
    connection.connect((err) => {
        if (err) throw err;

        console.log('Conexión exitosa a la base de datos MySQL');

        LOAD DATA INFILE '/csv/destination.csvdestination.csv'
        INTO TABLE destination
        FIELDS TERMINATED BY ','
        ENCLOSED BY '"'
        LINES TERMINATED BY '\n'
        //IGNORE 1 ROWS;


        // Cerrar la conexión a la base de datos
        connection.end((err) => {
            if (err) throw err;

            console.log('Conexión cerrada a la base de datos MySQL');
        });
    });
}











module.exports = { creteUserOfBBDD, createTripOfBBDD, createRatingOfBBDD, createOriginOfBBDD, createDestinationOfBBDD }

