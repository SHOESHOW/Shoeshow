import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";

const page = () => {
  return (
    <div className="w-full md:my-20">
      <Wrapper>
        {/* HEADING START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cartzz
          </div>
        </div>
        {/* HEADING END */}

        {/* CART CONTENT START */}
        <div className="flex flex-col lg:flex-row md:gap-12 py-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* CART ITEMS START */}

          {/* SUMMARY START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  &#8377; 2000.00
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae officia laborum architecto et hic voluptas, non
                voluptatibus obcaecati ab cupiditate? Voluptatibus ducimus magni
                atque tempora, facilis qui deleniti laudantium velit.
              </div>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="bg-black text-white py-4 rounded-full w-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
          </div>
          {/* SUMMARY END */}
        </div>
        {/* CART CONTENT END */}

        {/* THIS CONTENT IS EMPTY */}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <img src="/empty-cart.png" className="w-[300px] md:w-[400px]" />
          <span className="text-xl font-bold">Your cart is empty!</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart <br /> Go ahead
            and explore top categories.
          </span>

          <Link
            href={"/"}
            className="bg-black text-white py-4 px-8 rounded-full mt-8 hover:opacity-75 active:scale-95 mb-3"
          >
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default page;
