<template>
    <section class="my-10">
        <h2 class="mb-5 text-xl font-bold uppercase tracking-wide leading-snug">Categories</h2>

        <div class="grid grid-cols-10 gap-x-3 gap-y-4">
            <NuxtLink to="/c/organix" class="h-full w-full block" v-for="(category, index) in categories" :key="index" href="#">
                <div  class="h-full w-full flex flex-col justify-center items-center border border-gray-300 rounded overflow-hidden shadow hover:border-teal-500">
                    <div class="relative h-20">
                        <img class="h-full w-full object-cover object-center" :src="category.image" alt="">
                    </div>
                    <h4 class="flex-1 text-xs font-semibold tracking-wide leading-tight px-1 py-2">{{ category.name }}</h4>
                </div>
            </NuxtLink>
        </div>
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
                ]
            }
        }
    }
</script>
