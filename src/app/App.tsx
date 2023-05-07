import { Form } from '@widgets/form'
import styles from './app.module.scss'

export const App = () => {
    return (
        <div className={styles.app}>
            <h2>Форма бронирования переговорной</h2>
            <Form />
        </div>
    )
}
