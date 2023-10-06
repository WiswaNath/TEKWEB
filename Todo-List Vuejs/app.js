new Vue({
    el: '#app',
    data: {
        newProduct: { name: '', price: 0 },
        products: [],
        editedProductIndex: -1,
        total: null // Inisialisasi total ke null
    },
    computed: {
        // Menghitung total harga produk
        totalPrice() {
            return this.products.reduce((acc, product) => acc + product.price, 0);
        }
    },
    methods: {
        // Menambahkan atau mengedit produk
        addProduct() {
            if (this.editedProductIndex === -1) {
                this.products.push({ ...this.newProduct });
            } else {
                this.products[this.editedProductIndex] = { ...this.newProduct };
                this.editedProductIndex = -1;
            }
            this.newProduct = { name: '', price: 0 };
        },
        // Mengedit produk yang ada
        editProduct(index) {
            this.newProduct = { ...this.products[index] };
            this.editedProductIndex = index;
        },
        // Menghapus produk
        removeProduct(index) {
            this.products.splice(index, 1);
        }
    },
    watch: {
        total(newValue) {
            // Menggunakan parseInt() untuk menghilangkan angka 0 di awal
            this.total = parseInt(newValue, 10);
        }
    }
});
