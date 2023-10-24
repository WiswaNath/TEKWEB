new Vue({
    el: '#app',
    data: {
        newProduct: { name: '', price: 0 },
        products: [],
    },
    computed: {
        sortedProducts() {
            return this.products.slice().sort((a, b) => a.price - b.price);
        }
    },
    methods: {
        addProduct() {
            this.products.push({ ...this.newProduct });
            this.newProduct = { name: '', price: 0 };
            this.sortProducts(); // Menyortir produk setelah menambahkannya
        },
        editProduct(index) {
            this.newProduct = { ...this.products[index] };
            this.products.splice(index, 1);
            this.sortProducts(); // Menyortir produk setelah mengeditnya
        },
        removeProduct(index) {
            this.products.splice(index, 1);
        },
        sortProducts() {
            this.products.sort((a, b) => a.price - b.price); // Menyortir produk saat produk ditambahkan atau diedit
        }
    },
});
