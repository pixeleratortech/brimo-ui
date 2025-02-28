import React from 'react';
import Carousel from 'react-multi-carousel';
import CarouselItem from '@/components/atoms/carousel';
import Image from 'next/image';
import Paragraph from '@/components/atoms/paragraph';

interface Props {
    data: { id: number; image: string; title: string }[];
    carouselRef: React.RefObject<Carousel | null>;
    handleClick: () => void;

}

const PromoMobileView = ({data, carouselRef, handleClick}: Props) => {
  return (
    <>
    <div className='mt-12 bg-white lg:mt-6'>
        <CarouselItem ref={carouselRef}>
            {data.map((item) => (
                <div
                onClick={handleClick}
                key={item.id}
                className='cursor-pointer mx-4 shadow border-b rounded-[20px] h-[18rem]'
                >
                <Image 
                src={item.image}
                alt=''
                width={1500}
                height={1000}
                className='h-[11rem] rounded-[20px] w-full object-cover'
                    />
                <Paragraph className='font-brineue-regular px-4 text-primary-black mt-2'>
                    6 Januari 2024
                </Paragraph>
                <Paragraph className='font-brineue-bold px-4 text-primary-blue mt-2'>
                    {item.title}
                </Paragraph>    
                </div>
            )
            )}
        </CarouselItem>
    </div>
    </>
  );
};

export default PromoMobileView
