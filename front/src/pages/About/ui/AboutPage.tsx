import { aboutData } from '../../../shared/About/model/data/about.ts';
import { AboutHero } from '../../../widgets/AboutHero';
import { AboutGrid } from '../../../widgets/AboutGrid';
import { Footer } from '../../../widgets/Footer';

export const AboutPage = () => {
    return (
        <main>
            <AboutHero text={aboutData.heroText} />
            <AboutGrid />
            <Footer variant="white" />
        </main>
    );
};