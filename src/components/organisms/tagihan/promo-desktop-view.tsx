import Image from "next/image";
import Paragraph from "@/components/atoms/paragraph";
import FadeInFromBottom from "@/components/animation/fadeInBottom";
import { PromoDummy } from "@/helper/dummy";

const PromoDesktopView = () => {
  return (
    <div className="grid grid-cols-4 mt-16 gap-8">
{PromoDummy.slice(0, 5).map((promo, index) => {
  const className = (() => {
    switch (index) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-start-3";
      case 2:
        return "col-start-3 row-start-2";

      default:
        return "";
    }
  })();

  return (
    <FadeInFromBottom
      key={promo.id}
      duration={400 * promo.id}
      className={`promo-list-${promo.id}`}
      style={`${className} bg-primary-blue rounded-xl shadow`}
    >
      <Image
        src={promo.image}
        alt=""
        width={1000}
        height={1000}
        className={`w-full rounded-xl ${
          promo.id === 1 ? "h-[20rem]" : "h-[10rem]"
        } object-cover`}
      />
      <div className="px-6 py-4">
        <Paragraph
          className={`font-brineue-regular text-primary-white`}
        >
          6 Januari 2024
        </Paragraph>
        <Paragraph
          className={`${
            promo.id === 1 ? "text-[2.5rem]" : "text-lg"
          } font-brineue-bold text-primary-white`}
        >
          {promo.title}
        </Paragraph>
        <Paragraph
          className={`${
            promo.id === 1 ? "text-[12px]" : "text-[10px]"
          } font-brineue-bold border mt-4 px-2 border-primary-white bg-primary-white rounded-full w-fit text-primary-blue`}
        >
          {promo.category}
        </Paragraph>
      </div>
    </FadeInFromBottom>
  );
})}
</div>
  )
}

export default PromoDesktopView
