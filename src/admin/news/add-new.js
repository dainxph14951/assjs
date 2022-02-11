import axios from "axios";

const addNews = {
    async render() {
        return `
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                </div>
                <div class="news">
                    <form id="formAddPost">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title Post"/><br />
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10"></textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddPost");
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            axios.post("https://5e79b4b817314d00161333da.mockapi.io/posts", {
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default addNews;