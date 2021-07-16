<template>
    <div class="group rounded-md overflow-hidden transition-shadow hover:shadow-lg">
        <div class="h-52">
            <a href="#">
                <img class="h-full w-full object-cover" :src="'/images/' + (Math.floor(Math.random() * 7) + 1) + '.jpeg'" alt="product name">
            </a>
        </div>
        <div class="mt-2 px-3 py-4">
            <h2 class="text-gray-700 text-sm font-medium tracking-wide leading-snug">
                <a href="#">
                    Apple from village 100% Fresh and Organic
                </a>
            </h2>
            <div class="mt-5 flex flex-col items-start space-y-1">
                <span class="px-2 py-1 inline-block text-sm bg-red-100 text-red-600 font-bold leading-none rounded">-{{ productDiscount }}%</span>
                <span class="inline-block text-xs text-gray-400 line-through">Tk. 12000</span>
            </div>
            <div class="mt-3 flex items-center space-x-2">
                <p class="font-bold text-red-600">Tk. {{ productPrice }}</p>
                <span class="text-xs text-gray-500">/</span>
                <p class="text-xs text-gray-500">1 Pack</p>
            </div>
        
            <button class=" opacity-0 group-hover:opacity-100 transition-all inline-flex justify-center w-full mt-4 px-2 py-3 bg-teal-500 text-white font-bold text-xs uppercase tracking-wider leading-snug rounded-md hover:bg-teal-700 focus:outline-none">Add To Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            productDiscount() {
                return Math.floor(Math.random() * 20) + 10;
            },
            productPrice() {
                return Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;
            }
        }
    }
</script>