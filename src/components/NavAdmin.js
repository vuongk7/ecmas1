import { reRender } from "../utils/rerender";

const NavAdmin = {
  render() {
    return /* html */`
        <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="/admin/statistical" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page">Statistical</a>
  
                  <a href="/admin/news"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
  
                  <a href="/admin/user"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User</a>
  
                  <a href="/admin/products"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>

                  <a href="/admin/comment"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Comment</a>
                    
                  <a href="/admin/cate"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cate</a>
                </div>
              </div>
            </div>
            <div class="">
              <div class="ml-4 flex items-center md:ml-6">
              <span id="account" class="text-white"></span>
              <button id="logout">Logout</button>
              </div >
            </div >
  <div class="-mr-2 flex md:hidden">
    <button type="button"
      class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
          </div >
        </div >

  <div class="md:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="/admin/dashboard" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        aria-current="page">Dashboard</a>

      <a href="/admin/news"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</a>

      <a href="/admin/products"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>

      <a href="/admin/orders"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders</a>

      <a href="/admin/settings"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Settings</a>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="mt-3 px-2 space-y-1">
      </div>
    </div>
  </div>
      </nav >
  `;
  },
  afterRender() {
    const account = document.querySelector("#account");
    const btnLogout = document.querySelector("#logout");
    account.innerHTML = JSON.parse(localStorage.getItem("user")).email;

    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Ban da logout thanh cong");
      reRender(NavAdmin, "#header");
    });
  },
};
export default NavAdmin;