const express = require('express');
// const jwt = require('jsonwebtoken');
const app = express();
// IMPORT ROUTES
const authRoute = require('./routes/auth')
// ROUTES MIDDLEWARE
app.use('/api/user', authRoute);


//FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// VERIFY TOKEN
// const verifyToken = (req, res, next) => {
//     // GET AUTH HEADER VAUE
//     const bearerHeader = req.headers['authorization'];
//     if (typeof bearerHeader !== 'undefined') {
//         // Split at the space
//         const bearer = bearerHeader.split(' ');
//         // Get token from array
//         const bearerToken = bearer[1];
//         req.token = bearerToken;

//         next();
//     } else {
//         //FORBIDDEN
//         res.sendStatus(403);
//     }
// }

// app.post('/api/posts', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'mynameisAli', (err, authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 message: 'Welcome here :)',
//                 authData: authData,
//             });
//         }
//     })
// });

// app.post('/api/login', (req, res) => {
//     // const user = {
//     //     id: 1,
//     //     name: "ali",
//     //     class: 12
//     // };

//     res.json({
//         data: JSON.stringify(req),
//     })
//     // if (req.email && req.password) {
//     //     res.json({
//     //         email: email,
//     //         password: password
//     //     })
//     // } else {
//     //     res.json({
//     //         err: "nodata found"
//     //     })
//     // }

//     // jwt.sign({ user: user }, 'mynameisAli', { expiresIn: '30s' }, (err, token) => {
//     //     res.json({
//     //         token: token
//     //     })
//     // });
// });

app.listen(5000, () => console.log("Started on 5000"));