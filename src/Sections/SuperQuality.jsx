import { shoe8 } from "../assets/images";
import { Button } from "../Components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-pink-600'> Super </span>
          <span className='text-pink-600'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        When you choose from our "Super Quality" range, you're not just buying shoes; you're investing in a level of quality that's second to none. Whether you're stepping into a boardroom, a special occasion, or your everyday adventures, our "Super Quality" shoes are there to enhance your stride.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Elevate your style, comfort, and confidence with the very best—welcome to the world of "Super Quality."
        </p>
        <div className='mt-11'>
          <Button label='Shop Elegance' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;

