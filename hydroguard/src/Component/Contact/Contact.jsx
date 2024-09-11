import React, { useState } from 'react';

const heading = 'Contact Me';

const submitForm = async (formData, setFormSubmitted) => {
    try {
        const formDatab = new FormData();
        for (const key in formData) {
            formDatab.append(key, formData[key]);
        }

        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbx3_bXDVgrZrMW3JIJ_Fe8NfWvWbEhc-llEFU5cjY3bwSOZBi8KZL0bDclt4TGSZp0/exec',
            {
                method: 'POST',
                body: formDatab,
            }
        );

        if (response.ok) {
            console.log('Form submitted successfully');
            setFormSubmitted(true);
        } else {
            console.error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        setFormSubmitted(true);
    }
};

function Contact(props) {
    const [formData, setFormData] = useState({ name: '', number: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitForm(formData, setFormSubmitted);
            setFormData({ name: '', number: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-amber-50">
            <div id="Contact" className="mx-auto flex flex-col min-h-screen justify-center items-center">
                <h1 className="text-3xl font-bold leading-tight text-yellow-900 text-center">{heading}</h1>

                <form onSubmit={handleSubmit} className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                            placeholder="Number"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                            rows="4"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`bg-amber-950 text-amber-50 mx-auto mt-4 p-2 w-48 ${formSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={formSubmitted}
                    >
                        {formSubmitted ? 'Sent!' : 'Send'}
                    </button>

                    {formSubmitted && (
                        <div className="text-sm font-bold text-yellow-900 text-center mt-4">
                            Message sent successfully. I look forward to meeting you!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Contact;