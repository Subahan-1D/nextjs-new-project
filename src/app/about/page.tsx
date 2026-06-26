
import styles from './About.module.css';
const AboutPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className={styles.text_style}>This is the about page of our Next.js application.</p>
        </div>
    );
};
export default AboutPage;