import data from "../../data";

const editNews = {
    render(id) {
        const router = data.find((element) => element.id === id);
        return /* html */`<div class="max-w-5xl mx-auto">
    <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">

            <div class="col-span-6 sm:col-span-3">
                <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Tiêu Đề
                </span>
                <input type="text" name="tieude"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value="${router.title}" />
            </div>
            <div class="col-span-6 sm:col-span-3">
                <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Hình Ảnh Hiện Tại: ${router.img}
                </span>
                
                <input type="file" name="hinhanh"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value=""/>
    
            </div>
            <div class="col-span-6 sm:col-span-3">
                <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Chi Tiết Tin Tức
                </span>
                <textarea name="chitet" id="" cols="30" rows="10"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">${router.desc}</textarea>
            </div>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Edit </button>
            </div>
        </div>
    </form>
</div>
`;
    },
};
export default editNews;