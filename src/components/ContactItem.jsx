import styles from './ContactItem.module.css'

const ContactItem = ({ data: { id, name, lastName, email, phone }, deleteHandler }) => {
    return (
        <>
            <li className={styles.itemhead} >
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Action</p>
            </li >
            <li className={styles.item}>
                <p>{name} {lastName}</p>
                <p><span></span> {email}</p>
                <p><span></span>{phone}</p>
                <button onClick={() => deleteHandler(id)}>Delete</button>
            </li>
        </>

    )
}
export default ContactItem
