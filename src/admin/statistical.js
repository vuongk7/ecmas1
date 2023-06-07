import NavAdmin from "../components/NavAdmin";

const StatisticalPage = {
    render() {
        return /* html */`
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-xl mx-auto font-bold text-gray-900">
                <a href="/">Vào Website</a>
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
            </div>
            </main>
        </div>
    
                    `;
    },
};
export default StatisticalPage;