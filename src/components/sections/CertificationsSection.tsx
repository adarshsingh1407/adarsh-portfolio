import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RESUME_DATA } from "@/lib/constants";
import Image from "next/image";

export function CertificationsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {RESUME_DATA.certifications.map((cert, idx) => (
          <Card key={idx} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="relative w-20 h-16">
                    <Image src={cert.image} alt={cert.title} fill />
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground ml-4">
                  {cert.validity}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
