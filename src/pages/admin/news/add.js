import { add } from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";

const AddNewsPage = {
    render() {
        return /* html */`
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới tin tức
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form action="" id="form-add-post">
                        <input type="text" placeholder="Tieu Đề Bài Viết" class="border border-black" id="title-post"></br>
                        <input type="text" placeholder="Ảnh Bài Viết" class="border border-black" id="img-post"></br>
                        <textarea name="" id="desc-post" cols="40" rows="5" class="border border-black"></textarea>
                        <button>Thêm</button>
                      </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    
                    `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            const postFake = {
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            };
            add(postFake)
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error));
            // axios.post("https://5e79b4b817314d00161333da.mockapi.io/posts", postFake);
        });
    },
};
export default AddNewsPage;