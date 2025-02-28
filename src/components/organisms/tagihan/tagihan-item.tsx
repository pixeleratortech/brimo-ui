import Image from 'next/image';
import Paragraph from '@/components/atoms/paragraph';

interface Props {
    icon: string;
    label: string;
}
export const TagihanItem = ({ icon, label }:Props) => (
    <div className='flex items-center gap-4'>
      <Image src={icon} alt={`${label} Icon`} className='w-10 h-10' width={10} height={10} />
      <Paragraph className='text-xl font-brineue-bold'>{label}</Paragraph>
    </div>
  );