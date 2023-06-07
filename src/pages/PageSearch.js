import Footer from "../comboudun/footer";
import Header from "../comboudun/header";
import { reRender } from "../utils/rerender";
import { getAll, Search } from "../api/products";

const PageSearch = {
    async print() {
        let dataKeyword = [];
        if (localStorage.getItem("keyword")) {
            dataKeyword = JSON.parse(localStorage.getItem("keyword"));
        }
        console.log(dataKeyword);
        const { data } = await getAll();
        console.log(dataKeyword[0].keyword);
        const dataSearch = await Search(dataKeyword[0].keyword);
        return /* html */ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
					<div class="main-right col-span-6">
                            <div class="tittle-sp bg-red-500 text-white text-xl py-3 px-5 text-center"><span class="">Các Sản Phẩm Có Từ Khóa Là ${dataKeyword[0].keyword}</span>
				</div>
				<div class="py-3 grid grid-cols-3 gap-3">
						${dataSearch.data.map((product) => {
        if (product.status == 1) {
            var status = "Còn Hàng";
        } else {
            status = "Hết Hàng";
        }
        return /* html */`
			<div class="shadow-lg rounded-lg">
			  <a href="/products/${product.id}">
				<img src="${product.img}" class="rounded-tl-lg rounded-tr-lg" />
			  </a>
			  <div class="p-5">
				<h3><a href="/products/${product.id}">${product.name}</a></h3>
				<div class="flex flex-col xl:flex-row justify-between">
				  <a id="btnAddToCart" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
					href="/products/${product.id}">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
					  stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					Add to cart
				  </a>
				  <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
					href="/products/${product.id}">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd"
						d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd" />
					</svg>
					View Details
				  </a>
				</div>
			  </div>
			</div>`;
    }).join("")}
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
    },
    async afterRender() {
        // const { data } = await Search(keyword.value);
        // console.log(data);
        let dataKeywords = [];
        if (localStorage.getItem("keyword")) {
            dataKeywords = JSON.parse(localStorage.getItem("keyword"));
        }

        const keyword = document.querySelector("#search");
        const btnSearch = document.querySelector("#btnSearch");
        let dataKeyword = "";
        const keywordSto = [];
        btnSearch.addEventListener("click", (e) => {
            dataKeyword = keyword.value;
            const keywordData = {
                keyword: dataKeyword,
            };
            keywordSto.push(keywordData);
            localStorage.setItem("keyword", JSON.stringify(keywordSto));
            reRender(PageSearch, "#app");
        });
        Header.afterRender();
    },
};

export default PageSearch;