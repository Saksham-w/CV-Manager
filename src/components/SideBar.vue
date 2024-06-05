<template>
  <div class="w-full h-full flex flex-col p-6 bg-slate-300 items-center">
    <div class="h-1/10 w-full mt-4">
      <router-link
        to="/home"
        class="flex justify-center items-center"
      >
        <button class=" w-[50%] relative">
          <img
            class="w-full h-full object-cover rounded-full"
            src="../assets/CV.png"
            alt="CV Manager Logo"
          />
        </button>

        <button class="w-full h-full">
          <h1 class="text-2xl ml-4 md:text-3xl lg:text-3xl font-bold">
            CV Manager
          </h1>
        </button>
      </router-link>
    </div>
    <div
      class="h-4/10 mt-4 w-full flex flex-col items-start justify-center p-2"
    >
      <router-link
        to="/dashboard"
        class="w-full"
        :class="{
          'bg-slate-500 text-white rounded-lg': isActive('/dashboard'),
        }"
      >
        <button
          class="flex items-center justify-start w-full p-2 lg:p-4 hover:bg-slate-400 rounded-lg"
        >
          <i class="ri-home-4-line mx-4 text-xl md:text-2xl lg:text-3xl"></i>
          <h1 class="hidden md:block text-base md:text-lg lg:text-xl">
            Dashboard
          </h1>
        </button>
      </router-link>
      <router-link
        to="/upload"
        class="w-full"
        :class="{ 'bg-slate-500 text-white rounded-lg': isActive('/upload') }"
      >
        <button
          class="flex items-center justify-start w-full p-2 lg:p-4 hover:bg-slate-400 rounded-lg"
        >
          <i class="ri-team-line mx-4 text-xl md:text-2xl lg:text-3xl"></i>
          <h1 class="hidden md:block text-base md:text-lg lg:text-xl">
            Upload Profile
          </h1>
        </button>
      </router-link>
      <router-link
        to="/calendar"
        class="w-full"
        :class="{ 'bg-slate-500 text-white rounded-lg': isActive('/calendar') }"
      >
        <button
          class="flex items-center justify-start w-full p-2 lg:p-4 hover:bg-slate-400 rounded-lg"
        >
          <i
            class="ri-calendar-2-line mx-4 text-xl md:text-2xl lg:text-3xl"
          ></i>
          <h1 class="hidden md:block text-base md:text-lg lg:text-xl">
            Calendar
          </h1>
        </button>
      </router-link>
      <!-- <router-link
        to="/documents"
        class="w-full"
        :class="{
          'bg-slate-500 text-white rounded-lg': isActive('/documents'),
        }"
      > -->
        <button
          class="flex items-center justify-start w-full p-2 lg:p-4 hover:bg-slate-400 rounded-lg"
        >
          <i class="ri-file-3-line mx-4 text-xl md:text-2xl lg:text-3xl"></i>
          <h1 class="hidden md:block text-base md:text-lg lg:text-xl">
            Documents
          </h1>
        </button>
      <!-- </router-link> -->
      <!-- <router-link
        to="/reports"
        class="w-full"
        :class="{ 'bg-slate-500 text-white rounded-lg': isActive('/reports') }"
      > -->
        <button
          class="flex items-center justify-start w-full p-2 lg:p-4 hover:bg-slate-400 rounded-lg"
        >
          <i
            class="ri-file-chart-line mx-4 text-xl md:text-2xl lg:text-3xl"
          ></i>
          <h1 class="hidden md:block text-base md:text-lg lg:text-xl">
            Reports
          </h1>
        </button>
      <!-- </router-link> -->
    </div>
    <div
      class="w-full mt-8 lg:mt-24 flex flex-col items-center justify-center mx-4 py-4"
    >
      <div class="bg-slate-400/70 h-1 w-full"></div>
      <div class="flex justify-between items-center w-full mt-4 lg:mt-8">
        <button
          class="text-lg md:text-xl lg:text-2xl hover:underline"
          @click="logout"
        >
          Logout
        </button>
        <button
          class="text-2xl md:text-3xl lg:text-4xl hover:bg-slate-400 rounded-lg p-2"
          @click="logout"
        >
          <i class="ri-logout-box-r-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
