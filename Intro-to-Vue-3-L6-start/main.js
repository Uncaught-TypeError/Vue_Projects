const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            removebutton: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            this.removebutton = true
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        reduceFromCart(){
            if (this.cart == 0){
                this.removebutton = false
            }
            else if(this.cart > 0){
                this.cart -= 1
                this.removebutton = true
            }
            else{
                this.removebutton = false
            }
        },
    }
})
