<script setup>
import { ref, inject } from "vue";
import { useCategoriesStore } from "../../store/Categories";
const categoryStore = useCategoriesStore()
categoryStore.getAllCategories()
const appAxios = inject("appAxios");

const newProduct = ref({
  name: null,
  price: null,
  quantity: null,
  product_image: null,
  desc: null,
  measure: {
    width: null,
    height: null,
    depth: null,
  },
  category: null,
  material: null,
  badgeType: null
});

const handleSubmit = (e) => {
  const formData = new FormData();
  formData.append(
    "product_image",
    newProduct.value.product_image,
    newProduct.value.product_image.name
  );
  formData.append("name", newProduct.value.name);
  formData.append("price", parseInt(newProduct.value.price));
  formData.append("quantity", parseInt(newProduct.value.quantity));
  formData.append("desc", newProduct.value.desc),
  formData.append("measure", JSON.stringify(newProduct.value.measure)),
  formData.append("category", newProduct.value.category),
  formData.append("material", newProduct.value.material),
  formData.append("badgeType", newProduct.value.badgeType)
  

  appAxios.post("/product", formData).then((res) => {
    console.log(newProduct.value);
    newProduct.value = {
      name: null,
      price: null,
      quantity: null,
      product_image: null,
      desc: null,
      measure: {
        width: null,
        height: null,
        depth: null
      },
      category: null,
      material: null,
      badgeType: null
    };
  });
};

const fileSelected = (e) => {
  newProduct.value.product_image = e.target.files[0];
};


</script>

<template>
  <div class="w-full h-full flex justify-center items-center py-5">
    <form
      type="submit"
      @submit="handleSubmit"
      class="w-5/12 h-full bg-white border pt-8 flex flex-col justify-start shadow-lg items-start gap-y-3 px-5"
    >
      <h1 class="text-center text-xl">Yeni Ürün Formu</h1>
      <!-- product title -->
      <label for="title" class="flex flex-col w-full items-start gap-y-5">
        <span class="text-lg">Ürün başlığı</span>
        <input
          v-model="newProduct.name"
          type="text"
          class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
          name="title"
          placeholder="Ürün Başlığı"
        />
      </label>
      <!-- product title -->


      <div class="flex flex-col gap-y-2 w-full">
        <!-- product details -->
        <span class="text-lg">Ürün Detayları</span>
        <div class="w-full flex gap-x-1 justify-between">
          <label for="material" class="w-5/12 flex flex-col gap-y-1">
            <span class="text-sm font-thin">Ürün Malzemesi</span>
            <input
              v-model="newProduct.material"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
              placeholder="Ürün Hammadesi"
            />
          </label>

          <div class="w-3/6 flex justify-center gap-x-2">
            <label for="width" class="w-2/6 flex flex-col gap-y-1">
              <span class="text-sm font-thin">En</span>
              <input
                v-model="newProduct.measure.width"
                type="text"
                class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
                placeholder="En(cm)"
              />
            </label>

            <label for="width" class="w-2/6 flex flex-col gap-y-1">
              <span class="text-sm font-thin">Boy</span>
              <input
                v-model="newProduct.measure.height"
                type="text"
                class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
                placeholder="Boy(cm)"
              />
            </label>

            <label for="width" class="w-2/6 flex flex-col gap-y-1">
              <span class="text-sm font-thin overflow-hidden">Derinlik</span>
              <input
                v-model="newProduct.measure.depth"
                type="text"
                class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
                placeholder="Derinlik(cm)"
              />
            </label>
          </div>
        </div>
        <!-- product details -->

        <!-- product category and badge -->
        <div class="w-full flex justify-between">
          <label for="category" class="w-5/12 flex flex-col gap-y-1">
          <span class="font-thin text-sm">Kategori</span>
          <select v-model="newProduct.category" @change="handleChange" name="category" id="" class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md">
            <option value="" selected disabled hidden>Kategori</option>
            <option v-for="category in categoryStore._existingCategories" :value="category._id">{{category.name}}</option>
          </select>
          
        </label>
        <label for="badge" class="w-6/12 flex flex-col gap-y-1">
           <span class="font-thin text-sm">Ürün Etiketi</span>
           <select v-model="newProduct.badgeType" name="badge" id="" class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md">
            <option value="">Etiketsiz</option>
            <option value="bestSeller">Çok Satan</option>
            <option value="freeShipping">Bedava Kargo</option>
            <option value="popular">Popüler</option>
           </select>
        </label>
        </div>
        
        <!-- product category and badge -->

        <!-- product quantity and price -->
        <div class="w-full flex justify-between">
          <label for="" class="w-5/12 flex flex-col gap-y-1">
            <span class="text-sm font-thin">Ürün Fiyatı</span>
            <input
              v-model="newProduct.price"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
              pattern="[0-9]+"
              placeholder="Ürün Fiyatı"
            />
          </label>
          <label for="" class="w-6/12 flex flex-col gap-y-1">
            <span class="text-sm font-thin">Stok Adedi</span>
            <input
              v-model="newProduct.quantity"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
              pattern="[0-9]+"
              placeholder="Stok Adedi"
            />
          </label>
        </div>
        <!-- product quantity and price -->

        <!-- product description -->
        <label for="" class="w-full flex flex-col gap-y-1">
          <span class="text-sm font-thin">
            Ürün Açıklaması
          </span>
          <textarea
          v-model="newProduct.desc"
          type="text"
          class="w-full resize-none h-20 p-2 text-sm font-thin bg-gray-50 border border-gray-400 rounded-md"
          placeholder="Ürün Açıklaması"
        />
        </label>
        <!-- product description -->
      </div>
      <span class="text-lg ">Ürün Resmi</span>
      <input
        v-on:change="fileSelected"
        type="file"
        class="w-full py-3 px-3 bg-gray-50 border border-gray-400 rounded-md"
      />

      <div class="w-full flex justify-end">
        <button
        type="submit"
        class="bg-white border rounded-md border-red-300 px-9 py-2"
      >
        Ekle
      </button>
      </div>
      
    </form>
  </div>
</template>
