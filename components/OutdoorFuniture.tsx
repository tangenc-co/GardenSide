import Image from "next/image";

export function OutdoorFuniture() {
  return (
    <div className="bg-[#F5F5F5] py-32">
      <div className="mx-auto w-full max-w-7xl gap-14 grid grid-cols-2 ">
        <div className="space-y-6 ">
          <p className="uppercase text-[#056839] font-medium text-lg">
            — teak care
          </p>
          <p className="text-[#213526] text-[40px] font-semibold">
            Teak Care for Outdoor Furniture
          </p>
          <div className="text-[#3D3D3D] space-y-6 pr-10">
            <p>
              Teak outdoor furniture is beautiful, durable and practical. In
              addition, it can be left outside in the weather without becoming
              twisted or warped. You can rest assured that your premium teak
              furniture will not crack, splinter, or be a home to termites.
            </p>
            <p>
              It’s generally a good idea to give your teak outdoor furniture a
              good occasional scrub at the end of every season or whenever it
              becomes visibly dirty. A mild solution of soapy water or a diluted
              mixture of Marine SimpleGreen® and water will remove accumulated
              dirt. This should be followed by a rinse with clean water. To
              remove grease spots, a light scrub with a degreasing agent is
              recommended. This, too, should be followed by a rinse with clean
              water.
            </p>
            <p>
              If you choose to put your furniture away for the winter, do not
              store it in a heated room. The heat can dry out the wood and cause
              cracks. It is normal for teak wood to expand and contract with
              time and changes in weather. Some of the joints are not glued,
              like the slats in the back of chairs. From time to time you may
              need to tighten the fasteners.
            </p>
            
          </div>
        </div>

          <Image
            src="/img/cat-funiture.png"
            alt="Teak Outdoor Furniture"
            width={650}
            height={630}
            loading="eager"
          />

      </div>
    </div>
  );
}
