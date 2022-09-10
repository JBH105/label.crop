import React from 'react'

export default function cropflipkart() {
    return (
        <div>
            <section
                className="relative z-10 mx-auto mt-20 max-w-3xl px-4 pb-32 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <div className="flex flex-col rounded-2xl bg-white shadow-2xl">
                    <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl  p-5 shadow-lg">
                            <img src="asset/flipkart.png" className="h-16 w-16 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">Flipkart shipping label crop</h3>
                        <p className="mt-4 text-base text-gray-500">Select your flipkart label file below and click on prepare shipping labels and then new cropped shipping labels will be generated automaticly</p>
                        <p className="mt-4 text-base text-gray-500">All lables will be grouped and shorted by sku for easy order prepare.</p>
                        <div className='flex p-4 align-center mb-4 mt-1'>
                            <div className=''>
                                <img src='asset/flipkart.png' className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <div className='ml-6'>
                                <input type="file" />
                            </div>

                        </div>
                        <div>
                            <ul class="grid gap-6 w-full md:grid-cols-2">
                                <li>
                                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                                    <label for="hosting-small" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="w-full text-lg font-semibold">Label Printer</div>
                                            <div class="w-full">Good for small label</div>
                                        </div>
                                        <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                                    <label for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="w-full text-lg font-semibold">A4 Printer</div>
                                            <div class="w-full">Good for large label</div>
                                        </div>
                                        <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </label>
                                </li>
                            </ul></div>
                    </div>

                    <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                        <a href={"#link.href"} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                            Prepare Shipping Labels<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
