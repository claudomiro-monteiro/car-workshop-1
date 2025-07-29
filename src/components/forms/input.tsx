import type { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group flex h-12 items-center gap-2 rounded-xl border border-gray-400 px-4 focus-within:border-gray-50 data-[error=true]:border-red-500"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-50 group-[&:not(:has(input:placeholder-shown))]:text-gray-50 group-data-[error=true]:text-red-500"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {
  name: string
}

export function InputField({ ...props }: InputFieldProps) {
  const { register } = useFormContext()
  return (
    <input
      className="flex-1 bg-transparent text-zinc-50 placeholder-gray-400 outline-0"
      id={props.name}
      {...register(props.name)}
      {...props}
    />
  )
}

interface TextAreaIconProps extends ComponentProps<'span'> {}

export function TextAreaIcon({ ...props }: TextAreaIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-50 group-[&:not(:has(textarea:placeholder-shown))]:text-gray-50 group-data-[error=true]:text-red-500"
      {...props}
    />
  )
}

export function TextAreaRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group flex h-auto items-start gap-2 rounded-xl border border-gray-400 px-4 py-3 focus-within:border-gray-50 data-[error=true]:border-red-500"
      {...props}
    />
  )
}
interface TextAreaFieldProps extends ComponentProps<'textarea'> {
  name: string
}

export function TextAreaField({ ...props }: TextAreaFieldProps) {
  const { register } = useFormContext()
  return (
    <textarea
      className="flex-1 bg-transparent text-zinc-50 placeholder-gray-400 outline-0"
      id={props.name}
      {...register(props.name)}
      {...props}
    />
  )
}
