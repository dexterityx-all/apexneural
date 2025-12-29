import { motion } from "framer-motion";

const integrations = [
  { name: "Salesforce", logo: "/images/integrations/salesforce.png" },
  { name: "SAP", logo: "/images/integrations/sap.png" },
  { name: "Google", logo: "/images/integrations/google.jpg" },
  { name: "Microsoft", logo: "/images/integrations/microsoft.jpg" },
  { name: "Azure", logo: "/images/integrations/azure.png" },
  { name: "AWS", logo: "/images/integrations/aws.png" },
  { name: "PeopleSoft", logo: "/images/integrations/peoplesoft.jpg" },
  { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
  { name: "Zapier", logo: "/images/integrations/zapier.jpg" },
  { name: "Zendesk", logo: "/images/integrations/zendesk.jpg" },
  { name: "Workday", logo: "/images/integrations/workday.jpg" },
  { name: "Oracle", logo: "/images/integrations/oracle.jpg" },
  { name: "Jira", logo: "/images/integrations/jira.jpg" },
  { name: "Slack", logo: "/images/integrations/slack.png" },
  { name: "Microsoft Teams", logo: "/images/integrations/teams.jpg" },
  { name: "Zoom", logo: "/images/integrations/zoom.jpg" },
  { name: "SharePoint", logo: "/images/integrations/sharepoint.jpg" },
];

export function IntegrationsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Seamless Connectivity
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-4">
            Integration <span className="italic text-primary">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect with the enterprise systems you already use. Our solutions integrate seamlessly with industry-leading platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group aspect-square"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                title={integration.name}
                className="max-h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
