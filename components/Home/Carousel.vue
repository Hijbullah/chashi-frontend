<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="i in 5" :key="i" class="flex space-x-3">
        <img class="w-full h-full" src="~/assets/images/carousel-1.jpeg" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        dots: true,
        // infinite: false,
        centerMode: true,
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
