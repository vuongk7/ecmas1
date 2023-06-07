import Header from "../../comboudun/header";
import Footer from "../../comboudun/footer";
import Comments from "../../comboudun/comments";
import { get } from "../../api/posts";

const DetailNewsPage = {
  async render(id) {
    const { data } = await get(id);
    return `
        ${Header.render()}
        <div class="max-w-screen-lg mx-auto place-content-center">
        <main class="mt-10">
    
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
                ${data.title}
              </h2>
              <a href="#" class="py-2 text-green-700 inline-flex items-center justify-center mb-2">
              </a>
            </div>
    
            <img src="${data.img}" class="max-w-screen-2xl object-cover lg:rounded" style="height: 28em;" />
          </div>
    
          <div class="flex flex-col lg:flex-row lg:space-x-12">
    
            <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p class="pb-6">${data.desc}</p>
            </div>
    
          </div>
        </main>
      </div>
      <div>
            ${Comments.render()}
            </div>
      ${Footer.render()}`;
  },
};
export default DetailNewsPage;