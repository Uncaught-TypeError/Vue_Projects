app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" action="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>

        
        <p for="recommendation">Would you recommend this product?</p>
        <label style="margin: 10px auto; text-align: center;" for="yes">Yes</label><br>
        <input style="margin: 10px auto;margin-top: -15px; height: 20px;" type="radio" id="yes" value="Yes" v-model="recommendation">
        <label style="margin: 10px auto; text-align: center;" for="no">No</label><br>
        <input style="margin: 10px auto; margin-top: -30px; height: 20px;" type="radio" id="no" value="No" v-model="recommendation">

        <input type="submit" class="button" value="Submit">
    </form>
    `,
    data(){
        return {
            name: '',
            review: '',
            rating: null,
            recommendation: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommendation === '' ){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommendation: this.recommendation
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommendation = ''
        }
    }
})