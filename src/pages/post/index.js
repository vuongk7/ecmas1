import Header from "../../comboudun/header";
import Footer from "../../comboudun/footer";

import { getAll } from "../../api/posts";

const NewsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        ${Header.render()}
            <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Danh sách bài viết</h2>
            <div>
                <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                                    <div class="border p-4">
                                        <div class="news-img">
                                            <a href="/#/post/${post.id}">
                                                <img src="${post.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/#/post/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                        <p class="text-sm text-gray-600">${post.desc}</p>
                                    </div>
                            `).join("")}
                </div>
            </div>
            ${Footer.render()}`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default NewsPage;