import toastr from "toastr";
import Header from "../../comboudun/header";
import Comments from "../../comboudun/comments";
import Footer from "../../comboudun/footer";
import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";
import "toastr/build/toastr.min.css";

const DetailProductPage = {
  async render(id) {
    const { data } = await get(id);
    return `
        ${Header.render()}
        <div class="bg-white">
        <main class="my-8">
          <div class="container mx-auto px-6">
            <div class="md:flex md:items-center">
              <div class="w-full h-64 md:w-1/2 lg:h-96">
                <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                  src="${data.img}" 
                  alt="">
              </div>
              <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 class="text-gray-700 uppercase text-lg">${data.name}</h3>
                <span class="text-gray-500 mt-3 ">${data.price} VND</span>
                <hr class="my-3">
                <div class="mt-2">
                  <label class="text-gray-700 text-sm" for="count">Count:</label>
                  <div class="flex items-center mt-1">
                  <input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" />
                  </div>
                </div>
                <div class="mt-3">
                  <label class="text-gray-700 text-sm" for="count">Thông tin sản phẩm:</label>
                  <div class="flex items-center mt-1">
                  <p>${data.detail}</p>
                  </div>
                </div>
                <div class="flex items-center mt-6">
                  <button id="btnAddToCart"
                    class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order
                    Now</button>
                </div>
              </div>
            </div>
            <div>
            ${Comments.render()}
            </div>
            <div class="mt-16">
              <h3 class="text-gray-600 text-2xl font-medium">Sản phẩm liên quan</h3>
              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover"
                    style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')">
                    <button
                      class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Chanel</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover"
                    style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')">
                    <button
                      class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Man Mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover"
                    style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')">
                    <button
                      class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Classic watch</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover"
                    style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')">
                    <button
                      class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">woman mix</h3>
                    <span class="text-gray-500 mt-2">$12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>       
      </div>
      
      ${Footer.render()}
`;
  },
  afterRender(id) {
    $("#btnAddToCart").addEventListener("click", async () => {
      const { data } = await get(id);
      addToCart({ ...data, quantity: +$("#inputQty").value }, () => {
        toastr.success("Thêm thành công!");
      });
    });
  },
};
export default DetailProductPage;