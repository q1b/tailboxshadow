<template>
  <div class="w-full grid grid-cols-1 place-items-center">
    <div class="max-w-[1200px]">
      <section class="w-full p-5 grid grid-cols-1 place-items-center">
        <article class="text-4xl font-bold text-rose-600">
          Available colors
        </article>
      </section>
      <section
        class="
          w-full
          gap-5
          grid-cols-2
          sm:grid-cols-5
          grid
          place-items-center
          px-1
          xs:px-4
          sm:px-5
          py-5
        "
      >
        <Button
          v-for="(i, index) in createBtnBoxes(colors)"
          :Class="i"
          :key="index"
        >
          <template #content>
            {{ Object.keys(colors).reverse()[index] }}
          </template>
        </Button>
      </section>
      <section class="gap-5 w-full grid-cols-1 grid place-items-center px-5">
        <article class="text-white bg-blueGray-900 rounded-md pt-4 px-4 w-full">
          <code class="text-blueGray-600"
            ><span>&lt;</span>Code/<span>&gt;</span></code
          >
          <pre class="text-xs xs:text-[0.9rem] sm:text-lg">
        <code class=" ">
<span>&lt;</span><span class="text-blue-300">div</span> <span class="text-blue-600">class</span><span class="text-white">=</span><span class="text-blueGray-600">"</span><div class="flex flex-wrap text-blueGray-300">inline-flex relative rounded-md shadow</div><span class="text-blueGray-600">"</span><span class="text-white">&gt;</span> 
    <span>&lt;</span><span class="text-blue-300">button</span> <span class="text-blue-600">class</span><span class="text-white">=</span><span class="text-blueGray-600">"</span>
    <span class="text-blueGray-300">before:shadow-purple-600-purple-300
    text-purple-900 border-purple-600 
    before:content-[''] 
    before:absolute before:top-0 
    before:left-0 before:duration-700
    before:right-0 before:bottom-0 
    before:rounded-md before:opacity-80
    hover:before:opacity-100 
    before:transition-opacity 
    before:ease-in-out 
    text-base font-semibold 
    border-2 
    inline-flex items-center justify-center 
    px-5 py-3 rounded-md</span><span class="text-blueGray-600">"</span> <span class="text-white">&gt;</span> 
        Cancel
    <span>&lt;/</span><span class="text-blue-300">button</span><span class="text-white">&gt;</span> 
<span>&lt;/</span><span class="text-blue-300">div</span><span class="text-white">&gt;</span>
        </code>
      </pre>
        </article>
        <div class="inline-flex relative rounded-md shadow">
          <button
            class="
              before:shadow-purple-600-purple-300
              text-purple-900
              border-purple-600
              before:content-['']
              before:absolute
              before:top-0
              before:left-0
              before:right-0
              before:bottom-0
              before:rounded-md
              before:opacity-80
              hover:before:opacity-100
              before:transition-opacity before:duration-700 before:ease-in-out
              text-base
              font-semibold
              border-2
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              rounded-md
            "
          >
            Cancel
          </button>
        </div>
      </section>
      <section
        class="gap-5 w-full py-10 px-2 grid-cols-1 grid place-items-center"
        id="HowToInstall"
      >
        <article
          class="bg-blueGray-900 grid grid-cols-1 rounded-md place-items-center"
        >
          <pre
            class="py-2 px-4"
          ><code class="w-max text-white">npm install tailboxshadow</code></pre>
        </article>
        <article>Add it to your tailwind.config.js file Like</article>
        <article
          class="bg-blueGray-900 grid grid-cols-1 rounded-md place-items-center"
        >
          <pre
            class="py-2 px-4"
          ><code class="w-max text-white">  plugins: [require("tailboxshadow")],
</code></pre>
        </article>
      </section>
    </div>
  </div>
  <footer class="mt-auto">
    <div class="bg-[#000716] dark:bg-lime-200">
      <div
        class="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row"
      >
        <p
          class="
            text-sm text-center
            dark:text-teal-900
            text-gray-500
            sm:text-left
          "
        >
          © 2021 Sukhpreet —
          <a
            href="https://twitter.com/XSukhpreet"
            rel="noopener noreferrer"
            class="ml-1 text-gray-600"
            target="_blank"
            >@XSukhpreet</a
          >
        </p>
        <span
          class="
            inline-flex
            justify-center
            mt-2
            sm:ml-auto sm:mt-0 sm:justify-start
          "
        >
          <a class="dark:text-teal-900 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 dark:text-teal-900 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 dark:text-teal-900 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 dark:text-teal-900 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      colors: {
        rose: {
          300: "#fda4af",
          600: "#e11d48",
          900: "#881337",
        },
        red: {
          300: "#fca5a5",
          600: "#dc2626",
          900: "#7f1d1d",
        },
        purple: {
          300: "#d8b4fe",
          600: "#9333ea",
          900: "#581c87",
        },
        indigo: {
          300: "#a5b4fc",
          600: "#4f46e5",
          900: "#312e81",
        },
        blue: {
          300: "#93c5fd",
          600: "#2563eb",
          900: "#1e3a8a",
        },
        emerald: {
          300: "#6ee7b7",
          600: "#059669",
          900: "#064e3b",
        },
        lime: {
          300: "#bef264",
          600: "#65a30d",
          900: "#365314",
        },
        yellow: {
          300: "#fde047",
          600: "#ca8a04",
          900: "#713f12",
        },
        orange: {
          300: "#fdba74",
          600: "#ea580c",
          900: "#7c2d12",
        },
        blueGray: {
          300: "#cbd5e1",
          600: "#475569",
          900: "#0f172a",
        },
      },
    };
  },
  methods: {
    createBtnBoxes(colors) {
      let storage = [];
      Object.keys(colors).forEach((color) => {
        storage = [
          ` ${`before:shadow-${color}-600-${color}-300`} text-${color}-900 border-${color}-600 `,
          ...storage,
        ];
      });
      return storage;
    },
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
<style></style>
