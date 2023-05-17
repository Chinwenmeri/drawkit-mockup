<template>
  <div>
    <div id="main_content" class="flex flex-col lg:flex-row relative bottom-14">
      <div id="image_section" class="bg-main-back-200">
        <!-- the images part of the signup goes in here -->
        <img src="../assets/logo.svg" alt=" drwakit logo" class="p-3 m-3" />
        <img
          src="../assets/DrawKit-Fashion-Illustration-04.png"
          alt="sign in picture"
          class="h-128 w-128 object-fill"
        />
      </div>
      <div id="formSection" class="flex flex-col p-20 ms-10">
        <!-- the form sits here.  -->
        <p class="p-10 font-myfont text-4xl">Welcome Back !</p>
        <div class="p-1 border rounded-full m-1 flex flex-col">
          <img
            src="../assets/google.png"
            alt=""
            class="w-5 h-5 ml-14 md:ml-3 xs:mr-10 mr-7 relative top-4 pointer-events-none"
          />
          <a href="#" class="">
            <span class="font-bold text-lg md:ml-4 xs:ml-14 relative bottom-2"
              >Sign in with Google</span
            >
          </a>
        </div>
        <span class="p-4 m-4">or</span>
        <form action="" class="flex flex-col w-full">
          <div
            class="relative flex items-center text-gray-400 focus-within:text-gray-600"
          >
            <img
              src="../assets/email.svg"
              alt="image logo"
              class="w-6 h-5 absolute ml-5 mr-4 pointer-events-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="block rounded-full pr-3 pl-8 py-2 m-3 h-14 w-full placeholder-gray-500 border-none ring-2 ring-gray-300 focus-within:ring-gray-400 focus:ring-1"
            />
          </div>

          <div
            class="relative flex items-center text-gray-400 focus-within:text-gray-600 m-3"
          >
            <img
              src="../assets/password.svg"
              alt="password logo"
              class="w-6 h-5 absolute top-10 ml-3 mr-6 pointer-events-none"
            />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            class="block rounded-full pr-3 pl-8 py-2 m-3 h-14 w-full placeholder-gray-500 border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-1"
          />
        </form>
        <p>
          Forgot password? <a href="#" class="text-black">Reset Password</a>
        </p>
        <div></div>
        <a
          href="#"
          class="bg-pink-500 m-auto p-3 text-white rounded-full w-24 shadow-2xl"
          >Sign in</a
        >
        <p>
          Don't have any account? <a href="#" class="text-black">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// import { SearchIcon } from "heroicons/vue/outline";

export default {
  name: "SignUp",
  // components
  components: {
    // SearchIcon,
  },
};
</script>
<style></style>
