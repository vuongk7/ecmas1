const Footer = {
    render() {
        return /* html */ `
        <footer class="">
        <div class="rounded-lg shadow-lg my-20 flex flex-row">
        <div
          class="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-extrabold mb-4">Đăng ký để nhận ưu đãi của chúng tôi trước</h3>
            <p class="mb-4 leading-relaxed">Bạn muốn nghe ý kiến ​​từ chúng tôi khi chúng tôi có ưu đãi mới? Đăng ký nhận
              bản tin của chúng tôi và chúng tôi sẽ gửi email cho bạn mỗi khi chúng tôi có khuyến mại mới.</p>
            <div>
              <input type="email" placeholder="Enter email address"
                class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4" />
              <button type="submit" class="bg-red-600 py-3 rounded-lg w-full">Đăng ký</button>
            </div>
          </div>
        </div>
        <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
          <img src="./images/subscribe-banner.png" class="h-96" />
        </div>
      </div><!-- Newsletter Section -->
  

        <div class="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm">
        <div class="mb-4 pt-3">
          <a href="#" class="mx-2.5"><img src="./images/logo-footer.png" alt=""></a>
        </div>
        <div class="mb-4">
          <h4 class="mx-2.5">Liên hệ:</h4>
          <p class="pt-2">SDT: 0352.860.701</p>
          <p class="pt-2">Email: Vietpromobile@gmail.com</p>
          <p class="pt-2">BBA Hoàn Cầu Đống Đa - Hà Nội</p>
        </div>
        <div class="mb-6 flex pt-10">
          <a href="#" class="mx-4"><svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg></a>
          <a href="#" class="mx-4"><svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg></a>
          <a href="#" class="mx-4"><svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg></a>
        </div>
        <p class="pt-10">&copy; Copyright Reserved 2021</p>
      </div>
         </footer>
       `;
    },
};
export default Footer;