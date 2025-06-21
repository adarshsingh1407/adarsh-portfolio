import { PRIMARY_TECHNOLOGIES } from "@/lib/constants";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animations";

export function TopSkillsSection() {
  return (
    <div className="w-full py-12">
      <ScrollReveal
        direction="up"
        delay={0.1}
        duration={0.6}
        viewportMargin="-50px"
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          My Top Skills
        </h2>
        <p className="text-muted-foreground text-lg">
          Technologies I specialize in and love working with
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {PRIMARY_TECHNOLOGIES.map((tech, index) => (
          <ScrollReveal
            key={tech.name}
            direction="up"
            delay={index * 0.1}
            duration={0.6}
            distance={30}
            scale={0.9}
            viewportMargin="-50px"
          >
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20 max-w-36 mx-auto">
              <CardContent className="text-center">
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <motion.div
                      className="w-10 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-1 group-hover:w-14 transition-all duration-300"
                      whileHover={{ scaleX: 1.3 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
