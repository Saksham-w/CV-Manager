<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-3xl font-bold">Hello! Welcome {{ user_name }}</h1>
  </div>
</template>

<script>
// export default {
//   name: "Home",
//   props: ["name"], // Declare 'name' prop
//   // Other component options...
// };

export default {
  name: "Home",
  data() {
    return {
      user_name: "",
    };
  },
  mounted() {
    this.getUserName();
  },
  methods: {
    getUserName() {
      this.user_name = (localStorage.getItem("name"));
      // console.log(localStorage.getItem("name"))
    },
  },
  //   computed: {
  //     email() {
  //       return this.$route.query.email;
  //     },
  //   },
};
</script>
