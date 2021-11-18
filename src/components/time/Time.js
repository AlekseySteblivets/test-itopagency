import styles from './Time.module.css'
const Time = () => {
    return <div>
        <div className = {styles.hours}>
            00
        </div>
                <div className = {styles.min}>
            00
        </div>
                <div className = {styles.sec}>
            00
        </div>
    </div>
}

export default Time;