<template>
    <div id="nav" class="bg-gray-700 w-full h-12 flex items-center justify-around text-white">
        <router-link to="/" class="nav__item">Home</router-link>
        <router-link to="/subscribe-cards" class="nav__item">Subscribe Cards</router-link>
        <router-link to="/project-cards" class="nav__item">Project Cards</router-link>
        <router-link to="/pricings" class="nav__item">Pricings</router-link>
        <router-link to="/flow-messages" class="nav__item">Flow Messages</router-link>
        <router-link to="/card-flow-messages" class="nav__item">Card Flow Messages</router-link>
        <router-link to="/ar-permissions" class="nav__item">AR Permissions</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>