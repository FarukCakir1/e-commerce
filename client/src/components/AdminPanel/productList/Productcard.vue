<script setup>

const props = defineProps(["product"])

</script>


<template>
  <div
        
        class="w-full h-28 mt-5 bg-admin-white border border-emerald-700 text-admin-white rounded-md flex hover:border-blue-700 duration-500 hover:bg-white"
      >
        <div class="w-28 flex-shrink-0 p-3 border-r border-r-gray-600 h-full">
          <img
            :src="product.product_image"
            alt=""
            class="w-full h-full rounded-md"
          />
        </div>
        <div
          class="w-full h-full flex flex-col justify-center items-start pl-5"
        >
          <span class="text-sm text-black"
            >Ürün Kodu: {{ product._id }}</span
          >
          <span class="text-sm text-black"
            >Ürün Adı: {{ product.name }}</span
          >
          <span class="text-sm text-black"
            >Stok Adedi: {{ product.quantity }}</span
          >
          <span class="text-sm text-black"
            >Fiyat: {{ product.price }}$</span
          >
          <span class="text-sm text-black"
            >Ölçüler: {{ product.measure.width }}x{{product.measure.height}}x{{product.measure.depth}}</span
          >
          
        </div>
        <div class="w-28 flex flex-col justify-center items-center">
          <button @click="$emit('openEdit', product)" class="w-full flex justify-center items-center h-14 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488.728 488.728"
              style="enable-background: new 0 0 488.728 488.728"
              xml:space="preserve"
              width="25px"
              class="group-hover:fill-blue-700 duration-300"
            >
              <g>
                <path
                  d="M487.147,462.52l-36.4-167.6c0-4.2-2.1-7.3-5.2-10.4l-261.3-261.3c-20-22.9-74.3-38.1-112.4,0l-47.9,47.9
		c-31,31-31,81.4,0,112.4l261.3,261.3c2.1,2.1,5.2,4.2,9.4,5.2l168.6,38.5C473.347,490.02,492.347,483.62,487.147,462.52z
		 M53.047,154.42c-15.6-15.6-15.6-39.6,0-55.2l47.9-47.9c15.2-15.2,40-15.2,55.2,0l238.4,238.4h-27.1c-11.4,0-20.8,9.4-20.8,20.8
		v34.3h-34.3c-11.4,0-20.8,9.4-20.8,20.8v26.1L53.047,154.42z M333.047,415.72v-29.2h34.3c18,1.7,20.8-16.5,20.8-20.8v-34.4h29.2
		l24,109.3L333.047,415.72z"
                />
              </g>
            </svg>
          </button>
          <button @click="$emit('deleteEvent', product._id)"  class="w-full flex justify-center items-center h-14 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 59 59"
              style="enable-background: new 0 0 59 59"
              xml:space="preserve"
              width="25px"
              class="group-hover:fill-red-600 duration-300"
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
</template>
