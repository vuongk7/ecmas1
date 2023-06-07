import { add, get } from "../../api/users";

const editUser = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`<div class="max-w-5xl mx-auto">
    <form action="#" method="POST">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
        <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >
        Edit User
        </h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <a href="/admin/user" class="sm:ml-3">
            <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Quay Lại
            </button>
        </a>
    </div>
    </div>
</div>
        <div class="shadow overflow-hidden sm:rounded-md">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form action="#" method="POST" id="formSignup">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium text-gray-700">Tên</label>
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value = "${data.firstname}">
                            </div>
            
                            <div class="col-span-6 sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Họ Tên Đệm</label>
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value = "${data.lastname}"> 
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="gioiTinh" class="block text-sm font-medium text-gray-700">Giới Tính</label>
                                <select id="gender" name="gioiTinh" autocomplete="gioiTinh" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>${data.gender}</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                                </select>
                            </div>
            
                            <div class="col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value = "${data.streetaddress}">
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="email" name="email-address" id="email" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value = "${data.email}">
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Đăng Ký
                            </button>
                        </div>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
</div>
`;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-edit-products");
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            const postFake = {

                title: document.querySelector("#tieuDe").value,
                img: document.querySelector("#img").value,
                detail: document.querySelector("#chiTet").value,
            };
            add(postFake)
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error));
            // axios.post("https://5e79b4b817314d00161333da.mockapi.io/posts", postFake);
        });
    },
};
export default editUser;