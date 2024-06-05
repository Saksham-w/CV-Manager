<template>
  <div class="flex flex-col justify-center items-center ">
  <h1 class="font-bold text-2xl mt-16">Welcome to CV Manager</h1>
  <div
    class="py-10 px-6 md:px-12 lg:px-24 xl:px-48 h-screen w-full flex justify-center items-center"
  >
    <div
      class="w-full max-w-md mx-auto border-2 border-white rounded-3xl bg-gray-300 flex flex-col justify-center items-center"
    >
      <img
        class="h-1/2 w-auto p-2 rounded-3xl"
        src="../assets/Food App icon.jpeg"
        alt=""
      />
      <div class="h-1/2 flex flex-col justify-center items-center">
        <div class="p-4">
          <h1 class="font-bold text-3xl p-4">Login</h1>
        </div>
        <div class="flex flex-col justify-center items-center">
          <input
            type="text"
            v-model="email"
            class="w-80 md:w-96 h-10 pl-5 mb-2 rounded-xl border-2 border-black-500"
            placeholder="Enter email"
          />
          <input
            type="password"
            v-model="password"
            class="w-80 md:w-96 h-10 pl-5 mb-2 rounded-xl border-2 border-black-500"
            placeholder="Enter Password"
          />
        </div>
        <div class="flex flex-col justify-center items-center">
          <button
            v-on:click="login"
            class="w-80 md:w-96 h-10 bg-orange-500 rounded-xl"
          >
            Login
          </button>
          <p class="p-4">
            <router-link to="/signup">Sign Up</router-link>
          </p>
        </div>
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
      // Authentication successful
      const token = response.data.token; // Assuming the token is returned in the response data
      localStorage.setItem("auth-token", token); // Store the token in local storage
      localStorage.setItem("name", response.data.user.name)
      this.$router.push({ name: "Home" }); // Redirect to home page
    } else {
      // Authentication failed
      console.error("Authentication failed");
      // Display error message or handle authentication failure as needed
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
    // Display error message or handle login error as needed
  }
  // Inside the signUp method after successful sign up
  // this.$router.push({
  //       name: "Home",
  //       query: {
  //         email: this.email,
  //       },
  //     });
},

  },
  mounted() {
  let token = localStorage.getItem("auth-token");
  if (token) {
    this.$router.push({ name: "Home" });
  }
}

};
</script>
