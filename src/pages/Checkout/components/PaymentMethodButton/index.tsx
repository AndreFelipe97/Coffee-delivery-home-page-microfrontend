import { ReactNode } from "react"
import { UseFormReturn } from "react-hook-form";

import styles from './styles.module.scss'

interface PaymentMethodButtonProps {
  icon: ReactNode;
  label: string;
  register: UseFormReturn['register'];
}

export function PaymentMethodButton({ icon, label, register }: PaymentMethodButtonProps) {
  return (
    <div className={styles['payment-method-container']}>
      <input
        {...register("paymentMethod")}
        type="radio"
        value={label}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
