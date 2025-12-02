import Image from "next/image";
import Link from "next/link";

const warehouseData = [
  {
    id: 1,
    wh: 387.2,
    office: 102.3,
    imagePath: "/warehouses/wh1.png",
    description:
      "A spacious industrial warehouse with a generous office space, ideal for medium-scale operations and expanding logistics teams.",
  },
  {
    id: 2,
    wh: 179.0,
    office: 75.8,
    imagePath: "/warehouses/wh12.png",
    description:
      "A compact, efficient warehouse designed for startups, local distributors, and businesses needing secure, modern storage.",
  },
  {
    id: 3,
    wh: 227.7,
    office: 75.8,
    imagePath: "/warehouses/wh5-4-6.png",
    description:
      "Balanced warehouse and office proportions make this unit perfect for growing businesses seeking practicality and style.",
  },
  {
    id: 4,
    wh: 227.7,
    office: 75.8,
    imagePath: "/warehouses/wh1-2-3.png",
    description:
      "A versatile warehouse designed for flexible workflows, offering excellent clearance and a refined upper-level office.",
  },
  {
    id: 5,
    wh: 179.0,
    office: 75.8,
    imagePath: "/warehouses/wh6-7.png",
    description:
      "An efficient warehouse unit ideal for smaller teams, e-commerce operations, or local distribution hubs.",
  },
  {
    id: 6,
    wh: 254.9,
    office: 95.7,
    imagePath: "/warehouses/wh-10-11-12.png",
    description:
      "A premium mid-sized warehouse offering a strong mix of storage capacity and a bright, modern office space.",
  },
  {
    id: 7,
    wh: 254.9,
    office: 95.7,
    imagePath: "/warehouses/wh-7-8-9.png",
    description:
      "Designed for operational efficiency, this warehouse features excellent floor space paired with a functional upper office.",
  },
  {
    id: 8,
    wh: 179.0,
    office: 75.8,
    imagePath: "/8.png",
    description:
      "A modern compact warehouse well-suited for boutique businesses, light manufacturing, or specialised storage needs.",
  },
  {
    id: 9,
    wh: 227.7,
    office: 75.8,
    imagePath: "/9.png",
    description:
      "A balanced warehouse-and-office configuration built for businesses seeking usable floor area and contemporary design.",
  },
  {
    id: 10,
    wh: 227.7,
    office: 75.8,
    imagePath: "/10.png",
    description:
      "Featuring strong accessibility and clean architectural lines, this unit is ideal for streamlined operations and client-facing teams.",
  },
  {
    id: 11,
    wh: 179.0,
    office: 75.8,
    imagePath: "/7.png",
    description:
      "A flexible, compact warehouse with a well-proportioned office space, perfect for small-scale logistics or specialist suppliers.",
  },
  {
    id: 12,
    wh: 387.2,
    office: 102.3,
    imagePath: "/8.png",
    description:
      "A flagship large-format warehouse offering maximum storage capacity, impressive frontage, and a highly functional office.",
  },
];

export default function WarehousesPage() {
  return (
    <div className="min-h-screen w-full bg-mattblack text-light">
      <main className=" mx-auto px-6 md:px-12 lg:px-34 py-16 space-y-36">
        {/* HEADER */}
        <section className="flex justify-between">
          <div className="space-y-6 ">
            <p className="text-muted font-medium uppercase tracking-[0.25em] text-sm">
              Officer South · Industrial Precinct
            </p>

            <h1 className="text-5xl font-semibold tracking-tight">
              Nexus Business Park <br />
              <span className="text-muted">– 12 Premium Warehouses</span>
            </h1>

            <p className="text-muted max-w-2xl leading-relaxed">
              A modern collection of 12 warehouses designed for growing
              businesses. Featuring high-clearance storage, first-floor offices,
              secure roller access, and clean contemporary architecture.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mt-14">
              <Stat label="Total Area" value="3913.4 m²" />
              <Stat label="Warehouses" value="12 Units" />
              <Stat label="Site Coverage" value="73.6%" />
            </div>
          </div>

          {/* back button */}
          <div className="h-fit flex mt-10 justify-end">
            <Link
              href="/"
              className="inline-flex items-center justify-end gap-2 bg-[#1a1a1a] text-light px-5 py-3 rounded-full text-sm hover:bg-light hover:text-dark transition-all w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1 rotate-180"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>

        {/* WAREHOUSE SECTIONS */}
        <div className="flex flex-col gap-20 md:gap-32 ">
          {warehouseData.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const total = item.wh + item.office;

            return (
              <div
                key={item.id}
                className={`overview-block flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 md:gap-16 lg:gap-24`}
              >
                {/* IMAGE SIDE */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`overview-image relative aspect-[4/4] ${
                      isReversed ? "sm:ml-18" : "sm:mr-18"
                    } overflow-hidden rounded-[30px]`}
                  >
                    <Image
                      src={item.imagePath}
                      alt={`Warehouse ${item.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* TEXT SIDE */}
                <div
                  className={`overview-text w-full lg:w-2/5 py-3 ${
                    isReversed ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {/* HEADING */}
                  <h3 className="text-animate font-medium text-2xl md:text-3xl lg:text-4xl text-light mb-6 leading-tight">
                    Warehouse {item.id}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-animate text-muted text-base md:text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* DETAILS */}
                  <div className="space-y-3 text-muted md:text-lg text-base leading-relaxed">
                    <p>• Warehouse Area: {item.wh} m²</p>
                    <p>• Office Area: {item.office} m²</p>
                    <p>• Total Area: {total.toFixed(1)} m²</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LANDSCAPE SECTION */}
        {/* <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Landscape & Site Features</h2>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Kentucky Blue Grass lawn areas</li>
            <li>• New concrete pedestrian pathways</li>
            <li>• Canopy trees + shrubs for green appeal</li>
            <li>• 2500L rainwater tank for sustainability</li>
            <li>• Clean driveways and organised circulation</li>
          </ul>
        </section> */}
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted text-xs uppercase tracking-wide">{label}</p>
      <p className="text-light text-lg font-medium">{value}</p>
    </div>
  );
}
