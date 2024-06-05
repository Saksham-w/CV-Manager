<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h1 class="font-bold text-lg">Update Form</h1>

    <div class="h-full w-[60%] bg-slate-200 rounded-lg p-2">
      <form
        class="w-[50%] ml-40 flex flex-col justify-center items-center p-2"
        v-on:submit.prevent="submit"
      >
        <div class="mb-1">
          <label for="name" class="block font-bold mb-1">Name:</label>
          <input
            type="text"
            id="name"
            v-model="applicant.name"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="tech" class="block font-bold mb-1">Technology:</label>
          <input
            type="text"
            id="tech"
            v-model="applicant.tech"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="level" class="block font-bold mb-1">Level:</label>
          <input
            type="text"
            id="level"
            v-model="applicant.level"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="salaryexp" class="block font-bold mb-1"
            >Salary Expectation:</label
          >
          <input
            type="text"
            id="salaryexp"
            v-model="applicant.salaryexp"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="exp" class="block font-bold mb-1">Experience:</label>
          <input
            type="number"
            id="exp"
            v-model="applicant.exp"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="number" class="block font-bold mb-1">Phone Number:</label>
          <input
            type="tel"
            id="number"
            v-model="applicant.number"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="email" class="block font-bold mb-1">Email:</label>
          <input
            type="email"
            id="email"
            v-model="applicant.email"
            required
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="ref" class="block font-bold mb-1">Reference:</label>
          <input
            type="text"
            id="ref"
            v-model="applicant.ref"
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <div class="mb-1">
          <label for="image" class="block font-bold mb-1"
            >Upload Your CV Here:</label
          >
          <input
            type="file"
            name="image"
            class="w-full px-4 py-1 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          @click="updateItems"
          class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "Individual",
  data() {
    return {
      name: "",
      applicant: "",
      id: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.fetchApplicants(this.id);
  },
  methods: {
    async fetchApplicants(id) {
      const response = await axios.get(
        `https://swcstgbe.cellapp.co/api/cvlists/${id}`
      );
      this.applicant = response.data[1].vdata;
    },

    async updateItems() {
      try {
        let result = await axios.post(
          `https://swcstgbe.cellapp.co/api/update/cv/${this.id}`,
          this.applicant
        );

        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Info" });
        }

        alert("Applicant data updated successfully!");
      } catch (error) {
        console.error("Error updating applicant data:", error);
        alert("An error occurred while updating the applicant data.");
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-info h2 {
  margin: 0;
  font-size: 24px;
}

.profile-info p {
  margin: 5px 0;
  color: #888;
}

.email-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.email-button:hover {
  background-color: #0056b3;
}

.contact-information {
  margin-top: 20px;
}

.contact-information h3 {
  margin-bottom: 20px;
  color: #333;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 24px;
  margin-right: 10px;
  color: #007bff;
}

.info-item strong {
  display: block;
  color: #333;
}

.info-item p {
  margin: 0;
  color: #666;
}
.table {
  border-collapse: collapse;
  width: 100%;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.table th {
  background-color: #f2f2f2;
}
</style>
