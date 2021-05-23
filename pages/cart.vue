<template>
    <div class="h-screen flex flex-col">
        <div class="pt-3 flex justify-between items-center">
            <!-- <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </button> -->
            <ButtonBack />
            
            <div class="flex items-center space-x-2">
                <h2 class="font-bold text-3xl text-teal-500 tracking-wider">Chashi</h2>
                <span class="text-xl text-gray-600">|</span>
                <p class="font-semibold text-gray-600">My Cart</p>
            </div>
            <div class="flex items-center space-x-1">
                <p class="font-bold">0</p>
                <p class="text-gray-600 font-semibold">item(s)</p>
            </div>
        </div>
        <div class="my-3 p-3 flex-1 bg-gray-100 overflow-y-auto">
            <div class="mb-3 px-3 flex justify-between items-center bg-white rounded overflow-hidden shadow-md">
                <div class="w-20 h-full">
                    <img class="h-full w-full object-cover" src="/images/p-2.jpeg" alt="">
                </div>
                <div class="flex-1 pl-3">
                    <div class="flex flex-col space-y-1 py-2 border-b border-gray-100">
                        <h4 class="text-sm font-bold">Marjan Boudoin Syrup Rasa Leci Botol 460 mL Karton</h4>
                        <p class="text-xs line-through text-gray-600">Tk. 1000</p>
                        <div class="flex items-center space-x-1 text-xs font-bold">
                            <p>Tk. 800</p>
                            <span class="font-normal">/</span>
                            <p class="font-normal">1 Carton</p>
                        </div>
                    </div>
                    <div class="py-3 flex justify-between items-center">
                        <p class="text-sm font-bold">Tk. 5,390</p>
                        <div class="flex items-center space-x-5">
                            <button class="inline-flex text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <div class="flex items-center space-x-2">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                    </svg>
                                </button>
                                <input class="w-10 text-center" type="text" value="0">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-3 flex justify-between items-center border-2 border-teal-500 rounded shadow-sm cursor-pointer">
            <div>
                <p class="text-sm font-bold">Use the Voucer</p>
                <p class="text-xs">Choose a voucer to get Discount!</p>
            </div>
            <div class="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
        <div class="py-4 flex justify-between items-center">
            <div>
                <p class="text-sm text-gray-600">Subtotal</p>
                <p class="text-xl font-bold tracking-wider">Tk. <span>0</span></p>
            </div>  
            <button>
                Checkout
            </button>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'checkout',

    head() {
        return {
            title: 'My Cart | Chashi',
        }
    }
}
</script>