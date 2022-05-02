import Router from "express";


const router = Router();


router.get('/clasificaciones');
router.post('/clasificaciones');
router.put('/clasificaciones/:id')
router.delete('/clasificaciones/:id');
router.get('/clasificaciones/:id');


export default router;
