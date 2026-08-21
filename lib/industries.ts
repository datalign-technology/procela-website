export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  metaDescription: string;
  regs: string[];
  h1: string;
  lead: string;
  challenges: { title: string; body: string }[];
  helps: { title: string; body: string }[];
  valueHeading: string;
  outcomes: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "utilities-energy",
    name: "Utilities & Energy",
    shortName: "utilities",
    blurb:
      "Grid, meter, SCADA and customer data across OT and IT — governed in place, under NERC CIP and rate-case scrutiny.",
    metaDescription:
      "Data governance for utilities and energy: catalog OT and IT systems, trace meter-to-bill lineage, and run metadata-only inside the control network — no data leaves the OT environment.",
    regs: ["NERC CIP", "FERC", "State PUC rate cases"],
    h1: "Govern grid and customer data across OT and IT — without moving it.",
    lead: "From SCADA and historians to MDMS, EAM and billing, Procela maps your data estate and its owners, running metadata-only inside the networks where that data already lives.",
    challenges: [
      { title: "OT and IT don't talk", body: "Grid telemetry, work management and customer systems are governed by different teams with no shared map." },
      { title: "Rate cases demand proof", body: "Regulators want to see where every number came from — reconstructed by hand today." },
      { title: "OT can't reach the cloud", body: "Control-network data can't be shipped off to a SaaS catalog to be governed." },
    ],
    helps: [
      { title: "Catalog OT + IT together", body: "SCADA, MDMS, EAM and billing in one model, each with a named owner and steward." },
      { title: "Meter-to-bill lineage", body: "Trace determinants from field reads to invoices, so rate cases and outage reviews start from fact." },
      { title: "Runs inside the control network", body: "Metadata-only edge agents read systems in place — nothing leaves the OT environment." },
    ],
    valueHeading: "Audit-ready evidence, and one source of truth for critical data.",
    outcomes: [
      "Regulator-ready lineage and ownership",
      "No data leaves the OT boundary",
      "Grid & customer data always has an owner",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    shortName: "financial services",
    blurb:
      "Risk, finance and customer data with demonstrable BCBS 239 lineage — kept entirely inside your perimeter.",
    metaDescription:
      "Data governance for financial services: end-to-end lineage for BCBS 239 and regulatory reporting, ownership by mandate, and on-prem or air-gapped deployment so sensitive data never leaves your perimeter.",
    regs: ["BCBS 239", "GDPR", "Model risk governance"],
    h1: "Demonstrable lineage and ownership — kept inside your perimeter.",
    lead: "Procela gives risk, finance and customer data a governed catalog with end-to-end lineage and clear accountability, deployed on-prem or air-gapped so nothing sensitive leaves your environment.",
    challenges: [
      { title: "Reporting under scrutiny", body: "BCBS 239 expects you to trace every risk figure to its source, on demand." },
      { title: "Ownership is fuzzy", body: "Who owns a given data element across risk, finance and ops is rarely written down." },
      { title: "Data can't leave", body: "Sending sensitive financial data to a vendor cloud to govern it is a non-starter." },
    ],
    helps: [
      { title: "Lineage for reporting", body: "Trace every figure in a risk or regulatory report back to its origin." },
      { title: "Accountability by mandate", body: "Owners and stewards aligned to your DAMA-based governance framework." },
      { title: "On-prem or air-gapped", body: "Deploy entirely within your perimeter; metadata never leaves it." },
    ],
    valueHeading: "BCBS 239 lineage and accountability, without the vendor cloud.",
    outcomes: [
      "Traceable figures for every report",
      "A named owner for every data element",
      "Sensitive data stays in your perimeter",
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    shortName: "healthcare",
    blurb:
      "PHI, clinical and research data classified and governed air-gapped — the catalog never touches a record.",
    metaDescription:
      "Data governance for healthcare and life sciences: classify PHI, track data health, and run air-gapped and metadata-only under HIPAA and GxP — the catalog never touches a patient record.",
    regs: ["HIPAA", "GxP", "21 CFR Part 11"],
    h1: "Govern PHI and research data with zero record exposure.",
    lead: "Procela catalogs clinical, operational and research data, classifies its sensitivity, and runs air-gapped and metadata-only — so the catalog never touches a single patient record.",
    challenges: [
      { title: "PHI can't be exposed", body: "Any tool that reads records to catalog them is itself a compliance risk." },
      { title: "Sensitivity is tribal knowledge", body: "Which fields are PHI or regulated lives in people's heads, not a system." },
      { title: "Audits are manual", body: "HIPAA and GxP reviews mean reconstructing who touched what, by hand." },
    ],
    helps: [
      { title: "Metadata only, air-gapped", body: "Agents catalog structure and ownership in place — never the records themselves." },
      { title: "Sensitivity & health scores", body: "Classify PHI and track data health on every asset." },
      { title: "Audit trail on tap", body: "A complete, exportable history for HIPAA and GxP reviews." },
    ],
    valueHeading: "Governance and evidence, with zero PHI exposure.",
    outcomes: [
      "PHI never leaves its system",
      "Sensitivity classified, not assumed",
      "Audit evidence ready on demand",
    ],
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    shortName: "government",
    blurb:
      "Mission and citizen data governed inside accredited, sovereign or classified boundaries.",
    metaDescription:
      "Data governance for government and public sector: fully air-gapped deployment for classified or sovereign environments, role-based access, and metadata that stays within the accredited boundary.",
    regs: ["FISMA", "Data sovereignty", "Classified networks"],
    h1: "A governed catalog that meets sovereignty and air-gap mandates.",
    lead: "Procela deploys fully within accredited, sovereign or classified boundaries, giving mission and citizen data clear ownership and lineage with no outbound dependency.",
    challenges: [
      { title: "The boundary is the point", body: "Sovereignty and classification rules dictate where governance can even run." },
      { title: "Access must match clearance", body: "Not everyone should see every asset — or its details." },
      { title: "No outbound dependency", body: "Air-gapped and classified networks can't call out to a SaaS service." },
    ],
    helps: [
      { title: "Fully air-gapped", body: "Runs inside classified or sovereign environments with no external calls." },
      { title: "Role-based access", body: "Owners, stewards and admins see only what their role permits." },
      { title: "Metadata stays in-boundary", body: "Agents keep everything within the accredited perimeter." },
    ],
    valueHeading: "Sovereignty and air-gap compliance, from day one.",
    outcomes: [
      "Runs inside the accredited boundary",
      "Access matched to role and clearance",
      "No outbound dependency, ever",
    ],
  },
  {
    slug: "manufacturing-critical-infrastructure",
    name: "Manufacturing & Critical Infrastructure",
    shortName: "manufacturing",
    blurb:
      "Plant, historian and supply-chain data across OT/IT — accountability without opening a path off-network.",
    metaDescription:
      "Data governance for manufacturing and critical infrastructure: catalog plant systems and historians, trace OT/IT lineage to protect process IP, and deploy on-prem or segmented — without opening a path off-network.",
    regs: ["IEC 62443", "OT/IT convergence", "IP protection"],
    h1: "Visibility across the plant floor — without opening a path off-network.",
    lead: "Procela catalogs plant systems, historians and supply-chain data, tracing lineage across OT and IT while keeping operations isolated and process IP protected.",
    challenges: [
      { title: "OT/IT convergence", body: "Plant, historian and enterprise data increasingly mix, with no shared governance." },
      { title: "Process IP at risk", body: "Quality and process data is competitive IP that can't be allowed to leak." },
      { title: "Operations stay off-network", body: "Critical-infrastructure segments must remain isolated." },
    ],
    helps: [
      { title: "Catalog the plant estate", body: "Plant systems, historians and supply-chain data, each with clear ownership." },
      { title: "OT/IT lineage", body: "Trace data across the divide to protect process IP and quality." },
      { title: "Isolated deployment", body: "On-prem or segmented for critical-infrastructure networks." },
    ],
    valueHeading: "Accountability across the plant, without exposure.",
    outcomes: [
      "One map across OT and IT",
      "Process IP stays protected",
      "Operations remain isolated",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
