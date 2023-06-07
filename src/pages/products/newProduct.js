import { getAll } from "../../api/products";

const param = null;
const NewProduct = {
  async render() {
    const { data } = await getAll(param);
    return /* html */ `
        <div class="my-20">
        <div class="flex flex-row justify-between my-5">
        <a href="/listproductnew"><h2 class="text-3xl">Sản phẩm mới</h2></a>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          ${data.map((product) => `
          <div class="shadow-lg rounded-lg">
            <a href="/products/${product.id}">
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
  async afterRender() {
    const { data } = await getAll(param);
    const RenderPage = document.querySelector(".renderPage");
    const listPageSto = [];
    let ListPage = "";

    const numberPage = Math.ceil(data.length / 6);
    for (let index = 1; index <= numberPage; index++) {
      ListPage += `<li class="inline-block"><button class="PageNumber border border-black px-2 cursor-pointer hover:bg-black hover:text-white text-2xl listPage ml-2" value="${index}">${index}</button></li>`;
    }

    RenderPage.innerHTML = ListPage;

    const listPage = document.querySelectorAll(".listPage");

    listPage.forEach((item) => {
      item.addEventListener("click", (e) => {
        const pages = {
          numberPage: item.value,
        };
        listPageSto.push(pages);
        localStorage.setItem("listPage", JSON.stringify(listPageSto));
        reRender(HomePage, "#app", item.value);
      });
    });
  },

};
export default NewProduct;