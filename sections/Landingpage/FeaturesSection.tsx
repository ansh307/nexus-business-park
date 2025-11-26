import { featuresSectionData } from "@/constants";

export default function FeaturesSection() {
  return (
    <section className="w-full  mx-auto px-6 md:px-12 lg:px-34 py-20 md:py-24 font-sans">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          Built for{" "}
          <span className="font-semibold text-[#F1EEE7">Performance</span> and{" "}
          <span className="font-semibold text-[#F1EEE7">Flexibility</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
          A curated set of features designed to support growing businesses and
          smart investors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresSectionData.map((item, index) => (
          <div
            key={index}
            className="
              group
             
              p-8
              rounded-2xl
              border border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="w-12 h-1 bg-gray-900/50 mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
