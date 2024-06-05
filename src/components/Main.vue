<template>
  <div class="w-full min-h-screen flex">
    <div class="fixed top-0 left-0 w-[20%] h-screen bg-white shadow-lg">
      <SideBar />
    </div>
    <div class="ml-[20%] w-[80%] min-h-screen">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';

export default {
  name: "Main",
  components: {SideBar},
};
</script>
