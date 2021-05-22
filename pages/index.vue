<template>
    <div>
        <section>
            <h2 class="mb-4 text-teal-500 text-xl font-bold uppercase">Categories</h2>
            <div class="grid grid-cols-10 gap-x-3 gap-y-4">
                <a v-for="(category, index) in categories" :key="index" href="#">
                    <div class="flex flex-col items-center border border-gray-300 rounded overflow-hidden shadow hover:border-teal-500">
                        <div class="h-20">
                            <img class="h-full w-full object-cover object-center" :src="category.image" alt="">
                        </div>
                        <h4 class="py-2">{{ category.name }}</h4>
                    </div>
                </a>
            </div>
        </section>

        <section>
            <home-section class="mt-8">
                <template #title>Featured Products</template>
                <div class="grid grid-cols-6 gap-x-4 gap-y-5">
                    <div class="group rounded-md overflow-hidden transition transition-shadow hover:shadow-lg">
                        <div class="h-52">
                            <a href="#">
                                <img class="h-full w-full object-cover" src="/images/p1.jpeg" alt="product name">
                            </a>
                        </div>
                        <div class="mt-2 px-3 py-4">
                            <h2 class="text-sm font-bold tracking-wide leading-snug">
                                <a href="#">
                                    Uleg Sambal Terasi Sachet 10x20 gr
                                </a>
                            </h2>
                            <div class="mt-5 flex flex-col items-start space-y-1">
                                <span class="px-2 py-1 inline-block text-sm bg-red-100 text-red-600 font-bold leading-none rounded">-12%</span>
                                <span class="inline-block text-xs text-gray-400 line-through">Tk. 16000</span>
                            </div>
                            <div class="mt-3 flex items-center space-x-2">
                                <p class="font-bold text-red-600">Tk. 14,800</p>
                                <span class="text-xs text-gray-500">/</span>
                                <p class="text-xs text-gray-500">1 Pack</p>
                            </div>
                        
                            <button class=" opacity-0 group-hover:opacity-100 transition transition-all inline-flex justify-center w-full mt-4 px-2 py-3 bg-teal-500 text-white font-bold text-xs uppercase tracking-wider leading-snug rounded-md hover:bg-teal-700 focus:outline-none">Add To Cart</button>
                        </div>
                    </div>
                    <div class="group rounded-md overflow-hidden transition transition-shadow hover:shadow-lg">
                        <div class="h-52">
                            <a href="#">
                                <img class="h-full w-full object-cover" src="/images/p-2.jpeg" alt="product name">
                            </a>
                        </div>
                        <div class="mt-2 px-3 py-4">
                            <h2 class="text-sm font-bold tracking-wide leading-snug">
                                <a href="#">
                                    Apple from village 100% Fresh and Organic
                                </a>
                            </h2>
                            <div class="mt-5 flex flex-col items-start space-y-1">
                                <span class="px-2 py-1 inline-block text-sm bg-red-100 text-red-600 font-bold leading-none rounded">-8%</span>
                                <span class="inline-block text-xs text-gray-400 line-through">Tk. 12000</span>
                            </div>
                            <div class="mt-3 flex items-center space-x-2">
                                <p class="font-bold text-red-600">Tk. 10,000</p>
                                <span class="text-xs text-gray-500">/</span>
                                <p class="text-xs text-gray-500">1 Pack</p>
                            </div>
                        
                            <button class=" opacity-0 group-hover:opacity-100 transition transition-all inline-flex justify-center w-full mt-4 px-2 py-3 bg-teal-500 text-white font-bold text-xs uppercase tracking-wider leading-snug rounded-md hover:bg-teal-700 focus:outline-none">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </home-section>
        </section>
    </div>
</template>

<script>

export default {
    data() {
        return {
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
