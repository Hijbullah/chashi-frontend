<template>
    <div class="carousel-wrapper h-52 overflow-hidden">
        <VueSlickCarousel v-bind="slickOptions">
            <div v-for="i in 5" :key="i">
                <!-- <div class="h-52">
                    slide
                </div> -->
                <a href="https://www.google.com">
                    <img class="w-full h-full select-none" src="~/assets/images/carousel-1.jpeg" />
                </a>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slickOptions: {
                accessibility: false,
                dots: true,
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    }
}
</script>

<style scoped>
    .carousel-wrapper >>> .slick-slide{
        padding: 0 7px;
    }
    .carousel-wrapper >>> .slick-slide:first-child{
       padding-left: 0;
    }
    .carousel-wrapper >>> .slick-slide:last-child{
       padding-right: 0;
    }
    .carousel-wrapper >>> .slick-dots {
        position: absolute;
        right: 36px;
        bottom: 10px;
        width: auto;
    }
    .carousel-wrapper >>> .slick-dots li {
        margin: 0 4px;
    }
</style>
