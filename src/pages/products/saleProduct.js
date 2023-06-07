import { getAll } from "../../api/products";

const Saleproducts = {
  async render() {
    const { data } = await getAll();
    return /* html */ `
        <div class="my-20">
        <div class="flex flex-row justify-between my-5">
        <a href="/listproductsale"><h2 class="text-3xl">Sản phẩm giảm giá</h2></a>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          ${data.map((product) => `
          <div class="shadow-lg rounded-lg">
            <a href="/news/${product.id}">
              <img src="${product.img}" class="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div class="p-5">
              <h3><a href="/products/${product.id}">${product.name}</a></h3>
              <div class="flex flex-col xl:flex-row justify-between">
              <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="/products/${product.id}">
              Xem sản phẩm
            </a>
                <a class=""
                  href="/products/${product.id}">
                  <p class="text-sm line-through text-rose-600">${product.price} VND</p>  
                  <p class="text-sm text-sky-700">${product.price} VND</p> 
                </a>
              </div>
            </div>
          </div>
  
          `).join("")}
            </div>
        `;
  },
};
export default Saleproducts;