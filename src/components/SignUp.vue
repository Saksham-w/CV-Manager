<template>
  <div
    class="py-10 px-6 md:px-12 lg:px-24 xl:px-48 h-screen w-full flex justify-center items-center"
  >
    <div
      class="w-full max-w-lg mx-auto border-2 border-white rounded-3xl bg-gray-300 flex flex-col justify-center items-center"
    >
      <img
        class="w-[50%] h-auto p-2 rounded-3xl"
        src="../assets/Food App icon.jpeg"
        alt=""
      />
      <div class="w-full flex flex-col justify-center items-center p-4">
        <h1 class="font-bold text-3xl p-4">Hello Again!</h1>
        <p class="px-6 text-center">Welcome back</p>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <input
          type="text"
          v-model="name"
          class="w-full md:w-80 h-10 pl-5 mb-4 rounded-xl border-2 border-black-500"
          placeholder="Enter Name"
        />
        <input
          type="text"
          v-model="email"
          class="w-full md:w-80 h-10 pl-5 mb-4 rounded-xl border-2 border-black-500"
          placeholder="Enter Email"
        />
        <input
          type="password"
          v-model="password"
          class="w-full md:w-80 h-10 pl-5 mb-4 rounded-xl border-2 border-black-500"
          placeholder="Enter Password"
        />
        <div class="w-full flex justify-center items-center m-4">
          <p class="text-sm">Recovery Password</p>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <button
          v-on:click="signUp"
          class="w-full md:w-80 h-10 bg-orange-500 rounded-xl"
        >
          Sign Up
        </button>
        <p class="mt-4">Or continue with</p>
        <div class="w-full flex justify-center items-center mt-4">
          <a class="text-3xl" href="/" target="_blank"
            ><i class="ri-google-fill"></i
          ></a>
          <a class="text-3xl" href="/" target="_blank"
            ><i class="ri-apple-fill"></i
          ></a>
          <a class="text-3xl" href="/" target="_blank"
            ><i class="ri-facebook-circle-fill"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("https://swcstgbe.cellapp.co/api/signup", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }

      // Inside the signUp method after successful sign up
      // this.$router.push({
      //   name: "Home",
      //   query: {
      //     name: this.name,
      //   },
      // });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
