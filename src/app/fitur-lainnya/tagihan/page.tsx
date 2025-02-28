import Paragraph from '@/components/atoms/paragraph';
import React from 'react';
import Image from 'next/image';
import { TagihanItem } from '@/components/organisms/tagihan/tagihan-item';
import SavingFAQ from "@/components/molecules/faq-section";



const TagihanPage = () => {
  const tagihanList = [
    { icon: '/icons/icon_pdam.svg', label: 'PDAM' },
    { icon: '/icons/icon_bpjs.svg', label: 'BPJS' },
    { icon: '/icons/icon_listrik.svg', label: 'Listrik' },
  ];

  const tagihanJangkaPanjang = [
    { icon: '/icons/icon_pendidikan.svg', label: 'Pendidikan' },
    { icon: '/icons/icon_pajak.svg', label: 'Pajak PBB' },
    { icon: '/icons/icon_snpmb.svg', label: 'SNPMB' },
  ];

  return (
    <>
      {/* Section 1 */}
      <div className='bg-primary-blue flex justify-between items-center min-h-screen px-32'>
        <div className='text-left text-white max-w-xl'>
          <div className='flex items-center mb-2'>
            <Image 
              src='/icons/brimo_logo_white.png' 
              alt='BRImo Logo' 
              className='w-[280px] h-auto mr-4'
              width={280} height={280} 
            />
          </div>
          <Paragraph className='text-6xl font-brineue-bold leading-tight'>
            Solusi Praktis untuk <br /> Bayar Tagihan
          </Paragraph>
        </div>
        <div className='flex justify-end'>
          <Image 
            src='/images/dummy_home_banner.png' 
            alt='BRImo Illustration' 
            className='w-[600px] h-auto'
            width={600} height={600} 
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-primary-white flex justify-between items-center min-h-screen px-32 py-8'>
        <div className='flex justify-end'>
          <Image 
            src='/images/dummy_section_2.png' 
            alt='BRImo Illustration' 
            className='w-[500px] h-auto'
            width={500} height={500}
          />
        </div>
        <div className='text-left text-primary-blue max-w-xl'>
          <Paragraph className='text-5xl font-brineue-bold leading-tight mb-4'>
            Bayar Tagihan Bulanan Dengan <span className='inline-flex items-center'><Image src='/icons/blue_brimo.svg' alt='BRImo Logo' className='w-28 h-auto inline' width={100} height={100}/></span>
          </Paragraph>
          <Paragraph className='text-lg mb-6'>
            Bayar tagihan PDAM, BPJS, Listrik, dan tagihan bulanan lainnya dengan praktis melalui aplikasi BRImo!
          </Paragraph>
          <div className='space-y-6 mb-6'>
            {tagihanList.map((item, index) => (
              <TagihanItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
          <button 
            className='bg-primary-blue text-white text-lg font-bold py-2 px-6 rounded-full hover:bg-blue-700'
            aria-label='Lihat Selengkapnya'
          >
            Selengkapnya ➔
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className='bg-primary-white flex justify-between items-center min-h-screen px-32 py-8'>
        <div className='text-left text-primary-blue max-w-xl'>
          <Paragraph className='text-5xl font-brineue-bold leading-tight mb-4'>
            Bayar Tagihan Jangka Panjang Dengan <span className='inline-flex items-center'><Image src='/icons/blue_brimo.svg' alt='BRImo Logo' className='w-28 h-auto inline' width={100} height={100} /></span>
          </Paragraph>
          <Paragraph className='text-lg mb-6'>
          Bayar tagihan jangka panjang seperti Pendidikan, Pajak PBB, SNPMB, dan tagihan lainnya dengan praktis langsung dari aplikasi BRImo!
          </Paragraph>
          <div className='space-y-6 mb-6'>
            {tagihanJangkaPanjang.map((item, index) => (
              <TagihanItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
          <button 
            className='bg-primary-blue text-white text-lg font-bold py-2 px-6 rounded-full hover:bg-blue-700'
            aria-label='Lihat Selengkapnya'
          >
            Selengkapnya ➔
          </button>
        </div>
        <div className='flex justify-end'>
          <Image 
            src='/images/dummy_section_2.png' 
            alt='BRImo Illustration' 
            className='w-[500px] h-auto'
            width={500} height={500}
          />
        </div>
      </div>
      {/* Section 4 */}
      <SavingFAQ containerStyle="mt-44 max-w-screen-lg mx-auto" />
    </>
  );
};

export default TagihanPage;
