import { UseFormReturn } from 'react-hook-form'
import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  register: UseFormReturn['register'];
}

export function Input({ label, register }: InputProps) {
  return <input
    className={styles['text-box']}
    id={label}
    placeholder={label}
    {...register(label)}
  />;
}
