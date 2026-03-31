import logo3 from '../assets/brandslogo/Paro-Oud-logo.jpg'
import logo2 from '../assets/brandslogo/ROS.png'
import logo1 from '../assets/brandslogo/diy.png'
import logo4 from '../assets/brandslogo/biomaze.jpeg'
import logo5 from '../assets/brandslogo/tcitaiwan.jpeg'
import logo6 from '../assets/brandslogo/cloud9.jpeg'
import logo7 from '../assets/brandslogo/cosmax.jpg'
import logo8 from '../assets/brandslogo/supermillionhairs.png'
import logo9 from '../assets/brandslogo/bbetter_healthcare_logo.jpeg'

export const BrandsCarousel = () => {
  const brands = [
    logo1,
    logo2,
    logo3, 
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Trusted by Leading Brands
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={brand} alt=""  className="object-contain w-full h-full p-4"/>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
               <img src={brand} alt=""  className="object-cover w-full h-full p-4"/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
