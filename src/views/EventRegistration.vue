<script setup>
import { computed, ref } from "vue";
import Navbar from "../components/Navbar2.vue";
import Title from "../components/Title.vue";
import axios from "axios";

// form data and validation
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  university: "",
  major: "",
  level: "",
  isPresenting: false,
  presentationTitle: "",
  presentationDescription: "",
});
const message = ref("");
const isFormValid = computed(() => {
  return (
    formData.value.firstName &&
    formData.value.firstName.length >= 3 &&
    formData.value.lastName &&
    formData.value.lastName.length >= 3 &&
    formData.value.email &&
    formData.value.phone &&
    formData.value.phone.length >= 9 &&
    formData.value.university &&
    formData.value.major &&
    formData.value.level &&
    (!formData.value.isPresenting ||
      (formData.value.presentationTitle &&
        formData.value.presentationDescription))
  );
});

const isLoading = ref(false);

async function submit(e) {
  e.preventDefault();
  if (!isFormValid.value) {
    alert("Please fill out all the required fields correctly!");
    return;
  }

  isLoading.value = true;
  message.value = "";
  // send the form data to the server
  try {
    const response = await axios.post(
      "https://api.openmindsclub.net/register",
      formData.value
    );
    console.log(response.data);
    alert("Successfully registered!");
    // reset the form
    formData.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      university: "",
      major: "",
      level: "",
      isPresenting: false,
      presentationTitle: "",
      presentationDescription: "",
    };
  } catch (error) {
    console.error("error: ", error.response.data.errors[0].msg);
    // backend is setting the error message in the response errors array
    alert(error.response.data.errors[0].msg);
    message.value = error.response.data.errors[0].msg;
  } finally {
    isLoading.value = false;
  }

  // for now just sleep for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
}
</script>

<template>
  <Navbar />
  <main
    class="register d-flex fl-col fl-j-c fl-a-c text-white p-5 md:p-20 font-[mono]"
  >
    <!-- <h1>About Us</h1>
    <p class="font-[mono]">
      > The Open Minds club is a student scientific club at the USTHB created in
      2009. Its primary goal is to foster a spirit of sharing and collaboration
      among students and to promote the Open Source philosophy.
    </p> -->
    <div
      class="flex flex-col-reverse items-center justify-center mt-10 md:flex-row-reverse md:justify-center w-[100%] md:w-[80%] bg-[#04090f] rounded-lg shadow-lg md:shadow-xl md:items-start font-[mono]"
    >
      <p class="max-w-[700px] indent-8 text-xl">
        <a href="https://www.edenai.co/" class="text-[#3173bb]"
          ><b>Eden AI</b></a
        >, democratizes access to artificial intelligence. We believe in
        empowering developers and businesses to easily harness the power of AI,
        transforming complex AI use cases into seamless, integrated workflows.
      </p>
      <img src="../assets/images/edenai.png" alt="Eden AI" class="w-[200px]" />
    </div>
    <p class="w-[100%] md:w-[80%] max-w-[900px] pt-5 indent-8 text-xl">
      <b>Samy</b> is the co-founder of
      <a href="https://www.edenai.co/" class="text-[#3173bb]"><b>Eden AI</b></a
      >. He holds a master's degree in AI from USTHB and formerly served as the
      president of OMC. Before founding Eden AI, he co-founded DataGenius, a
      Data Science lab specializing in developing custom machine learning models
      for clients.
    </p>

    <!-- show "Registration are now open!" with typewriter effect -->
    <h1 class="text-[#f8ae28] mt-20 text-center text-xl md:text-4xl">
      Registration are now open! <span class="blinker"></span>
    </h1>
    <form
      class="w-full bg-[#04090f] md:p-[20px] mt-10 max-w-[900px] rounded-lg shadow-lg slide-down"
      @submit="submit"
    >
      <div class="flex flex-wrap -mx-3 mb-6 pt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="First Name"
            v-model="formData.firstName"
            required
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last Name"
            v-model="formData.lastName"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="example@example.com"
            v-model="formData.email"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-phone"
          >
            Phone
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-phone"
            type="tel"
            placeholder="e.g. 0555 55 55 55"
            v-model="formData.phone"
            min="9"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-university"
          >
            University
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-university"
            type="text"
            placeholder="e.g. USTHB"
            v-model="formData.university"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-major"
          >
            Major
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-major"
            type="text"
            placeholder="e.g. Computer Science"
            v-model="formData.major"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-level"
          >
            Level
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-level"
            type="text"
            placeholder="e.g. Master 2"
            v-model="formData.level"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="formData.isPresenting"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Would you like to present your project / PFE at the event?
          </label>
        </div>
      </div>
      <!-- show the rest of the inputs if the user is presenting -->
      <div
        v-if="formData.isPresenting"
        class="slide-down flex flex-wrap -mx-3 mb-6"
      >
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-presentation-title"
          >
            Project Title
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-presentation-title"
            type="text"
            placeholder="Building a Chatbot with Python and TensorFlow"
            v-model="formData.presentationTitle"
          />
        </div>
      </div>
      <div v-if="formData.isPresenting" class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-presentation-description"
          >
            Project Description
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[300px]"
            id="grid-presentation-description"
            placeholder="In this project, we built a chatbot using Python and TensorFlow..."
            v-model="formData.presentationDescription"
          ></textarea>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center gap-5">
        <button
          class="bg-[#f8ae28] hover:bg-[#f8ae28] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          :disabled="isLoading"
        >
          Register
        </button>

        <p class="text-red-500 h-5">{{ message }}</p>
      </div>
    </form>
  </main>
  <footer
    class="text-white flex flex-col justify-center aling-center text-center mt-10"
  >
    <h1 class="title">Where Open Source Minds Come Together.</h1>
    <p class="text-[#f8ae28] mt-10">
      Made with <span class="text-[red] color-[red]">&#10084;</span> by OMC
    </p>
  </footer>
</template>

<style scoped>
.blinker {
  border-color: #f8ae28;
  width: 0.5em;
}

.slide-down {
  animation: slideDown 0.5s ease;
}

form {
  box-shadow: 0 3px 6px var(--color-blue),  0 3px 6px var(--color-blue);
}

@keyframes slideDown {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
