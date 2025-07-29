'use client'

import { ErrorMessage } from '@/components/forms/errormessage'
import {
  InputField,
  InputIcon,
  InputRoot,
  TextAreaField,
  TextAreaIcon,
  TextAreaRoot,
} from '@/components/forms/input'
import { phoneNumberMask } from '@/utils/phone'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  EnvelopeIcon,
  InstagramLogoIcon,
  PaperPlaneRightIcon,
  Phone,
  PhoneCallIcon,
  UserCircleIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { z } from 'zod'

const createFormSchema = z.object({
  name: z
    .string()
    .nonempty('Digite seu nome.')
    .min(3, 'Digite um nome válido.'),
  email: z
    .string()
    .nonempty('Digite seu email.')
    .email('Digite um email válido.'),
  cellphone: z
    .string()
    .nonempty('Digite seu celular.')
    .min(15, 'Digite um celular válido.'),
  message: z
    .string()
    .nonempty('Deixe sua mensagem.')
    .min(10, 'Sua mensagem deve ter no mínimo 10 caracteres.'),
})

type CreateFormData = z.infer<typeof createFormSchema>

export default function Contact() {
  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const {
    handleSubmit,
    setValue,
    watch,
    // reset,
    formState: { errors },
  } = createForm

  const phoneValue = watch('cellphone')

  useEffect(() => {
    setValue('cellphone', phoneNumberMask(phoneValue))
  }, [phoneValue, setValue])

  async function newContact(data: CreateFormData) {
    console.log(JSON.stringify(data, null, 2))
    // setSpinner(true)

    // try {
    //   await api.post('/send', data)
    //   toast.success('Mensagem enviada com sucesso!')
    //   setSpinner(false)

    //   reset()
    // } catch (error) {
    //   toast.error('Não foi possivel enviar sua mensagem, tente mais tarde.')
    //   console.log(error)
    //   setSpinner(false)
    // }
  }

  return (
    <section
      id="contactus"
      className="mt-8 scroll-mt-2 rounded-md bg-zinc-50 p-4 sm:p-8"
    >
      <h1 className="font-heading font-semibold text-2xl">Contato</h1>

      <div className="mt-8 grid items-center justify-items-center gap-4 sm:grid-cols-2">
        <div className="flex w-full flex-col items-center space-y-4 font-semibold text-base text-zinc-800 sm:text-xl">
          <Image
            src="/logo.jpg"
            alt="logotipo"
            width={250}
            height={100}
            className="rounded-full"
          />
          {/* <div className=""> */}
          <Link
            href="tel:1231279001"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <PhoneCallIcon className="size-6 sm:size-8" />
            (12) 3127-9001
          </Link>
          <Link
            href="https://wa.me/5512991948949"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <WhatsappLogoIcon className="size-6 sm:size-8" /> (12) 99194-8949
          </Link>
          <Link
            href="https://instagram.com/automecanica2m"
            className="flex items-center gap-2 duration-200 hover:text-zinc-950"
          >
            <InstagramLogoIcon className="size-6 sm:size-8" />
            automecanica2m
          </Link>
          {/* </div> */}
        </div>

        <div className="flex w-full flex-col justify-center rounded-lg bg-zinc-900 p-4 sm:p-8">
          <FormProvider {...createForm}>
            <form
              id="sendcontact"
              onSubmit={handleSubmit(newContact)}
              className="flex w-full flex-col gap-3"
            >
              <InputRoot error={!!errors?.name}>
                <InputIcon>
                  <UserCircleIcon className="size-5 sm:size-6" />
                </InputIcon>
                <InputField
                  type="text"
                  name="name"
                  placeholder="Digite seu nome."
                />
              </InputRoot>
              <ErrorMessage field="name" />

              <InputRoot error={!!errors?.email}>
                <InputIcon>
                  <EnvelopeIcon className="size-5 sm:size-6" />
                </InputIcon>
                <InputField
                  type="text"
                  name="email"
                  placeholder="Digite seu email."
                />
              </InputRoot>
              <ErrorMessage field="email" />

              <InputRoot error={!!errors?.cellphone}>
                <InputIcon>
                  <PhoneCallIcon className="size-5 sm:size-6" />
                </InputIcon>
                <InputField
                  type="cellphone"
                  name="cellphone"
                  placeholder="(xx) 9 9999-9999"
                />
              </InputRoot>
              <ErrorMessage field="cellphone" />

              <TextAreaRoot error={!!errors?.message}>
                <TextAreaIcon>
                  <EnvelopeIcon className="size-5 sm:size-6" />
                </TextAreaIcon>
                <TextAreaField
                  rows={5}
                  name="message"
                  placeholder="Digite sua mensagem."
                />
              </TextAreaRoot>
              <ErrorMessage field="message" />
            </form>
            <button
              type="submit"
              form="sendcontact"
              className="mt-8 flex w-full cursor-pointer justify-center gap-2 rounded-md bg-zinc-100 py-2 font-semibold text-zinc-800 hover:bg-zinc-700 hover:text-zinc-50 hover:duration-100 sm:w-36 sm:py-2.5 md:w-40"
            >
              {/* {!spinner ? ( */}
              {/* <> */}
              <PaperPlaneRightIcon className="size-5 sm:size-6" />
              Enviar
              {/* </> */}
              {/* ) : ( */}
              {/* <Loader className="animate-spin text-green-700" /> */}
              {/* )} */}
            </button>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
