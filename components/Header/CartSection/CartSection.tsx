import Image from 'next/image';
import cartIcon from '../../../public/icons/cart.svg';

const CartSection = () => {
  return (
    <div className="flex items-center justify-between gap-2 cursor-pointer relative group ">
      <p className="group-hover:text-gold duration-simple hidden sm:block">Cart total: 172$</p>
      <p className="group-hover:text-gold duration-simple sm:hidden">172$</p>
      <p className="absolute right-0 top-5 w-5 h-5 bg-gray rounded-full text-sm text-center text-white group-hover:bg-gold duration-simple">
        5
      </p>
      <Image priority src={cartIcon} alt="Cart" width={35} />
    </div>
  );
};

export { CartSection };
