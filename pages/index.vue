<template>
    <div>
       
        <HomeBanner />

         <section>
            <div class="flex items-center space-x-4">
                <div class="w-1/5 px-4 py-4 flex items-center space-x-4 border border-gray-100 rounded shadow-sm">
                    <div class="h-10 w-10 flex items-center justify-center bg-gray-100 text-gray-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500">My Vouchers</p>
                        <p class="mt-1 text-sm font-bold">0 Vouchers</p>
                    </div>
                </div>
                <div class="w-1/5 px-4 py-4 flex items-center space-x-4 border border-gray-100 rounded shadow-sm">
                    <div class="h-10 w-10 flex items-center justify-center bg-gray-100 text-teal-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500">Share With Frends & Family</p>
                        <p class="mt-1 text-sm text-teal-500 font-bold">Get Voucher</p>
                    </div>
                </div>
                <div class="w-1/5 px-4 py-4 flex items-center space-x-4 border border-gray-100 rounded shadow-sm">
                    <div class="h-10 w-10 flex items-center justify-center bg-gray-100 text-teal-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500">My Community</p>
                        <p class="mt-1 text-sm text-teal-500 font-bold">0 products</p>
                    </div>
                </div>
            </div>
        </section>

        <HomeCategory />
    

        <section>
            <home-section class="mt-8">
                <template #title>Top Picks for You</template>
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