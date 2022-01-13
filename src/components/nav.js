const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">News</a></li>
                <li><a href="/admin/dashboard" class="block py-3 px-4 text-white hover:bg-blue-500">Admin</a></li>
            </ul>
            <div>
            <a href="/dangky" class="text-white">Đăng Ký /</a>
            <a href="/dangnhap" class="text-white">Đăng Nhập</a>
            </div>
        </nav>`;
    },
};
export default Nav;