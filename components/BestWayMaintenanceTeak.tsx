import Image from "next/image";

const metadata = [
  {
    id: 1,
    icon: "/icon/water.svg",
    title: "Standard Cleaning",
    description:
      "A mild solution of soapy water or a diluted mixture of Marine SimpleGreen® and water will remove accumulated dirt. Follow with a clean water rinse.",
  },
  {
    id: 2,
    icon: "/icon/recycle.svg",
    title: "Grease Spots",
    description:
      "For grease spots, a light scrub with a degreasing agent is recommended, followed by a rinse with clean water.",
  },
  {
    id: 3,
    icon: "/icon/protection.svg",
    title: "Sealing Benefits",
    description:
      "Teak sealants keep natural oils from depleting, deploying the weathering process and protecting against UV, molding, and water damage.",
  },
];
export function BestWayMaintenanceTeak() {
  return (
    <div className="bg-[#EDFAF5] py-20">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-2 gap-10">
        <div className="items-center flex justify-center">
          <Image
            src="/img/teak-maintenance.png"
            alt="Teak Maintenance"
            width={650}
            height={420}
            loading="eager"
          />
        </div>
        <div>
          <p className="text-[#213526] text-[40px] font-semibold">
            The Best Way to Maintain Teak
          </p>
          <p className="text-[#3D3D3D]">
            It’s generally a good idea to give your teak outdoor furniture a
            good occasional scrub at the end of every season or whenever it
            becomes visibly dirty.
          </p>
          <div>
            {metadata.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 my-6 border border-[#72BF96] rounded-lg p-4 bg-white"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
                <div className="">
                  <p className="text-[#3D3D3D] font-medium text-[16px]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#212529BF] pr-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
