// Tipo para los diferentes tipos de entrada del formulario
export type FieldType = 'text' | 'email' | 'password' | 'number' | 'select' | 'custom'

// Tipo base para un campo del formulario
export interface FormField {
  name: string
  type: FieldType
  label: string
  value: string | number | string[]
  required: boolean
}

// Tipo para los campos select
export interface SelectField extends FormField {
  type: 'select'
  options: { value: string | number; label: string }[]
}

// Tipo para los datos del formulario dinámico
export interface DynamicFormData {
  fields: (FormField | SelectField)[]
}

// Interfaz para las propiedades del componente del formulario
export interface DynamicFormProps {
  formData: DynamicFormData
  onSubmit: (data: Record<string, string | number | string[]>) => void
}

export const exampleFormData: DynamicFormData = {
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      value: '',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      label: 'Correo Electrónico',
      value: '',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      label: 'Contraseña',
      value: '',
      required: true
    },
    {
      name: 'age',
      type: 'number',
      label: 'Edad',
      value: 0,
      required: true
    },
    {
      name: 'gender',
      type: 'select',
      label: 'Género',
      value: 1,
      required: false,
      options: [
        {
          value: 1,
          label: 'Hombre'
        },
        {
          value: 2,
          label: 'Mujer'
        }
      ]
    }
  ]
}
