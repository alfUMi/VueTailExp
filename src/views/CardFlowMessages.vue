<template>
    <div class="bg-gray-300 w-full h-screen flex items-center justify-center">
        <div class="bg-white w-1/5 h-2/4 rounded-xl shadow-lg flex items-center flex-col mr-20 -mt-16">
            <img src="../assets/SuccessIllustration.png" alt="Success" class="w-32 h-32 mt-2">

            <p class="mt-5 text-2xl font-semibold text-successTitle mb-2">SUCCESS!</p>

            <p class="text-xs text-center mr-12 ml-12 mb-6">Congrats! You will now enjoy our new updates for next year.</p>

            <button class="bg-successTitle w-32 h-10 rounded-full text-white text-sm font-semibold">DONE</button>
        </div>

        <div class="bg-white w-1/5 h-2/4 rounded-xl shadow-lg flex items-center flex-col mt-16">
            <img src="../assets/ErrorIllustration.png" alt="Success" class="w-24 h-24 mt-6">

            <p class="mt-10 text-2xl font-semibold text-errorTitle mb-2">OH NO...</p>

            <p class="text-xs text-center mr-12 ml-12 mb-6">Some thing went wrong, let's try again.</p>

            <button class="bg-errorTitle w-40 h-10 rounded-full text-white text-sm font-semibold">TRY AGAIN</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardFlowMessages'
}
</script>