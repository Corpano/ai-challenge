import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer(){
    return <div className={styles['footer_container']}>
        <h2 className={styles['logo']}>AI CHALLENGE</h2>
        
        <div className={styles['robot_holder']}>
            <img className={styles['robot']} src='images/robot.png'></img>
        </div>

        <div className={styles['two-sides_container']}>
            <div className={styles['left']}>
                <h3>Important Notice</h3>
                <p>Regarding the quizzes on this website, I can assure you that the scores are not a reflection of your intelligence or abilities in any way. They are purely for entertainment purposes and to demonstrate the capabilities of AI in generating engaging and interactive content. It&apos;s important to always take the results of any online quiz with a grain of salt and not take them too seriously.Regarding the quizzes on this website, I can assure you that the scores are not a reflection of your intelligence or abilities in any way. They are purely for entertainment purposes and to demonstrate the capabilities of AI in generating engaging and interactive content. It&apos;s important to always take the results of any online quiz with a grain of salt and not take them too seriously.<br/><br/>Written by Chat GPT</p>
            </div>

            <div className={styles['right']}>
                <h3>Get in touch!</h3>
                <p>If you are interested to learn more about AI or would like to chat, feel free to contact me. I am looking to meet more like minded individuals interested in AI, send me a message!</p>

                <button className={styles['contact-me']}>
                    <Link href="/" className={styles["contact-me_text"]}>CONTACT ME</Link>
                </button>
            </div>
        </div>

        <p className={styles['credits']}>Created in 2023 by Anto Pinjatic (not a robot lol)</p>
    </div>
}