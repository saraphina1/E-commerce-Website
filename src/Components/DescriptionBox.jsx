import "../Styles/DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionNavigator">
        <div className="descriptionNavBox">Description</div>
        <div className="descriptionNavBoxFade">Reviews (122)</div>
      </div>
      <div className="descript">
        <p>
          {" "}
          An e-commerce website is an online platform that facilitates buying
          and selling of products and services over the internet. it serves as a
          virtual marketplace where businesses and individuals showcase their
          products, interact with customers, and conduct transaction without the
          need for a physical presence. E-commerce websites have gained immense
          popularity due to their convenience, accessibility, and the global reach
          they offer.
          <p>
            E-commerce websites typically display products or services along with
            detailed descriptions, images, prices and any available variation
            (e.g, sizes, colors). Each product usually have its own dedicated page
            with relevant information.
          </p>
        </p>
      </div>
    </div>
  )
};

export default DescriptionBox;
