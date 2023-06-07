import Header from "../../comboudun/header";
import Footer from "../../comboudun/footer";
import SaleProduct from "./newProduct";

const ListProductSale = {
    async render() {
        return /* html */ `
        ${Header.render()}
        <div>
           ${await SaleProduct.render()}
         </div>
        ${Footer.render()}
        `;
    },
};
export default ListProductSale;