<script setup>
// from vue
import { ref } from "vue";
// stores
import { useCategoriesStore } from "../../../store/Categories";
import { useProductsStore } from "../../../store/Products";


const emit = defineEmits();
const categoryStore = useCategoriesStore();
const productStore = useProductsStore();
categoryStore.getAllCategories();

const props = defineProps(["editingProduct"]);
const product = ref({
  name: props.editingProduct.name,
  price: props.editingProduct.price,
  quantity: props.editingProduct.quantity,
  product_image: props.editingProduct.product_image,
  desc: props.editingProduct.desc,
  measure: {
    width: props.editingProduct.measure.width,
    height: props.editingProduct.measure.height,
    depth: props.editingProduct.measure.depth,
  },
  category: props.editingProduct.category,
  material: props.editingProduct.material,
  badgeType: props.editingProduct.badgeType,
});

const fileSelected = (e) => {
  product.value.product_image = e.target.files[0];
};

const handleSubmit = (e) => {
  const formData = new FormData();
  if(product.value.product_image.length === 0){
    formData.append(
    "product_image",
    product.value.product_image,
    product.value.product_image.name
  );
  }
  else{
    formData.append("product_image", product.value.product_image)
  }
  formData.append("_id", props.editingProduct._id)
  formData.append("name", product.value.name);
  formData.append("price", parseInt(product.value.price));
  formData.append("quantity", parseInt(product.value.quantity));
  formData.append("desc", product.value.desc),
  formData.append("measure", JSON.stringify(product.value.measure)),
  formData.append("category", product.value.category),
  formData.append("material", product.value.material),
  formData.append("badgeType", product.value.badgeType)
  productStore.editProduct(formData)
}
</script>

<template>
  <div
    class="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
  >
    <form
      type="submit"
      @submit="handleSubmit"
      class="w-4/6 h-5/6 bg-white rounded-md flex flex-col items-center justify-start py-3 px-24"
    >
      <h1 class="text-xl">Ürün Düzenleme Formu</h1>
      <label for="title" class="flex flex-col w-full items-start gap-y-1 mt-4">
        <span class="text-lg">Ürün başlığı</span>
        <!-- product name -->
        <input
          v-model="product.name"
          type="text"
          class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
          name="title"
          placeholder="Ürün Başlığı"
        />
      </label>
      <!-- product name -->

      <!-- product material & measures -->
      <div class="w-full flex justify-between mt-4">
        <label for="material" class="w-5/12 flex flex-col gap-y-1">
          <span class="text-sm font-thin">Ürün Malzemesi</span>
          <input
            v-model="product.material"
            type="text"
            class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
            placeholder="Ürün Hammadesi"
          />
        </label>
        <div class="w-5/12 flex justify-center gap-x-2">
          <label for="width" class="w-2/6 flex flex-col gap-y-1">
            <span class="text-sm font-thin">En</span>
            <input
              v-model="product.measure.width"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
              placeholder="En(cm)"
            />
          </label>

          <label for="width" class="w-2/6 flex flex-col gap-y-1">
            <span class="text-sm font-thin">Boy</span>
            <input
              v-model="product.measure.height"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
              placeholder="Boy(cm)"
            />
          </label>

          <label for="width" class="w-2/6 flex flex-col gap-y-1">
            <span class="text-sm font-thin overflow-hidden">Derinlik</span>
            <input
              v-model="product.measure.depth"
              type="text"
              class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md placeholder:text-xs"
              placeholder="Derinlik(cm)"
            />
          </label>
        </div>
      </div>
      <!-- product material & measures -->

      <!-- product category & product badge -->
      <div class="w-full flex justify-between mt-4">
        <label for="category" class="w-5/12 flex flex-col gap-y-1">
          <span class="font-thin text-sm">Kategori</span>
          <select
            v-model="product.category"
            @change="handleChange"
            name="category"
            id=""
            class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
          >
            <option value="" selected disabled hidden>Kategori</option>
            <option
              v-for="category in categoryStore._existingCategories"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>
        </label>
        <label for="badge" class="w-5/12 flex flex-col gap-y-1">
          <span class="font-thin text-sm">Ürün Etiketi</span>
          <select
            v-model="product.badgeType"
            name="badge"
            id=""
            class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
          >
            <option value="">Etiketsiz</option>
            <option value="bestSeller">Çok Satan</option>
            <option value="freeShipping">Bedava Kargo</option>
            <option value="popular">Popüler</option>
          </select>
        </label>
      </div>
      <!-- product category & badge -->

      <!-- product price & quantity -->
      <div class="w-full flex justify-between mt-4">
        <label for="" class="w-5/12 flex flex-col gap-y-1">
          <span class="text-sm font-thin">Ürün Fiyatı</span>
          <input
            v-model="product.price"
            type="text"
            class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
            pattern="[0-9]+"
            placeholder="Ürün Fiyatı"
          />
        </label>
        <label for="" class="w-5/12 flex flex-col gap-y-1">
          <span class="text-sm font-thin">Stok Adedi</span>
          <input
            v-model="product.quantity"
            type="text"
            class="w-full py-1 px-3 bg-gray-50 border border-gray-400 rounded-md"
            pattern="[0-9]+"
            placeholder="Stok Adedi"
          />
        </label>
      </div>

      <!-- Product Description -->
      <label for="" class="w-full flex flex-col gap-y-1 mt-4">
        <span class="text-sm font-thin"> Ürün Açıklaması </span>
        <textarea
          v-model="product.desc"
          type="text"
          class="w-full resize-none h-20 p-2 text-sm font-thin bg-gray-50 border border-gray-400 rounded-md"
          placeholder="Ürün Açıklaması"
        />
      </label>
      <!-- Product Description -->

      <span class="text-lg mt-4">Ürün Resmi</span>
      <input
        v-on:change="fileSelected"
        type="file"
        class="w-full py-3 px-3 bg-gray-50 border border-gray-400 rounded-md"
      />

      <div class="w-full flex justify-end mt-4">
        <button
          type="submit"
          class="bg-white border rounded-md border-red-300 px-9 py-2"
        >
          Kaydet
        </button>
      </div>
    </form>
  </div>
</template>
