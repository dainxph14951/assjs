import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div class="bg-blue-800 py-4">
                <img src="/images/logo.png" class="mx-auto" />
            </div>
            <div class="bg-orange-500">
                ${Nav.render()}
            </div>
        </header>`;
    },
};
export default Header;