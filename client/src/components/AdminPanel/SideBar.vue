<script setup>
import { ref, inject } from "vue";
import { useAdminStore } from "../../store/Admin";

const router = inject("router");
const store = useAdminStore();
const open = ref(false);
</script>

<template>
  <div
    class="w-60 h-full flex-shrink-0 flex flex-col bg-admin-gray border-r border-r-white duration-500 py-4 px-4 gap-y-8"
    :class="{ 'w-20': !open }"
  >
    <!-- Open/Close Button -->
    <div
      @click="open = !open"
      class="w-10 h-10 flex items-center duration-500 justify-center bg-admin-dark rounded-full absolute top-2/4 left-14"
      :class="{ 'left-[215px] rotate-180': open }"
    >
      <svg
        width="28px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
          fill="white"
        />
      </svg>
    </div>
    <!-- Open/Close Button -->

    <!-- Current Admin -->
    <div
      class="w-full h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
    >
      <svg
        class="flex-shrink-0"
        width="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Curved/Profile">
          <g id="Profile">
            <path
              id="Stroke 1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <span v-if="open">{{ store._currentAdmin.admin_name }}</span>
    </div>
    <!-- Current Admin -->

    <!-- Product List -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
      @click="router.push({ name: 'admin-products' })"
    >
      <svg
        class="flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 487.7 487.7"
        style="enable-background: new 0 0 487.7 487.7"
        xml:space="preserve"
        width="30px"
      >
        <g>
          <g>
            <path
              d="M80.2,62.7c-4.8-4.8-12.5-4.8-17.3-0.1C58,67.4,58,75.1,62.8,79.9L92,109.3c2.3,2.3,5.4,3.6,8.7,3.6l0,0
			c3.2,0,6.3-1.3,8.6-3.6l88.9-88.4c4.8-4.8,4.8-12.5,0.1-17.3c-4.8-4.8-12.5-4.8-17.3,0l-26.9,26.7C139.8,15.5,119.9,7,99,7
			C56.7,7,22.3,41.4,22.3,83.7s34.4,76.7,76.7,76.7c34.1,0,63.6-21.9,73.5-54.5c2-6.5-1.7-13.3-8.2-15.3c-6.5-1.9-13.3,1.7-15.3,8.2
			c-6.6,21.8-27.2,37.1-50,37.1c-28.8,0-52.2-23.4-52.2-52.2S70.2,31.5,99,31.5c14.3,0,27.9,6,37.7,16.2l-35.9,35.7L80.2,62.7z"
            />
            <path
              d="M99,170.6c-42.3,0-76.7,34.4-76.7,76.7S56.7,324,99,324s76.7-34.4,76.7-76.7S141.3,170.6,99,170.6z M99,299.5
			c-28.8,0-52.2-23.4-52.2-52.2s23.4-52.2,52.2-52.2s52.2,23.4,52.2,52.2S127.8,299.5,99,299.5z"
            />
            <path
              d="M175.7,411c0-42.3-34.4-76.7-76.7-76.7S22.3,368.7,22.3,411s34.4,76.7,76.7,76.7S175.7,453.3,175.7,411z M99,463.3
			c-28.8,0-52.2-23.4-52.2-52.2s23.4-52.2,52.2-52.2s52.2,23.4,52.2,52.2S127.8,463.3,99,463.3z"
            />
            <path
              d="M453.1,235H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3S459.9,235,453.1,235z"
            />
            <path
              d="M453.1,71.5H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3S459.9,71.5,453.1,71.5z"
            />
            <path
              d="M453.1,398.8H214.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h238.3c6.8,0,12.3-5.5,12.3-12.3
			C465.4,404.2,459.9,398.8,453.1,398.8z"
            />
          </g>
        </g>
      </svg>
      <span v-if="open">Ürün Listesi</span>
    </div>
    <!-- Product List -->

    <!-- Order List -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
      @click="router.push({name: 'orderList'})"
    >
      <svg
        class="flex-shrink-0"
        width="30px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title />
        <g
          fill="none"
          fill-rule="evenodd"
          id="页面-1"
          stroke="none"
          stroke-width="1"
        >
          <g id="导航图标" transform="translate(-325.000000, -80.000000)">
            <g id="编组" transform="translate(325.000000, 80.000000)">
              <polygon
                fill="#FFFFFF"
                fill-opacity="0.01"
                fill-rule="nonzero"
                id="路径"
                points="24 0 0 0 0 24 24 24"
              />
              <polygon
                id="路径"
                points="22 7 12 2 2 7 2 17 12 22 22 17"
                stroke="#212121"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <line
                id="路径"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                x1="2"
                x2="12"
                y1="7"
                y2="12"
              />
              <line
                id="路径"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                x1="12"
                x2="12"
                y1="22"
                y2="12"
              />
              <line
                id="路径"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                x1="22"
                x2="12"
                y1="7"
                y2="12"
              />
              <line
                id="路径"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                x1="17"
                x2="7"
                y1="4.5"
                y2="9.5"
              />
            </g>
          </g>
        </g>
      </svg>
      <span v-if="open">Siparişler</span>
    </div>
    <!-- Order List -->

    <!-- Customer List -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
      @click="router.push({name: 'customerList'})"
    >
      <svg
        class="flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30px"
        viewBox="0 0 38.379 38.379"
        style="enable-background: new 0 0 38.379 38.379"
        xml:space="preserve"
      >
        <g>
          <path
            d="M32.787,34.149c-0.613,0.842-1.591,1.34-2.632,1.34h-3.341V23.717H22.23l1.712-3.357h-2.668v-1.94
		c0,0,5.254-1.715,3.998-11.08c0,0-5.368,1.371-8.338-1.715c0,0-1.143,2.17-3.541,1.371c0,0-1.257,8.682,3.541,11.424v1.826
		L14.4,20.288l1.749,3.434h-4.584v11.771H8.225c-1.041,0-2.02-0.496-2.632-1.34c-0.612-0.841-0.786-1.924-0.467-2.914l3.061-9.49
		c0.29-0.897,0.944-1.603,1.769-1.973C9.363,16.87,7.148,4.019,13.623,1.288c0,0,5.026-3.312,12.22,0.687
		c0,0,5.65,3.112,2.43,17.737c0.896,0.349,1.613,1.082,1.922,2.035l3.06,9.49C33.572,32.226,33.399,33.309,32.787,34.149z
		 M10.094,38.379h18.189v-2.168H10.094V38.379z"
          />
        </g>
      </svg>
      <span v-if="open">Müşteriler</span>
    </div>
    <!-- Customer List -->

    <!-- Admin List -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
      @click="router.push({name: 'adminList'})"
    >
      <svg
        width="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"
          />
        </g>
      </svg>
      <span v-if="open">Adminler</span>
    </div>
    <!-- Admin List -->

    <!-- Add New Product -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5 mt-16"
      :class="{ 'gap-x-7': open }"
      @click="router.push({name: 'addNewItem'})"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 502.664 502.664"
        style="enable-background: new 0 0 502.664 502.664"
        xml:space="preserve"
        class="flex-shrink-0"
        width="30px"
      >
        <g>
          <path
            style="fill: #010002"
            d="M382.881,198.732V56.666c0-22.822-18.68-41.502-41.524-41.502H41.524
				C18.68,15.164,0,33.845,0,56.666V356.5c0,22.822,18.68,41.502,41.524,41.502h181.173c21.981,52.568,73.837,89.497,134.364,89.497
				c80.416,0,145.603-65.187,145.603-145.603C502.664,270.303,450.959,210.919,382.881,198.732z M213.076,362.432H31.429V101.232
				h320.024v95.343c-77.784,2.977-139.973,66.783-139.973,145.322C211.458,348.886,212.127,355.724,213.076,362.432z
				 M437.477,370.306h-53.884v53.884h-53.043v-53.884h-53.884v-53.043h53.884v-53.884h53.043v53.884h53.884V370.306z"
          />
        </g>
      </svg>
      <span v-if="open">Yeni Ürün Ekle</span>
    </div>
    <!-- Add New Product -->

    <!-- Add new Category -->
    <div
      class="w-full cursor-pointer h-10 flex justify-center items-center gap-x-3 overflow-hidden bg-admin-white rounded-md duration-500 px-5"
      :class="{ 'gap-x-7': open }"
      @click="router.push({name: 'addNewCategory'})"
    >
      <svg
        class=" flex-shrink-0"
        width="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6.47762C2 5.1008 2 4.4124 2.22168 3.86821C2.52645 3.12007 3.12007 2.52645 3.86821 2.22168C4.4124 2 5.1008 2 6.47762 2V2C7.85443 2 8.54284 2 9.08702 2.22168C9.83517 2.52645 10.4288 3.12007 10.7336 3.86821C10.9552 4.4124 10.9552 5.1008 10.9552 6.47762V6.47762C10.9552 7.85443 10.9552 8.54284 10.7336 9.08702C10.4288 9.83517 9.83517 10.4288 9.08702 10.7336C8.54284 10.9552 7.85443 10.9552 6.47762 10.9552V10.9552C5.1008 10.9552 4.4124 10.9552 3.86821 10.7336C3.12007 10.4288 2.52645 9.83517 2.22168 9.08702C2 8.54284 2 7.85443 2 6.47762V6.47762Z"
          fill="black"
        />
        <path
          d="M2 17.5224C2 16.1456 2 15.4572 2.22168 14.913C2.52645 14.1649 3.12007 13.5712 3.86821 13.2665C4.4124 13.0448 5.1008 13.0448 6.47762 13.0448V13.0448C7.85443 13.0448 8.54284 13.0448 9.08702 13.2665C9.83517 13.5712 10.4288 14.1649 10.7336 14.913C10.9552 15.4572 10.9552 16.1456 10.9552 17.5224V17.5224C10.9552 18.8992 10.9552 19.5876 10.7336 20.1318C10.4288 20.88 9.83517 21.4736 9.08702 21.7783C8.54284 22 7.85443 22 6.47762 22V22C5.1008 22 4.4124 22 3.86821 21.7783C3.12007 21.4736 2.52645 20.88 2.22168 20.1318C2 19.5876 2 18.8992 2 17.5224V17.5224Z"
          fill="black"
        />
        <path
          d="M13.0449 17.5224C13.0449 16.1456 13.0449 15.4572 13.2666 14.913C13.5714 14.1649 14.165 13.5712 14.9131 13.2665C15.4573 13.0448 16.1457 13.0448 17.5225 13.0448V13.0448C18.8994 13.0448 19.5878 13.0448 20.1319 13.2665C20.8801 13.5712 21.4737 14.1649 21.7785 14.913C22.0002 15.4572 22.0002 16.1456 22.0002 17.5224V17.5224C22.0002 18.8992 22.0002 19.5876 21.7785 20.1318C21.4737 20.88 20.8801 21.4736 20.1319 21.7783C19.5878 22 18.8994 22 17.5225 22V22C16.1457 22 15.4573 22 14.9131 21.7783C14.165 21.4736 13.5714 20.88 13.2666 20.1318C13.0449 19.5876 13.0449 18.8992 13.0449 17.5224V17.5224Z"
          fill="black"
        />
        <path
          clip-rule="evenodd"
          d="M16.7725 9.47766C16.7725 9.89187 17.1082 10.2277 17.5225 10.2277C17.9367 10.2277 18.2725 9.89187 18.2725 9.47766V7.22766H20.5225C20.9367 7.22766 21.2725 6.89187 21.2725 6.47766C21.2725 6.06345 20.9367 5.72766 20.5225 5.72766H18.2725V3.47766C18.2725 3.06345 17.9367 2.72766 17.5225 2.72766C17.1082 2.72766 16.7725 3.06345 16.7725 3.47766L16.7725 5.72766H14.5225C14.1082 5.72766 13.7725 6.06345 13.7725 6.47766C13.7725 6.89187 14.1082 7.22766 14.5225 7.22766H16.7725L16.7725 9.47766Z"
          fill="black"
          fill-rule="evenodd"
        />
      </svg>
      <span v-if="open" class="text-sm">Yeni Kategori Ekle</span>
    </div>
    <!-- Add new Category -->
  </div>
</template>
