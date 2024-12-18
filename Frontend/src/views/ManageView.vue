<template>
  <AddItem v-if="adding" />
  <EditItem v-if="editing" :item="editing" />

  <section class="container px-4 mx-auto mt-6">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800">Manage Item</h2>

          <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full"
            >{{ items.length }} items</span
          >
        </div>
      </div>
    </div>

    <div class="mt-6 md:flex md:items-center md:justify-between">
      <div class="relative flex items-center mt-4 md:mt-0"></div>
      <button
        v-on:click="this.adding = true"
        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>Add Item</span>
      </button>
    </div>

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <button
                      class="flex items-center gap-x-3 focus:outline-none"
                    >
                      <span>Item Name</span>

                      <svg
                        class="h-3"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        />
                        <path
                          d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        />
                        <path
                          d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.3"
                        />
                      </svg>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    Quantity
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    Description
                  </th>

                  <th scope="col" class="relative py-3.5 px-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
              >
                <tr v-for="i in this.items" :key="i">
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="flex">
                      <img :src="i.image" class="h-6 w-6 mr-4" alt="" />
                      <h2 class="font-medium text-gray-800 dark:text-white">
                        {{ i.name }}
                      </h2>
                    </div>
                  </td>
                  <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div
                      v-if="i.amount > 100"
                      class="inline px-3 py-1 text-sm font-normal rounded-full text-blue-500 gap-x-2 bg-blue-100/60 dark:bg-blue-800"
                    >
                      {{ i.amount }}
                    </div>
                    <div
                      v-if="i.amount > 50 && i.amount < 100"
                      class="min-w-12 inline px-3 py-1 text-sm font-normal rounded-full text-orange-500 gap-x-2 bg-orange-100/60 dark:bg-orange-800"
                    >
                      {{ i.amount }}
                    </div>
                    <div
                      v-if="i.amount < 50"
                      class="min-w-12 inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 dark:bg-red-800"
                    >
                      {{ i.amount }}
                    </div>
                  </td>
                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                      <p class="text-gray-500 dark:text-gray-400">
                        {{ i.description }}
                      </p>
                    </div>
                  </td>

                  <td class="px-4 py-4 text-sm whitespace-nowrap flex">
                    <div
                      v-on:click="editing = i"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      v-on:click="delItem(i._id)"
                      class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddItem from "../components/AddItem.vue";
import EditItem from "../components/EditItem.vue";
const axios = require("axios");

export default {
  data() {
    return {
      items: this.$parent.$parent.items,
      adding: false,
      editing: "",
    };
  },

  components: {
    AddItem,
    EditItem,
  },

  created() {
    this.upItem();
  },

  updated() {},

  methods: {
    upItem() {
      axios
        .get("http://localhost:3000/api/items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    delItem(id) {
      axios
        .delete("http://localhost:3000/api/item/" + id)
        .then(() => {
          this.upItem();
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
