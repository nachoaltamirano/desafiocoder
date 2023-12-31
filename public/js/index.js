const socket = io()
let log = document.getElementById('productList')

const getid = () => {
    let a = Date.now().toString(30)
    let b = Math.random().toString(30).substring(2)
    return a + b
}

const addProd = document.getElementById("addProd")
addProd.addEventListener("click", event =>{
    if(event){
        const title = document.getElementById('title').value
        const description = document.getElementById('description').value
        const price = document.getElementById('price').value
        const img = document.getElementById('img').value
        const code = document.getElementById('code').value
        const stock = document.getElementById('stock').value
        const newProduct = {title,description,price,img,code,stock}
        socket.emit('product', newProduct);
    }
});

const deletProd = document.getElementById("deletProd")
deletProd.addEventListener("click", event =>{
    if(event){
        const pid = document.getElementById('id').value
        socket.emit('productDelete', pid)
    }
});

socket.on('productList', products =>{
    let productListHTML = "";
    products.forEach(producto => {
        productListHTML +=  `<p>==========</p>
        ${producto.id}<br/>
        ${producto.title}<br/>
        ${producto.description}<br/>
        ${producto.price}<br/>
        ${producto.img}<br/>
        ${producto.status}<br/>
        ${producto.code}<br/>
        ${producto.stock}<br/>`
    })
    log.innerHTML = productListHTML;

})