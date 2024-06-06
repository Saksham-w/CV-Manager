<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <h1 class="font-bold text-2xl mt-16 text-center text-gray-800">Welcome to CV Manager</h1>
    <div class="py-10 px-6 md:px-12 lg:px-24 xl:px-48 flex justify-center items-center w-full">
      <div class="w-full max-w-md mx-auto border-2 border-gray-300 rounded-3xl bg-white shadow-lg">
        <img class="h-48 w-auto p-4 rounded-t-3xl mx-auto" src="../assets/CV.png" alt="CV Logo" />
        <div class="flex flex-col justify-center items-center p-4">
          <h1 class="font-bold text-3xl text-gray-800">Login</h1>
          <div class="mt-4 w-full">
            <input
              type="text"
              v-model="email"
              @keydown.enter="login"
              class="w-full h-12 pl-5 mb-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-orange-500"
              placeholder="Enter email"
            />
            <input
              type="password"
              v-model="password"
              @keydown.enter="login"
              class="w-full h-12 pl-5 mb-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-orange-500"
              placeholder="Enter Password"
            />
          </div>
          <button
            v-on:click="login"
            class="w-full h-12 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-300"
          >
            Login
          </button>
          <p class="mt-4 text-gray-600">
            Don't have an account?
            <router-link to="/signup" class="text-orange-500 hover:underline">Sign Up</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("https://swcstgbe.cellapp.co/api/login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 201) {
          const token = response.data.token;
          localStorage.setItem("auth-token", token);
          localStorage.setItem("name", response.data.user.name);
          this.$router.push({ name: "Home" });
        } else {
          console.error("Authentication failed");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
      }
    },
  },
  mounted() {
    const token = localStorage.getItem("auth-token");
    if (token) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

