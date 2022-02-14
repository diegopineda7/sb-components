/// <reference types="react" />
import './customLabel.css';
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
       * Capitalizar el mensaje
       */
    allCaps?: boolean;
    /**
       * Color del mensaje
       */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
       * Color personalizado del mensaje
       */
    fontColor?: string;
    /**
       * Color pde fondo
       */
    backgroundColor?: string;
}
export declare const CustomLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
export default CustomLabel;
