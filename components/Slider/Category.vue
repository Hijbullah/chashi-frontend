<template>
    <div class="carousel-wrapper">
        <VueSlickCarousel v-bind="slickOptions">
            <div class="border border-teal-500" v-for="(category, index) in categories" :key="index">
                <div class="rounded-md ">
                    <div class="h-20 ">
                        <img class="h-full w-full object-cover object-center" :src="category.image" alt="">
                    </div>
                    <p class="py-2">{{ category.name }}</p>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slickOptions: {
                draggable: false,
                accessibility: false,
                arrow: true,
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 2
            },
            categories: [
                {
                    name: 'Harvest',
                    image: '/images/img1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/img2.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/img3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/img4.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/img1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/img2.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/img3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/img4.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/img1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/img2.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/img3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/img4.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/img1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/img2.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/img3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/img4.jpeg'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .carousel-wrapper >>> .slick-slide{
        padding: 0 4px;
    }
    .carousel-wrapper >>> .slick-slide:first-child{
       padding-left: 0;
    }
    .carousel-wrapper >>> .slick-slide:last-child{
       padding-right: 0;
    }
</style>
