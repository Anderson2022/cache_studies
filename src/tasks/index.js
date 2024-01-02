const { Router } = require('express')

const router = Router()

router.get('/', require('./list') )
router.post('/', require('./create'));
router.get('/:id', require('./show'))
router.put('/:id', require('./update'))
router.delete('/:id', require('./destroy'))

module.exports = router;