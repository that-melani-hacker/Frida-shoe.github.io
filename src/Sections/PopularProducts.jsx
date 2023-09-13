import PopularProductCard from"../Components/PopularProductCard"
import { products } from "../Constants";


const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
         <h2 className="text-4xl font-palaquin font-bold">Our <span className="text-pink-600">Trendsetting</span>  Designs</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">Be the envy of your friends with our selection of cutting-edge, fashion-forward shoes. From sleek sneakers to statement heels, these styles are designed to keep you ahead of the curve.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {products.map((product) => (
          <PopularProductCard key=
          {product.name} {...product} />
          ))}
      </div>
    </section>
  )
}

export default PopularProducts;