"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">About YOBITECH</h2>
            <p className="text-muted-foreground mb-6">
              YOBITECH SERVICES PRIVATE LIMITED is a leading technology company
              specializing in enterprise solutions and consumer services. With
              innovation at our core, we leverage cutting-edge AI technology to
              transform businesses and create value.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm">CIN: U66190KA2023PTC171906</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0557843010397!2d77.63773597573901!3d12.971742987332067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16c3f43859b5%3A0x5f9c7a51c8e5b8a0!2s80%20Feet%20Rd%2C%20HAL%203rd%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1708440772696!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
