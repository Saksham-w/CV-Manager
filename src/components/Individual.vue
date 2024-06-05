<template>
  <!-- <div class="container mx-auto flex flex-col justify-center items-center"> -->
  <!-- <h1 class="text-3xl font-bold mb-4">Applicants Information</h1> -->

  <!-- <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Technology</th>
          <th class="px-4 py-2">Level</th>
          <th class="px-4 py-2">Salary Expectation</th>
          <th class="px-4 py-2">Experience</th>
          <th class="px-4 py-2">Phone Number</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Reference</th>
          <th class="px-4 py-2">Image</th>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Interviewer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">{{ this.applicant.name }}</td>
          <td class="border px-4 py-2">{{ this.applicant.tech }}</td>
          <td class="border px-4 py-2">{{ this.applicant.level }}</td>
          <td class="border px-4 py-2">{{ this.applicant.salaryexp }}</td>
          <td class="border px-4 py-2">{{ this.applicant.exp }}</td>
          <td class="border px-4 py-2">{{ this.applicant.number }}</td>
          <td class="border px-4 py-2">{{ this.applicant.email }}</td>
          <td class="border px-4 py-2">{{ this.applicant.ref }}</td>
          <td class="border px-4 py-2">
            <img
              :src="this.applicant.image"
              alt="Applicant Image"
              class="h-10 w-10 rounded-full"
            />
          </td>
          <td class="border px-4 py-2">{{ this.applicant.task }}</td>
          <td class="border px-4 py-2">{{ this.applicant.interviewer }}</td>
        </tr>
      </tbody>
    </table> -->
  <!-- 
    <div class="mb-4"> -->
  <!-- <p><strong>ID:</strong> {{ this.applicant.id }}</p> -->
  <!-- <p><strong>Name:</strong> {{ this.applicant.name }}</p>
      <p><strong>Technology:</strong> {{ this.applicant.tech }}</p>
      <p><strong>Level:</strong> {{ this.applicant.level }}</p>
    </div> -->
  <!-- </div> -->

  <body>
    <div class="container">
      <div class="profile-header">
        <img
          src="../assets/profile-user.png"
          alt="Profile Picture"
          class="profile-picture"
        />
        <div class="profile-info">
          <h2>{{ this.applicant.name }}</h2>
          <p>Applicant</p>
          <button class="email-button" @click="sendEmail">Send Email</button>
        </div>
      </div>

      <div class="contact-information">
        <h3>Contact Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="icon">👤</span>
            <div>
              <strong>Name:</strong>
              <p>{{ this.applicant.name }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">💻</span>
            <div>
              <strong>Technology:</strong>
              <p>{{ this.applicant.tech }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">📞</span>
            <div>
              <strong>Phone:</strong>
              <p>{{ this.applicant.number }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">🔝</span>
            <div>
              <strong>Level</strong>
              <p>{{ this.applicant.level }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">💼</span>
            <div>
              <strong>Experience</strong>
              <p>{{ this.applicant.exp }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">✉️</span>
            <div>
              <strong>Email:</strong>
              <p>{{ this.applicant.email }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">📑</span>
            <div>
              <strong>Reference:</strong>
              <p>{{ this.applicant.ref }}</p>
            </div>
          </div>
          <router-link to="/resume">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
            >
              View Resume
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </body>
</template>

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
</style>

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
    sendEmail() {
      const email = this.applicant.email;
      window.open(`mailto:${email}`);
    },
  },
};
</script>

<style>
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
