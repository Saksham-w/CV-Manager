<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 py-6"
  >
    <div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
      <h1 class="font-bold text-2xl text-center mb-6">Job Application Form</h1>
      <form @submit.prevent="submit" class="space-y-4">
        <div class="flex flex-col">
          <label for="name" class="font-semibold mb-1">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="tech" class="font-semibold mb-1">Technology:</label>
          <input
            type="text"
            id="tech"
            v-model="tech"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="level" class="font-semibold mb-1">Level:</label>
          <input
            type="text"
            id="level"
            v-model="level"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="salaryexp" class="font-semibold mb-1"
            >Salary Expectation:</label
          >
          <input
            type="text"
            id="salaryexp"
            v-model="salaryexp"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="exp" class="font-semibold mb-1">Experience:</label>
          <input
            type="number"
            id="exp"
            v-model="exp"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="number" class="font-semibold mb-1">Phone Number:</label>
          <input
            type="tel"
            id="number"
            v-model="number"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="font-semibold mb-1">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="ref" class="font-semibold mb-1">Reference:</label>
          <input
            type="text"
            id="ref"
            v-model="ref"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label for="image" class="font-semibold mb-1"
            >Upload Your CV Here:</label
          >
          <input
            type="file"
            name="image"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Upload",
  data() {
    return {
      name: "",
      tech: "",
      level: "",
      salaryexp: "",
      exp: "",
      number: "",
      email: "",
      ref: "",
      image: "",
    };
  },
  methods: {
    async submit() {
      try {
        let result = await axios.post(
          "https://swcstgbe.cellapp.co/api/store/cv",
          {
            name: this.name,
            tech: this.tech,
            level: this.level,
            salaryexp: this.salaryexp,
            exp: this.exp,
            number: this.number,
            email: this.email,
            ref: this.ref,
            image: this.image,
          }
        );
        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Dashboard" });
        }
      } catch (error) {
        console.error("There was an error submitting the form", error);
      }
    },
  },
};
</script>

