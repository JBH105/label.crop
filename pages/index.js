import Navbar from '../components/Navbar'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'
const supportLinks = [
  {
    name: 'Flipkart',
    href: '/cropflipkart',
    description:
      'Fast easy and automatic tool to prepare Flipkart shipping labels in just one click.',
    icon: 'asset/flipkart.png',
  },
  {
    name: 'Meesho',
    href: '/cropmeesho',
    description:
      'Fast easy and automatic tool to prepare meesho shipping labels in just one click.',
    icon: 'asset/Meesho.png',
  },
  {
    name: 'Amazon',
    href: '/cropamazon',
    description:
      'We are working on a fast easy and automatic tool to prepare amazon shipping labels which does the job in just one click.',
    icon: 'asset/amazon.png',
  },
]

const support = [
  {
    name: 'Whatsapp-9040150016',
    href: '/cropflipkart',
    description:
      'Fast easy and automatic tool to prepare Flipkart shipping labels in just one click.',
    icon: 'asset/57e49e7b-e7bb-476f-b6d0-8c2f0da337d5.jpeg',
  },
  {
    name: 'Whatsapp-8486645257',
    href: '/cropmeesho',
    description:
      'Fast easy and automatic tool to prepare meesho shipping labels in just one click.',
    icon: 'asset/6ede32bc-3d59-4fba-a3ed-0dab891eb7f8.jpeg',
  },
  {
    name: 'Whatsapp-814445241',
    href: '/cropamazon',
    description:
      'We are working on a fast easy and automatic tool to prepare amazon shipping labels which does the job in just one click.',
    icon: 'asset/f1ac05fb-ce24-4d75-af59-17c625348d7f (1).jpeg',
  },
]
export default function Home() {
  return (
    <div>
      <div className='h-[50%] bg-slate-50	'>
        <div className='container mx-auto px-8'>
          <div className='pt-16 items-center grid grid-cols-1 gap-10 sm:grid-cols-2'>
            <div>
              <h1 className='text-[#50d71e]'>SMART{" "}
                <span className='text-blue-600'>TOOLS FOR</span>
                {" "}SMART {" "} <span className='text-blue-600'>
                  BUSINESSES LIKE
                </span> {" "} YOU</h1>

              <span>A fleet of ai based smart tools for your daily tasks which are essential to running the business.</span>
            </div>

            <div>
              <div className='flex justify-center'>
                <img className='h-[350px]' src='asset/tools.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <section
          className="relative z-10 mx-auto -mt-4 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >

          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl  p-5 shadow-lg">
                    <img src={link.icon} className="h-16 w-16 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Crop Shipping Label<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px] grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {support.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl  p-5 shadow-lg">
                    <img src={link.icon} className="h-16 w-16 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Crop Shipping Label<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>

    </div>
  )
}
