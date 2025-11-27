import React from "react";

const AffordableWarehouseSection = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto p-6 md:p-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8 md:gap-12 items-stretch">
        <div className="flex">
          <div className="bg-[#EAE8E3] rounded-3xl p-8 md:p-12 h-full w-full">
            <h2 className="text-3xl text-[#5C5B59] md:text-4xl font-semibold text-gray-800 leading-tight">
              Affordable <br className="md:hidden" /> Warehouse Space
            </h2>
            <p className="text-lg py-10 md:text-lg font-normal text-gray-500 leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              adipisci ut praesentium voluptas officia est culpa sed cumque
              officiis illum qui explicabo nam repellendus aspernatur similique
              rerum laudantium iste, error maxime perferendis!
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-sm h-full w-full">
            <img
              src="/feature-image.png"
              alt="Modern cityscape with large square"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableWarehouseSection;
