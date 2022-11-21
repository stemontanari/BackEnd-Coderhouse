const express = require('express')
const app = express()
const { Router } = express

const Container = require('./api/productos') // Importing Container class
const products = new Container('./resources/products.txt') // Create new instance of class Container

app.use(express.static('public'))

// Router de productos

const routerProductos = new Router();
routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}))

// Rutas de routerProductos

// Get todos los productos

routerProductos.get('/', async (req, res)=>{
    const productos = await products.getAll()
    if(productos.length > 0){res.json(productos)}
    else{res.sendStatus(400)}
    
});

app.use('/api/productos', routerProductos)

// Get producto por id con path-params

routerProductos.get('/:id', async (req, res)=> {
    const producto = await products.getById(req.params.id)
    if(producto){
        res.json({
            search : `Producto con id : ${req.params.id}. Encontrado`,
            result : producto
        })
    }
    else{res.sendStatus(404)}
})

// POST que recibe y agrega un producto con un id asignado

routerProductos.post('/', async (req, res) => {
    let product = req.body
    if(product){
        product = await products.saveProduct(product)
        res.json({
            newProduct : product
        })
    }
    else{res.sendStatus(400)}

})

// DELETE de un producto

routerProductos.delete('/:id', async (req, res) => {
    const product = req.params.id
    try {
        let deleted = await products.deleteById(product)
        res.json({
            deletedElement : deleted,
            products : await products.getAll()
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// PUT reemplazando un producto existente por uno nuevo

routerProductos.put('/:id', async (req, res) => {
    const result = products.save(req.body)
    if(result.length > 0){
        res.send(`
        El producto : ${JSON.stringify(result[1])}\n\n
         reemplazado por : ${JSON.stringify(result[0])}
         en el posicion : ${result[0].id}
        `)
    }
    else{
        res.sendStatus(400)
    }
})


// ---------------------------------------------------
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
