import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import styles from './Main.module.css'

function Main() {
  return (
    <main className={styles.container}>

      <section className={styles.sec1}>
        <ContactsList />
      </section>


      <section className={styles.sec2}>
        <ContactForm />
      </section>


    </main>
  );
}

export default Main;