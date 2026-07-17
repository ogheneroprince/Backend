const express = require('express');

const app = express();

app.use(express.json());

const Product = [
    {
        id: 1,
        title: "this is the 1 book"
    },
    {
        id: 2,
        title: "this is the 2 book"
    },
    {
        id: 3,
        title: "this is the 3 book"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World he');
});
app.get('/product', (req, res)=>{
    res.json(Product);
});
app.get('/product/:id', (req, res)=>{
    const productId = parseInt(req.params.id);

    const singleItem = Product.find(products => products.id === productId);

    if(!singleItem){
        res.status(404).json('Book title not found search for someting within the range')
}else{
    res.status(200).send(singleItem);
}
})
app.post('/product', (req, res) => {
    const productAdd = {
        id : `${Product.length + 1}`,
        title: `this is the ${Product.length + 1} book`
    }

    Product.push(productAdd);

    res.status(201).json({
        product: productAdd,
        message: 'Product added successfully'
        
    });
});



app.delete('/product', (req, res) => {
    const index = Product.findIndex(
        product => product.id === req.body.id
    );

    if (index !== -1) {
        return res.status(404).send('Product not found');
    }

    Product.splice(index, 1);

    res.status(200).send('Product successfully deleted');
});
const PORT = 1020;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});