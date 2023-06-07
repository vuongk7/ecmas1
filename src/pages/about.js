import footer from "../comboudun/footer";
import header from "../comboudun/header";

const AboutPage = {
  render() {
    return /* html */ `
        ${header.render()}
        <div class="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
        <section class="mb-20 text-gray-800 text-center">
          <h3 class="font-bold text-3xl mb-12">Liên hệ</h3>
          <div class="flex flex-wrap">
            <div class="mb-6 lg:mb-0 flex-initial shrink w-full lg:w-5/12 lg:pr-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.812675330884!2d105.80875906377818!3d21.014546124996308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab13038e432d%3A0xc8d285b5ea884cab!2zSOG6u20gUXXDoW4gLSBIb8OgbmcgQ-G6p3U!5e0!3m2!1sen!2s!4v1644720070019!5m2!1sen!2s"
                class="h-56 md:h-full w-full border-0 rounded-md" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="flex-initial shrink w-full lg:w-7/12 lg:pl-3">
              <form>
                <div class="flex flex-wrap">
                  <div class="flex-initial shrink w-full md:w-12/12 md:pr-3">
                    <div class="grid md:grid-cols-2 md:gap-4 mb-6">
                      <div class="mb-6 md:mb-0">
                        <input type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleX1" placeholder="First name" />
                      </div>
                      <div>
                        <input type="email"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleX2" placeholder="Email address" />
                      </div>
                    </div>
                    <div class="mb-6">
                      <input type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleX3" placeholder="Subject" />
                    </div>
                    <div class="mb-6">
                      <textarea
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleX4" rows="4" placeholder="Message"></textarea>
                    </div>
                    <div class="text-center md:text-left">
                      <button type="submit"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-12 md:mb-0">Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>   
      </div>
      ${footer.render()}
        `;
  },
  afterRender() {
    header.afterRender();
  },
};
export default AboutPage;