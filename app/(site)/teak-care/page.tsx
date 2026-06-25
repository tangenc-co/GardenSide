import { BestWayMaintenanceTeak } from "@/components/BestWayMaintenanceTeak";
import { OutdoorFurniture } from "@/components/OutdoorFurniture"
import { QAboutTeakCare } from "@/components/QAboutTeakCare";
import { TeakCareHeroSection } from "@/components/TeakCareHeroSection";
import { TeakCareTips } from "@/components/TeakCareTips";

export default function TeakCarePage() {
  return (
    <section>
      <TeakCareHeroSection />
      <OutdoorFurniture />
      <BestWayMaintenanceTeak />
      <TeakCareTips />
      <QAboutTeakCare/>
    </section>
  );
}
