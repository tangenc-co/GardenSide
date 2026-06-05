import Image from "next/image";


const metadata = [
    {
        id:1,
        icon:"/icon/green-leaf.svg",
        title:"Sustainability First",
        description:"Every piece of teak we use is sourced from FSC-certified, sustainably managed forests in Indonesia. We are committed to giving back more than we take from nature."
    },
        {
        id:2,
        icon:"/icon/green-award.svg",
        title:"Uncompromising Quality",
        description:"We use only Grade A teak — the finest available — and subject every finished piece to our 47-point quality inspection before it leaves our workshop."
    },
        {
        id:3,
        icon:"/icon/people.svg",
        title:"Community & Craft",
        description:"Our partnerships with artisan communities in Indonesia ensure fair wages, safe working conditions, and the preservation of traditional woodworking skills."
    },
        {
        id:4,
        icon:"/icon/earth.svg",
        title:"Responsible Business",
        description:"We offset 100% of our shipping emissions and donate 1% of annual revenue to reforestation projects through our partnership with Trees for Life."
    },
        {
        id:5,
        icon:"/icon/heart.svg",
        title:"Customer Obsession",
        description:"From your first enquiry to your annual teak care service, we're here for every step of your Gardenside journey — because great furniture builds lasting relationships."
    },
        {
        id:6,
        icon:"/icon/green-award.svg",
        title:"Timeless Design",
        description:"We believe great design transcends trends. Our classic lines and natural finishes are crafted to look as beautiful in 25 years as they do on day one."
    },
]


export function CoreValue() {
  return (
    <div className="bg-[#EDFAF5] py-20">
      <div className="mx-auto max-w-7xl w-full px-4">
        <div className="text-center">
          <p className="uppercase text-[#056839]  text-lg">
            — What Drives Us
          </p>
          <p className="text-[#213526] text-[40px] font-semibold">
            Our Core Values
          </p>
          <p className="text-[#7A7A7A] text-[16px]">
            Every piece we create is built to age beautifully, withstand the
            British climate, and bring lasting joy to your outdoor spaces.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20">
            {metadata.map((item)=>{
                return(
                    <div key={item.id} className="border border-[#72BF96] rounded-lg p-6 bg-[#FEFEFE] ">
                        <div className="flex flex-col space-y-2">
                            <Image src={item.icon} alt="" width={22} height={22}/>
                            <p className="text-[#143D30] font-semibold text-[16px]">{item.title}</p>
                            <p className="text-sm text-[#667085] ">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
      
    </div>
  );
}
