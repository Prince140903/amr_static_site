import React, { useState } from "react";
import { companyInfo } from "../data";
import ClientsSlider from "../components/ClientsSlider";

export default function FabricationWorks() {
  const counts = {
    1: 5,
    2: 12,
    3: 9,
    4: 8,
    5: 23,
    6: 5,
    7: 5,
    8: 12,
    9: 11,
    10: 11,
    11: 10,
    12: 12,
  };
  const allImages = Object.entries(counts).flatMap(([p, count]) =>
    Array.from({ length: count }, (_, i) => ({
      src: `/fabrication/p${p}_${i + 1}.jpg`,
      id: `p${p}_${i + 1}`,
    }))
  );

  const [failedImages, setFailedImages] = useState([]);

  const handleImageError = src => {
    setFailedImages(prev => (prev.includes(src) ? prev : [...prev, src]));
  };

  const validImages = allImages.filter(
    image => !failedImages.includes(image.src)
  );

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold tracking-widest text-amr-orange uppercase">
              Fabrication Works
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              AMR Engineering Works – Fabrication & Machining
            </h1>
            <p className="text-slate-600 leading-relaxed">
              More than 16 years of machining & manufacturing expertise. AMR, an
              Indian company, established in 2009. We assist customers by
              offering complete fabrication packages, which include metal
              bending and rolling, surface treatment, and CAD design and
              engineering.
            </p>
          </div>
          <img
            src="/fabrication/banner.jpg"
            alt="fabrication Banner"
            className="w-full h-full object-cover"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Fabrication Services
              </h2>
              <p className="text-slate-600 mb-4">
                We have a wealth of experience customising and fabricating
                structural steel products for many different industries.
              </p>
              <h3 className="font-bold text-slate-800 mb-2">
                List of Machineries
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Arc Welding Machine - 05 nos.</li>
                <li>• CO2 Welding Machine - 01 no.</li>
                <li>• Hand Grinder - 06 nos.</li>
                <li>• Profile Gas Cutting Machine - 01 no.</li>
              </ul>
              <h3 className="font-bold text-slate-800 mt-4 mb-2">
                List of Manpower
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Fitter - 02 nos.</li>
                <li>• Welder - 03 nos.</li>
                <li>• Grinder - 02 nos.</li>
                <li>• Helper - 02 nos.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Machining Services
              </h2>
              <p className="text-slate-600 mb-4">
                We have a wealth of experience of machining with steel, plastic
                products for many different industries.
              </p>
              <h3 className="font-bold text-slate-800 mb-2">
                List of Machineries
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• CNC Machine Dia 350 x 800 MM Long - 01 no.</li>
                <li>• VMC Machine Size L 850 x H 500 x W 600 MM - 01 no.</li>
                <li>• Lathe Machines (4–18 Fit) - multiple nos.</li>
                <li>• Milling Machine 2 No - 02 no.</li>
                <li>• Drill Machines - 02 no.</li>
                <li>• Gear Hobbing Machines - 02 no.</li>
                <li>• Bandsaw Cutting Machines - 02 no.</li>
              </ul>
              <h3 className="font-bold text-slate-800 mt-4 mb-2">
                List of Manpower
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Fitter - 01 nos.</li>
                <li>• Turner - 08 nos.</li>
                <li>• Grinder - 02 nos.</li>
                <li>• Helper - 02 nos.</li>
              </ul>
            </div>
          </div>

          <ClientsSlider clients={companyInfo.clients} />

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {validImages.map((image, i) => (
                <div
                  key={image.id}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={image.src}
                    alt={`Fabrication ${image.id}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={() => handleImageError(image.src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
