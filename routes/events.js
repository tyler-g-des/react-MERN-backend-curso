const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate');



const router = Router();
router.use(validarJWT);

router.get('/', getEventos);

router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('start','Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
     crearEvento);

router.put('/:id', actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;