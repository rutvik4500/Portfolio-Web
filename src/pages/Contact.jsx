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

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">
            Get in Touch
          </h3>

          <p className="text-gray-400">
           I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
          </p>

          {/* Info */}
          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span>rutvikparmar4500@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-400" />
              <span>+91 9824500654</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-pink-400" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

          </div>
        </motion.div>

      
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 
          p-6 rounded-2xl space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 
            focus:outline-none focus:border-cyan-400 transition duration-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 
            focus:outline-none focus:border-purple-400 transition duration-300"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 
            focus:outline-none focus:border-pink-400 transition duration-300"
          ></textarea>

          <button
            type="submit"
         
            className="w-full border rounded-2xl py-4 hover:bg-blue-300 hover:cursor-pointer hover:transition duration-150  hover:font-bold hover:text-black"
          >
            Send Message 
          </button>

        </motion.form>
      </div>

     

    </section>
  );
};

export default Contact;