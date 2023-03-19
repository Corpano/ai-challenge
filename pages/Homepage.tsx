import styles from '../styles/homepage.module.css'
import {Roboto} from 'next/font/google'

const roboto = Roboto({weight:"700", subsets:['latin']});

export default function Homepage() {
    return <div className={styles.container + " " + roboto.className}>
        <nav className={styles['nav-bar']}>
            <h2>AI CHALLENGE</h2>
        </nav>

        <div className={styles['headline-container']}>
            <h2>ARE YOU SMARTER THAN <span>CHAT GPT?</span></h2>
            <p>Find out by answering 10-question quiz to see how your answers compare to AI’s.</p>
        </div>

        <div className={styles.quizesContainer}>
            {QuizOption("General Questions", "/images/earth.jpg", "")}
            {QuizOption("Physics", "/images/physics.jpg", "")}
            {QuizOption("Math", "/images/math.png", "")}
        </div>

    </div>
}

function QuizOption(title:string, sourceImageUrl:string, url:string){
        return <div className={styles.quizOption}>
            <a href=''>
                <img className={styles.quizImage} src={sourceImageUrl}></img>
                <p className={styles.quizTitle}>{title}</p>
            </a>
        </div>
}