import styles from './Time.module.css'
const Time = () => {

    return <div>
        <p className = {styles.hours}>
            00
        </p>
        <p className = {styles.min}>
            00
        </p>
            <p className = {styles.sec}>
            00
        </p>
    </div>
}

export default Time;