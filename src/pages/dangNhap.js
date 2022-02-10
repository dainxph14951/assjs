import { signin } from "../api/user";
import { $ } from "../utils/selector";

const DN = {
    render() {
        return `
        <form id="formSignin">
            <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
            <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
            <button>Đăng nhập</button>
        </form>
    `;
    },
    afterRender() {
        $("#formSignin").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
            // call api, nếu đăng nhập thành công sẽ trả về object data
                const { data } = await signin({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                // console.log('data', data);
                alert("Đăng nhập thành công");
                document.location.href = "/#/";
            } catch (error) {
            // nếu lỗi thì trả về object chứa lỗi error.response.data
                alert(error.response.data);
                $("#formSignin").reset();
            }
        });
    },
};
export default DN;