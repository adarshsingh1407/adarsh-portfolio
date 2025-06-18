import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { RESUME_DATA } from "@/lib/constants";
import Image from "next/image";

export function CertificationsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <Card className="w-full">
        <CardContent>
          <div className="flex flex-col gap-4">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className={
                  idx !== RESUME_DATA.certifications.length - 1
                    ? "pb-4 border-b border-muted"
                    : ""
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain bg-white"
                      />
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
                  <div className="text-xs text-muted-foreground ml-4 whitespace-nowrap">
                    {cert.validity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
