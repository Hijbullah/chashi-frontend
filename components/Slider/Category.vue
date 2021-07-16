<template>
    <section class="mt-8 mb-10">
        <slider-template :settings="settings">
            <NuxtLink :to="`/c/${category.name}`" v-for="(category, index) in categories" :key="index" href="#">
                <div class="pb-2 flex flex-col items-center justify-center border border-gray-300 rounded overflow-hidden shadow hover:border-teal-500">
                    <div class="relative h-14">
                        <img class="h-full w-full object-cover object-center" :src="category.image" alt="">
                    </div>
                    <h4 class="overflow-hidden h-10 px-1 pt-2 pb-2 text-xs">{{ category.name }}</h4>
                </div>
            </NuxtLink>
        </slider-template>
    </section>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: 'Harvest',
                    image: '/images/1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/2.jpeg'
                },
                {
                    name: 'Vegetables and i dont know',
                    image: '/images/3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/4.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/5.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/6.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/7.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/3.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/2.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/3.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/4.jpeg'
                },
                {
                    name: 'Harvest',
                    image: '/images/1.jpeg'
                },
                {
                    name: 'Fruits',
                    image: '/images/5.jpeg'
                },
                {
                    name: 'Vegetables',
                    image: '/images/6.jpeg'
                },
                {
                    name: 'Organic',
                    image: '/images/7.jpeg'
                },
            ],
            settings: {
                accessibility: false,
                arrow: true,
                dots: false,
                infinite: false,
                slidesToShow: 12,
                slidesToScroll: 1,
                swipeToSlide: true
            }
        }
    }
}
</script>
