import Header from "../../comboudun/header";
import Footer from "../../comboudun/footer";
import NewProduct from "./newProduct";

const ListProductNew = {
    async render() {
        return /* html */ `
        ${Header.render()}
        <div>
           ${await NewProduct.render()}
         </div>
        ${Footer.render()}
        `;
    },
};
export default ListProductNew;