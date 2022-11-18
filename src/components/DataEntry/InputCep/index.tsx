import styles from "./styles.module.scss";
import { UseFormReturn } from 'react-hook-form'

interface InputCepProps {
  register: UseFormReturn['register'];
}

export function InputCep({ register }: InputCepProps) {
  return (
    <>
      <input
        className={styles['text-box']}
        placeholder='CEP'
        required
        id="cep"
        {...register('cep')}
      />
    </>
  );
}

