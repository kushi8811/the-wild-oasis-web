import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;
export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      {/* Text Section */}
      <div className="col-span-1 lg:col-span-3 z-10 px-4 sm:px-8">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Overlapping Image 1 */}
      <div className="col-span-1 lg:col-span-2 relative w-full h-80 sm:h-96 md:h-112 z-0">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          fill
          className="object-cover absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Managed by Section */}
      <div className="col-span-1 lg:col-span-3 z-10 px-4 sm:px-8">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>
        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative aspect-square col-span-1 lg:col-span-2 z-0">
        <Image
          src={image2}
          fill
          className="object-cover rounded-lg shadow-xl"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      {/* Button */}
      <div className="col-span-1 lg:col-span-3 text-center mt-10">
        <a
          href="/cabins"
          className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore our luxury cabins
        </a>
      </div>
    </div>
  );
}
