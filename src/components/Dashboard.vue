<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <!-- Search Input -->
    <input class=" text-2xl text-center border-solid border-2 border-zinc-500 rounded-xl bg-slate-300" type="text" v-model="searchQuery" @input="search" placeholder="Search by name">

    <!-- Table -->
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-2">
      <!-- Table Header -->
      <thead>
        <!-- Header Row -->
        <tr class="bg-gray-800 text-white">
          <th class="py-3 px-4">SN</th>
          <th class="py-3 px-4 cursor-pointer" @click="sort('name')">
            Name
            <span v-if="sortField === 'name'">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
          <th class="py-3 px-4 cursor-pointer" @click="sort('level')">
            Level
            <span v-if="sortField === 'level'">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
          <th class="py-3 px-4 cursor-pointer" @click="sort('number')">
            Phone Number
            <span v-if="sortField === 'number'">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
          <th class="py-3 px-4 cursor-pointer" @click="sort('email')">
            Email
            <span v-if="sortField === 'email'">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
          <th class="py-3 px-4">Actions</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <!-- Rows with data -->
        <tr
          v-for="(item, index) in filteredItems"
          :key="item.id"
          class="bg-white hover:bg-gray-100 border-b border-gray-200"
        >
          <!-- SN Column -->
          <td class="py-3 px-4 text-center">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
          
          <!-- Name Column -->
          <td class="py-3 px-4">{{ item.name }}</td>
          
          <!-- Level Column -->
          <td class="py-3 px-4">{{ item.level }}</td>
          
          <!-- Phone Number Column -->
          <td class="py-3 px-4">{{ item.number }}</td>
          
          <!-- Email Column -->
          <td class="py-3 px-4">{{ item.email }}</td>
          
          <!-- Actions Column -->
          <td class="py-3 px-4 flex items-center justify-around">
            <!-- View Button -->
            <router-link :to="'/individual/' + item.id">
              <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                View
              </button>
            </router-link>
            
            <!-- Update Button -->
            <router-link :to="'/update/' + item.id">
              <button class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mr-2">
                Update
              </button>
            </router-link>
            
            <!-- Delete Button -->
            <button @click="deleteItem(item.id)" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Buttons -->
    <div class="flex justify-center mt-6">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-300 text-gray-800 py-2 px-4 rounded-l-lg mr-2">
        Previous
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-300 text-gray-800 py-2 px-4 rounded-r-lg">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      name: "",
      details: [],
      currentPage: 1,
      itemsPerPage: 20,
      sortField: "",
      sortOrder: "asc",
      searchQuery: "",
      filteredItems: [] // Array to hold filtered items based on search
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://swcstgbe.cellapp.co/api/cvlists");
        this.details = response.data[1].vdata;
        this.filteredItems = this.details; // Initialize filteredItems with all items
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    },
    async deleteItem(id) {
      try {
        await axios.post(`https://swcstgbe.cellapp.co/api/delete/cv/${id}`);
        this.details = this.details.filter((item) => item.id !== id);
        this.filteredItems = this.details; // Update filteredItems after deletion
      } catch (error) {
        console.error("There was an error deleting the item:", error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    sort(field) {
      if (this.sortField === field) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortField = field;
        this.sortOrder = "asc";
      }
    },
    search() {
      // Filter items based on search query
      this.filteredItems = this.details.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.currentPage = 1; // Reset current page when searching
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
