<template>
    <div>
        <div class="w-60 relative z-20">
            <button @click="showDropdown = !showDropdown" class="w-full h-10 px-4 border border-gray-200 rounded focus:outline-none">
                <div class="flex justify-between items-center">
                    <p class="text-sm font-bold tracking-wide leading-none">Most Suitable</p>
                    <p class="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </p>
                </div>
            </button>

            <div v-if="showDropdown" class="w-full absolute mt-2 px-4 py-5 flex flex-col space-y-2 bg-white border border-gray-200 rounded shadow-lg">
                <button class="w-full px-2 py-1 border border-transparent rounded hover:bg-gray-100 focus:outline-none">
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Most Suitable</p>
                        <p class="text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                </button>
                <button class="w-full px-2 py-1 border border-transparent rounded hover:bg-gray-100 focus:outline-none">
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Hightest Price</p>
                        <p class="text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                </button>
                <button class="w-full px-2 py-1 border border-transparent rounded hover:bg-gray-100 focus:outline-none">
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Lowest Price</p>
                        <p class="text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                </button>
                <button class="w-full px-2 py-1 border border-transparent rounded hover:bg-gray-100 focus:outline-none">
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Discount</p>
                        <p class="text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                </button>
                
            </div>
        </div>
        <div class="fixed inset-0 bg-gray-900 bg-opacity-25"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showDropdown: false,
            }
        }
    }
</script>