// ===============
// Puerto
// ===============
process.env.PORT = process.env.PORT || 3000;

// ===============
// Entorno
// ===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============
// Vecimiento del Token
// ===============
// 60 seg
// 60 min
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===============
// SEED de autenticación
// ===============
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===============
// Base de Datos
// ===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===============
// Google Client ID
// ===============
process.env.CLIENT_ID = process.env.CLIENT_ID || '784745287694-mkt0b77473162scn9ndku9ha51vhr2di.apps.googleusercontent.com';