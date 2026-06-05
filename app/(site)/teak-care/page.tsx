import { BestWayMaintenanceTeak } from "@/components/BestWayMaintenanceTeak";
import { OutdoorFuniture } from "@/components/OutdoorFuniture";
import { QAboutTeakCare } from "@/components/QAboutTeakCare";
import { TeakCareHeroSection } from "@/components/TeakCareHeroSection";
import { TeakCareTips } from "@/components/TeakCareTips";

export default function TeakCarePage() {
  return (
    <section>
      <TeakCareHeroSection />
      <OutdoorFuniture />
      <BestWayMaintenanceTeak />
      <TeakCareTips />
      <QAboutTeakCare/>
    </section>
  );
}
