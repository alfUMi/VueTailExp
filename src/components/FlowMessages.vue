<template>
    <div class="bg-gray-300 w-full h-screen flex items-center justify-center flex-col">
        <div class="bg-white w-1/3 h-16 mb-6 shadow-lg border-l-4 border-success">
            <div class="flex items-center justify-start ml-4 mt-2">
                <div class="bg-success w-6 h-6 rounded-full mr-4 flex items-center justify-center">
                <img src="../assets/correct.png" alt="success" class="w-3 h-3">
                </div>

                <div class="flex flex-col">
                <p class="font-bold">Success</p>
                <p class="text-sm text-gray-600">Anyone with access can view your invited visitors.</p>
                </div>

                <div class="ml-12"><img src="../assets/cancel.png" alt="cross" class="w-3 h-3"></div>
            </div>
        </div>

        <div class="bg-white w-1/3 h-16 mb-6 shadow-lg border-l-4 border-info">
            <div class="flex items-center justify-start ml-4 mt-2">
                <div class="bg-info w-6 h-6 rounded-full mr-4 flex items-center justify-center">
                <img src="../assets/information-symbol.png" alt="success" class="w-3 h-3">
                </div>

                <div class="flex flex-col">
                <p class="font-bold">Info</p>
                <p class="text-sm text-gray-600">Anyone with access can view your invited visitors.</p>
                </div>

                <div class="ml-12"><img src="../assets/cancel.png" alt="cross" class="w-3 h-3"></div>
            </div>
        </div>

        <div class="bg-white w-1/3 h-16 shadow-lg border-l-4 border-warning">
            <div class="flex items-center justify-start ml-4 mt-2">
                <div class="bg-warning w-6 h-6 rounded-full mr-4 flex items-center justify-center">
                <img src="../assets/warning-sign.png" alt="success" class="w-3 h-3">
                </div>

                <div class="flex flex-col">
                <p class="font-bold">Warning</p>
                <p class="text-sm text-gray-600">Anyone with access can view your invited visitors.</p>
                </div>

                <div class="ml-12"><img src="../assets/cancel.png" alt="cross" class="w-3 h-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FlowMessages',
        components: {
        }
    }
</script>