import { AboutUsHeroSection } from "@/components/AboutUsHeroSection";
import { CoreValue } from "@/components/CoreValue";
import { QualityCraft } from "@/components/QualityCraft";
import { UseGradeTeak } from "@/components/UseGradeTeak";

export default function AboutUsPage(){
    return (
        <section>
            <AboutUsHeroSection/>
            <QualityCraft/>
            <CoreValue/>
            <UseGradeTeak/>
        </section>
    )
}