<script setup>
const props = defineProps(["type"]);
</script>

<template>
  <!-- bestSeller -->
  <div
    class="w-28 h-8 absolute top-1 -right-3 flex justify-center items-center p-3 bg-orange-400 text-white font-bold"
    v-if="type === 'bestSeller'"
  >
    <div
      class="w-6 h-6 absolute top-5 right-[5px] bg-yellow-500 rotate-45 -z-10"
    ></div>
    <span
      class="text-ellipsis tracking-tighter leading-tight text-center text-sm font-thin"
      >Çok Satan</span
    >
  </div>
  <!-- bestSeller -->

  <!-- freeShipping -->
  <div
    class="w-16 h-16 absolute top-2 right-1 flex justify-center items-center p-3 rounded-full bg-gray-600 opacity-90 text-white font-bold"
    v-if="type === 'freeShipping'"
  >
    <span
      class="text-ellipsis tracking-tighter leading-tight text-center text-sm font-thin opacity-100"
      >Kargo Bedava</span
    >
  </div>
  <!-- freeShipping -->

  <!-- popular -->
  <div
    class="w-14 h-14 absolute top-1 right-[2px] flex flex-col justify-center items-center p-3 rounded-full bg-emerald-400 opacity-95 text-white font-bold"
    v-if="type === 'popular'"
  >
  <div class="w-full flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 280.124 280.124"
      style="enable-background: new 0 0 280.124 280.124"
      xml:space="preserve"
      width="15px"
    >
      <g>
        <path
          style="fill: #f4b459"
          d="M280.124,106.914l-92.059-6.598L140.057,4.441l-48.55,95.874L0,106.914l61.282,74.015
		l-17.519,94.754l96.294-43.614l96.294,43.606l-17.799-94.754C218.553,180.919,280.124,106.914,280.124,106.914z"
        />
        <polygon
          style="fill: #e3a753"
          points="236.352,275.683 218.553,180.92 280.071,106.975 280.071,106.905 188.065,100.315 
		140.057,4.441 140.057,232.068 	"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 280.124 280.124"
      style="enable-background: new 0 0 280.124 280.124"
      xml:space="preserve"
      width="15px"
      class="mb-2"
    >
      <g>
        <path
          style="fill: #f4b459"
          d="M280.124,106.914l-92.059-6.598L140.057,4.441l-48.55,95.874L0,106.914l61.282,74.015
		l-17.519,94.754l96.294-43.614l96.294,43.606l-17.799-94.754C218.553,180.919,280.124,106.914,280.124,106.914z"
        />
        <polygon
          style="fill: #e3a753"
          points="236.352,275.683 218.553,180.92 280.071,106.975 280.071,106.905 188.065,100.315 
		140.057,4.441 140.057,232.068 	"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 280.124 280.124"
      style="enable-background: new 0 0 280.124 280.124"
      xml:space="preserve"
      width="15px"
    >
      <g>
        <path
          style="fill: #f4b459"
          d="M280.124,106.914l-92.059-6.598L140.057,4.441l-48.55,95.874L0,106.914l61.282,74.015
		l-17.519,94.754l96.294-43.614l96.294,43.606l-17.799-94.754C218.553,180.919,280.124,106.914,280.124,106.914z"
        />
        <polygon
          style="fill: #e3a753"
          points="236.352,275.683 218.553,180.92 280.071,106.975 280.071,106.905 188.065,100.315 
		140.057,4.441 140.057,232.068 	"
        />
      </g>
    </svg>
  </div>
    
    <span
      class="text-ellipsis tracking-tighter leading-tight text-center text-xs font-thin"
      >Popüler</span
    >
  </div>
  <!-- popular -->
</template>
