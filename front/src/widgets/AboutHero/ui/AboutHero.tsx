import styles from './AboutHero.module.scss';

interface AboutHeroProps {
    text: string;
}

export const AboutHero = ({ text }: AboutHeroProps) => {
    return (
        <section className={styles.AboutHero}>
            <div className="container">
                <span className={styles.label}>ABOUT</span>
                <h2 className={styles.title}>{text}</h2>
            </div>
        </section>
    );
};
