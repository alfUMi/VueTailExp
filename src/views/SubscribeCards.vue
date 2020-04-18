<template>
    <div class="bg-gray-300 w-full h-screen flex justify-center items-center">
        <div class="bg-white w-1/4 h-auto rounded-xl shadow-xl flex items-center flex-col text-center mr-8">
            <img src="../assets/SubscribeIllustration.png" alt="Subscribe Card" class="rounded-t-xl">

            <p class="my-4 text-2xl font-bold">GUESS WHAT?</p>

            <p class="text-sm mx-3 text-gray-700">Your discount code is 1 click away. Sign up to save <span class="font-bold">10% OFF</span> your first order.</p>

            <div class="flex mt-4">
                <input type="email" placeholder="Enter your email address" class="bg-gray-400 rounded-sm outline-none shadow-inner text-sm pl-2 w-48 h-10">
                <button class="bg-subscribeButton w-24 h-10 rounded-sm text-white text-sm font-semibold">SUBMIT</button>
            </div>

            <div class="flex items-start mt-2 mb-4 mx-8">
                <input type="checkbox" name="" id="" class="w-6 h-6">
                <p class="text-sm">I agree to receive discount codes and exclusive offers to my email</p>
            </div>

            <div class="flex mb-4">
                <img src="../assets/paypal-logo.png" alt="PayPal" class="w-16 h-5 mr-8">
                <img src="../assets/dmca_logo.png" alt="DMCA" class="w-16 h-5 mr-8">
                <img src="../assets/sslsecured.png" alt="SSL SECURE" class="w-16 h-5">
            </div>
        </div>

        <div class="bg-white w-1/4 h-auto rounded-xl shadow-xl flex items-center flex-col text-center -mt-28">
            <img src="../assets/ThankYouIllustration.png" alt="Thank You Card" class="rounded-t-xl">

            <p class="my-4 text-2xl font-bold">THANK YOU!</p>

            <p class="text-sm mx-10 mb-8 text-gray-700">Your discount code has already landed in your inbox.</p>
        </div>
    </div>
</template>