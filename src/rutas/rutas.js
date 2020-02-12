const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/index', (req, res) => {
    res.render('../views/index.ejs', { layout: '../layaout/layaout_index' });
})
router.post('/loggin',controller.login);
router.get('/InicioUsuario/:usuario', controller.InicioUsuario);

module.exports = router;
