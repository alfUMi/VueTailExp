<template>
    <div class="bg-purple-700 w-full h-screen flex justify-center items-center">
        <div class="bg-white w-1/4 h-auto shadow-md rounded-2xl flex flex-col items-center mr-8">
            <img src="../assets/TopBackground.png" alt="TopBackground" class="w-full rounded-t-2xl">
            <img src="../assets/CameraIllustration.png" alt="Camera Illustration" class="-mt-40 w-56 h-64 mb-14">

            <p class="font-bold text-lg mb-6">Enable Camera</p>
            <p class="text-center text-gray-600 mx-12 mb-14">Please provide us access to your camera, which is required for Augmented Reality</p>

            <button class="bg-blue-100 w-48 h-12 rounded-full text-blue-700 text-sm font-semibold mb-8">GO TO SETTINGS</button>
        </div> <!-- Camera Permission -->

        <div class="bg-white w-1/4 h-auto shadow-md rounded-2xl flex flex-col items-center mr-8">
            <img src="../assets/TopBackground.png" alt="TopBackground" class="w-full rounded-t-2xl">
            <img src="../assets/NotificationIllustration.png" alt="Camera Illustration" class="-mt-40 w-56 h-64 mb-14">

            <p class="font-bold text-lg mb-6">Enable Notifications</p>
            <p class="text-center text-gray-600 mx-12 mb-14">Enable notifications so you don't miss another Augmented Reality experiences near you</p>

            <button class="bg-blue-100 w-48 h-12 rounded-full text-blue-700 text-sm font-semibold mb-8">GO TO SETTINGS</button>
        </div> <!-- Notification Permission -->

        <div class="bg-white w-1/4 h-auto shadow-md rounded-2xl flex flex-col items-center">
            <img src="../assets/TopBackground.png" alt="TopBackground" class="w-full rounded-t-2xl">
            <img src="../assets/GeolocationIllustration.png" alt="Camera Illustration" class="-mt-40 w-56 h-64 mb-14">

            <p class="font-bold text-lg mb-6">Enable Geolocation</p>
            <p class="text-center text-gray-600 mx-12 mb-14">By allowing geolocation you are able to explore AR experiences from your friends</p>

            <button class="bg-blue-100 w-48 h-12 rounded-full text-blue-700 text-sm font-semibold mb-8">GO TO SETTINGS</button>
        </div> <!-- Geolocation Permission -->
    </div>
</template>

<script>
export default {
    name: "ARPermissions"
}
</script>