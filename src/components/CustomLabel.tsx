import './customLabel.css'

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
     * Capitalizar el mensaje
     */
  allCaps?: boolean
  /**
     * Color del mensaje
     */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
     * Color personalizado del mensaje
     */
  fontColor?: string
  /**
     * Color pde fondo
     */
  backgroundColor?: string
}

export const CustomLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'trasnaprent'
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default CustomLabel
