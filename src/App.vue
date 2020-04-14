<template>
  <div id="app">
    <!-- <FlowMessages /> -->
    <!-- <Pricings /> -->
    <!-- <card-flow-messages /> -->
    <!-- <subscribe-cards /> -->
    <project-cards />
  </div>
</template>

<script>
// import FlowMessages from './components/FlowMessages.vue';
// import Pricings from './components/Pricings.vue';
// import CardFlowMessages from './components/CardFlowMessages.vue';
// import SubscribeCards from './components/SubscribeCards.vue';
import ProjectCards from './components/ProjectCards.vue';

export default {
  name: 'App',
  components: {
    // FlowMessages
    // Pricings
    // CardFlowMessages
    // SubscribeCards
    ProjectCards
  }
}
</script>
