import { getAll } from "../../api/posts";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Bài viết</h2>
            <div>
                <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                                    <div class="border p-4">
                                        <div class="news-img">
                                            <a href="/post/${post.id}">
                                                <img src="${post.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/post/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                        <p class="text-sm text-gray-600">${post.desc}</p>
                                    </div>
                            `).join("")}
                </div>
            </div>
            `;
    },
};
export default News;