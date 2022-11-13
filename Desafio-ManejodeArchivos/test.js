const Contenedor = require('./main')

async function main(){

    const products = new Contenedor('products.txt')
    
    // Prueba metodo getAll()
    console.log('Mostramos todos los productos')
    let allProducts = await products.getAll()
    console.log(allProducts)
    
    // Prueba metodo getById()
    let idToSearch = 4
    console.log(`Mostramos por consola un producto con id ${idToSearch}`)
    let productById = await products.getById(idToSearch)
    console.log(productById)
    
    // Prueba metodo save()
    let newProduct1 = {"id":9, "name":"Jordan Mid ", "price": 195, "src":"https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"} // Prueba con un producto que ya posee id
    await products.save(newProduct1)
    let newProduct2 = {"name":"Jordan High Mocha", "price": 800, "src":"https://sothebys-md.brightspotcdn.com/f4/e1/24ebed984bf58ba8e512f13d9e8d/424sneakers-bw5yk-03.jpg"} // Prueba con un producto sin id
    await products.save(newProduct2)
    
    // Prueba deleteById()
    console.log('Prueba de eliminacion')
    let productIdToDelete = 9
    await products.deleteById(productIdToDelete)
    allProducts = await products.getAll()
    console.log(allProducts)
    
    // Prueba deleteAll()
    await products.deleteAll()
}
main()