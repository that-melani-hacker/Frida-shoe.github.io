import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../Components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-pink-600'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Welcome to the treasure trove of unbeatable deals and exclusive discounts – our "Special Offer" section. At Frida, we believe that everyone deserves a little something extra, and this is where you'll find it.
        </p>
        <p className='mt-6 info-text'>
        Explore the "Special Offer" section now, and be prepared to be pleasantly surprised. Keep coming back for new surprises, and don't miss out on the savings and exclusive opportunities that await you.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more' iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;