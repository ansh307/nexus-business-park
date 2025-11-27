import { featuresSectionData } from "@/constants";

export default function FeaturesSection() {
  return (
    <section className="w-full  mx-auto px-6 md:px-12 lg:px-34 py-20 md:py-28 ">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-light mb-6 tracking-tight">
          Built for <span className="font-semibold ">Performance</span> and{" "}
          <span className="font-semibold ">Flexibility</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          A curated set of features designed to support growing businesses and
          smart investors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {featuresSectionData.map((item, index) => (
          <div
            key={index}
            className="
              group
              mt-8
            "
          >
            {/* <div className="w-12 h-1  mb-6 group-hover:w-full transition-all duration-500 ease-out"></div> */}
            <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-gray-900 transition-colors">
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
