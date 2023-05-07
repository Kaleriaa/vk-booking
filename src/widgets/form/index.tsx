import React from 'react'
import styles from './form.module.scss'
import { selects, times } from './config'
import { formData } from '@features/form-data'

export const Form = () => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const data = formData(e.currentTarget)
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {selects.map(({ id, title, values }) => {
                return (
                    <div key={id}>
                        <label htmlFor={id}>{title}</label>
                        <select
                            className={styles.select}
                            required
                            id={id}
                            name={id}>
                            {values.map((it) => (
                                <option key={it} value={it}>
                                    {it}
                                </option>
                            ))}
                        </select>
                    </div>
                )
            })}
            <div className={styles.date}>
                <input
                    required
                    id="startDate"
                    min={new Date().toISOString().slice(0, -8)}
                    name="startDate"
                    type="datetime-local"
                />
                <select className={styles.select} required name="time">
                    {times.map((interval) => (
                        <option key={interval}>{interval}</option>
                    ))}
                </select>
            </div>
            <textarea
                name="comment"
                className={styles.textarea}
                rows={3}
                placeholder="Комментарий"
            />
            <div className={styles.btn}>
                <input type="reset" />
                <input type="submit" />
            </div>
        </form>
    )
}
