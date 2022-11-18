import styles from './styles.module.scss';

export default function ConfirmOrderButton() {
  return (
    <button className={styles['button-container']} type='submit'>Confirma pedido</button>
  );
}
