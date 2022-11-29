<script setup>
import { ref } from "vue";
import { useCategoriesStore } from "../../store/Categories";
const store = useCategoriesStore();
const newCategory = ref({
  name: null,
});
store.getAllCategories();

const handleSubmit = () => {
  store.addNewCategory(newCategory.value);
  store.getAllCategories();
  newCategory.value.name = "";
};

const handleDelete = (id) => {
  store.deleteCategory(id)
}

</script>

<template>
  <div class="w-full h-full flex justify-center py-5">
    <div class="w-3/6 h-full px-5 flex flex-col gap-y-8">
      <h1 class="text-xl font-semibold text-center">Yeni Kategori Ekle</h1>
      <!-- İnput -->
      <div class="w-full relative">
        <!-- plus icon -->
        <div
          class="w-10 h-11 rounded-md right-0 absolute"
          @click="handleSubmit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            style="enable-background: new 0 0 330 330"
            xml:space="preserve"
            width="43px"
            class="fill-admin-gray"
          >
            <path
              id="XMLID_23_"
              d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
	C330,6.716,323.284,0,315,0z M255,180h-75v75c0,8.284-6.716,15-15,15s-15-6.716-15-15v-75H75c-8.284,0-15-6.716-15-15
	s6.716-15,15-15h75V75c0-8.284,6.716-15,15-15s15,6.716,15,15v75h75c8.284,0,15,6.716,15,15S263.284,180,255,180z"
            />
          </svg>
        </div>
        <!-- plus icon -->
        <input
          type="text"
          class="w-full py-2 px-3 text-lg rounded-md border-none bg-admin-white outline-gray-200"
          v-model="newCategory.name"
          @keydown.enter="handleSubmit"
        />
      </div>
      <!-- İnput -->

      <!-- existing categories -->
      <div
        class="w-full h-full border flex flex-col overflow-y-scroll gap-y-2 py-2"
      >
        <div
          v-for="category in store._existingCategories"
          class="w-full bg-admin-light-gray py-5 px-3 flex justify-between"
        >
          <span>{{ category.name }}</span>
          <button @click="handleDelete(category._id)" class="px-4 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 59 59"
              style="enable-background: new 0 0 59 59"
              xml:space="preserve"
              width="25px"
              class="fill-red-500"
            >
              <g>
                <path
                  d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289
		C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h46c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681
		C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553
		C20.665,4.952,20.988,3.504,21.792,2.681z"
                />
                <path
                  d="M10.456,54.021C10.493,55.743,11.565,59,15.364,59h28.272c3.799,0,4.871-3.257,4.907-4.958L50.376,10H8.624L10.456,54.021z
		 M48.291,12l-1.747,41.979C46.538,54.288,46.4,57,43.636,57H15.364c-2.734,0-2.898-2.717-2.909-3.042L10.709,12H48.291z"
                />
                <path
                  d="M17.5,54h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,54,17.5,54z"
                />
                <path
                  d="M17.5,49h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,49,17.5,49z"
                />
                <path
                  d="M17.5,44h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,44,17.5,44z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <!-- existing categories -->
    </div>
  </div>
</template>
