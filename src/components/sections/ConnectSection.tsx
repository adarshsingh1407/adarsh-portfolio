import { RESUME_DATA } from "@/lib/constants";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { RocketAnimation } from "@/components/animations/RocketAnimation";

export function ConnectSection() {
  return (
    <div className="w-full py-8 bg-gradient-to-br from-background via-background to-muted/20 rounded-3xl">
      <ScrollReveal direction="up" delay={0.1} duration={0.8}>
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-2"
          >
            <RocketAnimation
              style={{ width: 100, height: 100 }}
              className="mx-auto"
            />
          </motion.div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Let&apos;s Build Something
            <span className="text-primary block">Meaningful Together</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Ready to turn your ideas into reality? <br /> I’m here to help you
            create amazing digital experiences.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto px-4">
        {/* Email Card */}
        <ScrollReveal direction="up" delay={0.3} duration={0.8}>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="group cursor-pointer border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-2 text-center">
                <a
                  href={`mailto:${RESUME_DATA.personal.contact.email.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-1">
                    <Image
                      src="/gmail.svg"
                      alt="Gmail"
                      width={80}
                      height={80}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-110 transition-transform duration-300">
                    Email me!
                  </h3>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        {/* WhatsApp Card */}
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="group cursor-pointer border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-2 text-center">
                <a
                  href={RESUME_DATA.personal.contact.whatsapp.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-1">
                    <Image
                      src="/whatsapp.svg"
                      alt="WhatsApp"
                      width={80}
                      height={80}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-110 transition-transform duration-300">
                    Say hi on WhatsApp!
                  </h3>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        {/* Phone Card */}
        <ScrollReveal direction="up" delay={0.5} duration={0.8}>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="group cursor-pointer border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-2 text-center">
                <a
                  href={`tel:${RESUME_DATA.personal.contact.phone.value}`}
                  className="block"
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-1">
                    <Image
                      src="/apple-phone.svg"
                      alt="Phone"
                      width={80}
                      height={80}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-110 transition-transform duration-300">
                    Call me!
                  </h3>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        {/* LinkedIn Card */}
        <ScrollReveal direction="up" delay={0.6} duration={0.8}>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="group cursor-pointer border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-2 text-center">
                <a
                  href={RESUME_DATA.personal.social.linkedin.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-1">
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={80}
                      height={80}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-110 transition-transform duration-300">
                    Connect on LinkedIn!
                  </h3>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}
