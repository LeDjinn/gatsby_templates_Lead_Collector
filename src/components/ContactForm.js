import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export default function ContactUs() {
  const form = useRef();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = (serviceID, templateId, UserId, variables) => {
    emailjs.sendForm(serviceID, templateId, form.current, UserId, variables).then(
      result => {
        console.log('Email successfully sent!', result);
      },
      error => {
        console.log(
          'There has been an error.  Here some thoughts on the error that occured:',
          error
        );
      }
    );
  };

  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const UserId = 'user_fnhtgxsrhzg5VrN2gsEgH';
    const templateId = 'template_lw40g3b';
    const serviceID = 'gmail';
    sendEmail(serviceID, templateId, UserId, form.current, {
      name: data.name,
      message: data.message,
      phone: data.phone,
      email: data.email,
      service: data.service,
    });
    reset();
  };

  const mapStyle = {
    border: 'O',
    filer: 'filter: grayscale(1) contrast(1.2) opacity(0.4)',
  };

  return (
    <div>
      <section className=" bg-gray-100 rounded-lg lg shadow-lg body-font relative">
        <h1 className="text-center text-purple-700 text-3xl font-bold">
          Nous contacter - Otos Lab agence web
        </h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap text-gray-600">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.125288071656!2d2.28653241567632!3d48.91300517929293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f669f572567%3A0x9d8ddc1b3d5df456!2s22%20Rue%20du%20R%C3%A9v%C3%A9rend%20P%C3%A8re%20Christian%20Gilbert%2C%2092600%20Asni%C3%A8res-sur-Seine!5e0!3m2!1sfr!2sfr!4v1634572268625!5m2!1sfr!2sfr"
              title="Otos Lab - Notre adresse"
              width="100%"
              height="100%"
              style={mapStyle}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
            <div className="bg-white relative flex flex-wrap items-center justify-center py-6 rounded shadow-md mt-40">
              <div className="px-5">
                <div className="flex items-center justify-center ">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    Email
                  </h2>
                  <a href="mailto:contact@otos-lab.fr" className="text-purple-500 leading-relaxed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-800 animate-pulse"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
                <a href="mailto:contact@otos-lab.fr" className="text-purple-500 leading-relaxed">
                  contact@otos-lab.fr
                </a>
              </div>
              <div className=" px-5 lg:mt-0">
                <div className="flex items-center justify-center ">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    Téléphone
                  </h2>
                  <a href="tel:+33674979756" className="text-purple-500 leading-relaxed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-800 animate-pulse"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <a href="tel:+33674979756" className="text-purple-500 leading-relaxed">
                  +33(0)6 74 97 97 56
                </a>
              </div>
            </div>
          </div>
          <form
            className="lg:w-1/3 md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              N'hésitez pas à nous écrire!
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Nous vous répondrons dans un délai maximum de 48h
            </p>
            <div className="relative mb-4">
              <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label className="leading-7 text-sm text-gray-600">Nom</label>
              <input
                name="name"
                placeholder="Nom / Raison Sociale"
                {...register('name', { required: true, maxLength: 20 })}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name?.type === 'required' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci de renseigner votre nom</p>
                  </div>
                </div>
              )}
              {errors.name?.type === 'maxLength' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci de mettre moins de 20 caractères </p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email?.type === 'required' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci de renseigner votre email</p>
                  </div>
                </div>
              )}
              {errors.email?.type === 'pattern' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Erreur</div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Adresse email invalide</p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label className="leading-7 text-sm text-gray-600">Numéro de téléphone</label>
              <input
                name="phone"
                placeholder="Votre numéro de téléphone"
                {...register('phone', {
                  required: true,
                  pattern: /^-?[0-9]\d*\.?\d*$/i,
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.phone?.type === 'required' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci de renseigner votre numéro de téléphone</p>
                  </div>
                </div>
              )}
              {errors.phone?.type === 'pattern' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Numéro de téléphone invalide</p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label className="leading-7 text-sm text-gray-600">Service</label>
              <select
                name="service"
                {...register('service', {
                  required: true,
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="" selected disabled hidden>
                  Choisir un service...
                </option>
                <option value="Application Web">Application Web</option>
                <option value="Site E-commerce">Site E-commerce</option>
                <option value="Site Vitrine">Site Vitrine</option>
                <option value="Blog">Blog</option>
                <option value="Porfolio">Portfolio</option>
              </select>
              {errors.service?.type === 'required' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci de choisir le service qui vous intéresse</p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                placeholder="Votre message"
                {...register('message', {
                  required: true,
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {errors.message?.type === 'required' && (
                <div role="alert" className="mt-4">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2">Erreur</span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Merci d'écrire votre message</p>
                  </div>
                </div>
              )}
            </div>
            <input
              value="Envoyez"
              type="submit"
              className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg cursor-pointer"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
