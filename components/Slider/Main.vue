<template>
    <VueSlickCarousel v-bind="settings">
        <slot></slot>
 
        <template #prevArrow>
            <button class="absolute top-1/2 -left-2 transform -translate-y-1/2 inline-flex items-center p-2 bg-white text-teal-500 border border-gray-200 rounded-full shadow-2xl transition-opacity duration-700 z-10 focus:outline-none">
                <!-- {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }} -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </template>

        <template #nextArrow>
            <button class="absolute top-1/2 -right-2 transform -translate-y-1/2 inline-flex items-center p-2 bg-white text-teal-500 border border-gray-200 rounded-full shadow-2xl transition-opacity duration-700 z-10 focus:outline-none">
                <!-- {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }} -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </template>
      
        <template #customPaging="page">
            <div class="custom-dot">
                {{ page }}
            </div>
        </template>
    </VueSlickCarousel>
</template>

<script>
export default {
    props: {
        slidesItems: {
            type: Number,
            default: 1
        },
        slidesScrollItem: {
            type: Number,
            default: 1
        }

    },

    data() {
        return {
            settings: {
                accessibility: false,
                arrow: true,
                dots: false,
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: this.slidesItems,
                slidesToScroll: this.slidesScrollItem,
                swipeToSlide: true
            }
        }
    }
}
</script>
