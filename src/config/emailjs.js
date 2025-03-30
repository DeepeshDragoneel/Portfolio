// EmailJS Configuration
// Replace these with your actual EmailJS credentials
// You can get these credentials by signing up at https://www.emailjs.com/

const emailjsConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

export default emailjsConfig;
