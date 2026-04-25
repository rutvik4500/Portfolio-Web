import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 overflow-hidden">


            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
             <span className="text-transparent text-4xl font-bold bg-clip-text bg-linear-to-l from-red-400 to-green-400">Contact US </span>
          
            <motion.div
              className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

    {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 justify-center items-center text-center md:text-left"> */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 justify-center text-center md:text-left">

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
    className="space-y-6"
  >
    <h3 className="text-2xl  font-semibold text-cyan-400">
      Get in Touch
    </h3>

    <p className="text-gray-400">
      I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
    </p>

    <div className="space-y-4">

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <Mail className="text-cyan-400" />
        <span>rutvikparmar4500@email.com</span>
      </div>

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <Phone className="text-purple-400" />
        <span>+91 9824500654</span>
      </div>

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <MapPin className="text-pink-400" />
        <span>Ahmedabad, Gujarat, India</span>
      </div>

    </div>
  </motion.div>

</div>

     

    </section>
  );
};

export default Contact;