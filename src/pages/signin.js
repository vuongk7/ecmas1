import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return /* html */`
    <div class="max-w-5xl mx-auto">
    <h3 class="text-center">TRANG ĐĂNG NHẬP</h3>
    <div>
    <div class="py-4">
    <img src="./images/logo-footer.png" class="mx-auto" />
   </div>
<div class="mt-10 sm:mt-0">
    <div class="mt-5 md:mt-0 md:col-span-2">
    <form action="#" method="POST" id="formSignin">
        <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email-address" id="email" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            <div class="col-span-6 sm:col-span-4">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Mật Khẩu</label>
            <input type="password" name="pass" id="password" autocomplete="pass" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
             </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             <a href="/" class="text-white no-underline">Quay Lại</a>
            </button>
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Đăng Nhập
            </button>
        </div>
        </div>
    </form>
    </div>
</div>
</div>
    
    `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data.user)); // lưu dữ liệu vào local storage
                    toastr.success("Đăng Nhập thành công, chờ chuyển trang");
                    if (data.user.id === 1) {
                        setTimeout(() => {
                            document.location.href = "/admin/statistical";
                        }, 1000);
                    } else {
                        document.location.href = "/";
                    }
                }
            } catch (error) {
                toastr.error(error.response);
            }
        });
    },
};
export default Signin;