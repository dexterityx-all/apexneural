import { motion } from "framer-motion";

const clients = [
  { name: "SecuAgile", logo: "/images/clients/secuagile.png" },
  { name: "GlobalSAP Israel", logo: "/images/clients/globalsap.png" },
  { name: "PayCraft", logo: "/images/clients/paycraft.png" },
  { name: "Risun", logo: "/images/clients/risun.png" },
  { name: "MobileFirst", logo: "/images/clients/mobilefirst.jpg" },
  { name: "Kastech", logo: "/images/clients/kastech.png" },
  { name: "ABSYZ / TurningCloud", logo: "/images/clients/absyz.jpg" },
];

export function ClientLogosSection() {
  return (
    <section className="py-16 bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-4">
            Some of Our <span className="italic text-primary">Initial Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enterprise organizations that trust ApexNeural to deliver AI-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
