new Vue({
    el: '#app',
    data: {
        newProduct: { name: '', price: 0 },
        products: [],
        editedProductIndex: -1
    },
    computed: {
        total() {
            return this.products.reduce((acc, product) => acc + product.price, 0);
        }
    },
    methods: {
        addProduct() {
            if (this.editedProductIndex === -1) {
                this.products.push({ ...this.newProduct });
            } else {
                // Edit produk yang ada
                this.products[this.editedProductIndex] = { ...this.newProduct };
                this.editedProductIndex = -1;
            }
            this.newProduct = { name: '', price: 0 };
        },
        editProduct(index) {
            this.newProduct = { ...this.products[index] };
            this.editedProductIndex = index;
        },
        removeProduct(index) {
            this.products.splice(index, 1);
        }
    }
});
