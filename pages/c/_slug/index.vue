<template>
    <div>
        <div class="mt-4 flex justify-between items-center">
            <div>
                <h4 class="text-3xl font-bold tracking-wide leading-snug">Organic</h4>
                <p class="text-xs text-gray-500">Showing 24 products</p>
            </div>
            <div class="flex items-center">
                <p class="text-sm font-bold text-gray-500">Sort:</p>
                <div class="ml-4">
                   <ProductSortDropdown />
                </div>
            </div>
        </div>

        <SliderCategory />

        <product-template>
            <ProductSingle v-for="i in 100" :key="i" />
        </product-template>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Collection | Category Name',
            }
        }
    }
</script>