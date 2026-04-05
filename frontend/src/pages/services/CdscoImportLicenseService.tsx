import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadPopup } from "@/components/LeadPopup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/seo/SEO";
import ServiceInternalLinks from "@/components/ServiceInternalLinks";

const coreServiceCards = [
	{
		title: "Cosmetic Import License",
		description: "End-to-end COS-2 registration support with ingredient review, label checks, and SUGAM filing assistance.",
		href: "/cosmetic-import-license-india",
	},
	{
		title: "Medical Device Import License",
		description: "MD-14 and MD-15 focused support with classification mapping, technical file review, and compliance strategy.",
		href: "/medical-device-import-license-india",
	},
	{
		title: "CDSCO Drug Registration",
		description: "Drug import route support including pathway planning, dossier readiness, and authority query handling.",
		href: "/cdsco-registration",
	},
];

const iaaCards = [
	{
		title: "IAA for Cosmetics",
		description: "Local accountable representation for foreign cosmetic manufacturers under Indian cosmetic framework.",
		href: "/indian-authorized-agent-for-cosmetics-in-india",
	},
	{
		title: "IAA for Medical Devices",
		description: "CDSCO-facing representation for global medical device manufacturers and import pathways.",
		href: "/indian-authorized-agent-for-medical-devices",
	},
	{
		title: "IAA for Drugs",
		description: "Regulatory representation for foreign pharmaceutical companies including registration and post-market support.",
		href: "/indian-authorized-agent-for-drugs",
	},
];

const processSteps = [
	"Product Classification",
	"Documentation Gap Analysis",
	"Regulatory Strategy Development",
	"Dossier Compilation",
	"SUGAM Portal Filing",
	"CDSCO Query Resolution",
	"Import License Grant",
	"Post-Approval Compliance Advisory",
];

const faqs = [
	{
		question: "What is CDSCO Import License?",
		answer:
			"A CDSCO Import License is a mandatory regulatory approval required to legally import cosmetics, medical devices, or pharmaceutical products into India.",
	},
	{
		question: "Who can apply for CDSCO Import License?",
		answer:
			"Foreign manufacturers and Indian importers can apply through an authorized Indian entity with compliant documentation and filings.",
	},
	{
		question: "How long does CDSCO Import License approval take?",
		answer:
			"Approval generally takes 3 to 6 months depending on product category complexity and documentation quality.",
	},
	{
		question: "Why hire a CDSCO Import License Consultant?",
		answer:
			"A specialist consultant reduces filing errors, improves compliance alignment, and helps avoid repeated deficiency cycles.",
	},
];

const CdscoImportLicenseService = () => {
	const navigate = useNavigate();
	const { toast } = useToast();
	const siteUrl = "https://regacats.in";
	const canonical = `${siteUrl}/cdsco-import-service`;

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "CDSCO Import License",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.phone || !formData.message) {
			toast({
				title: "Missing fields",
				description: "Please fill all required fields.",
				variant: "destructive",
			});
			return;
		}

		try {
			setIsSubmitting(true);
			const response = await fetch("/api/lead?source=sendDeviceMail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			if (!result.success) {
				throw new Error(result.message || "Failed to submit");
			}

			toast({
				title: "Request submitted",
				description: "Our CDSCO team will contact you shortly.",
			});

			setFormData({
				name: "",
				email: "",
				phone: "",
				service: "CDSCO Import License",
				message: "",
			});
		} catch {
			toast({
				title: "Submission failed",
				description: "Please try again in a moment.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<SEO
				title="CDSCO Import License Consultancy in India | Cosmetics |Medical Device"
				description="Full-spectrum CDSCO import license consultancy in India for cosmetics, medical devices, and drugs with structured filing and compliance support."
				canonical={canonical}
				type="website"
			/>
			<TopBar />
			<Navigation onConsultClick={() => navigate("/")} />

			<main className="overflow-x-clip">
				<section className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-cyan-900 to-blue-700 text-white">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_46%)]" />
					<div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
						<div className="grid lg:grid-cols-2 gap-10 items-center">
							<div className="space-y-6">
								<p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
									CDSCO Import License Consultant
								</p>
								<h1 className="text-4xl md:text-5xl font-bold leading-tight">CDSCO Import License Consultant in India</h1>
								<p className="text-cyan-100 text-lg leading-relaxed">
									Full-spectrum support for cosmetics, medical devices, and drug imports with structured filing, faster query closure, and predictable compliance outcomes.
								</p>
							</div>
							<div className="rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm shadow-2xl lg:ml-auto w-full max-w-2xl">
								<img
									src="https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license-1024x683.webp"
									alt="CDSCO Import License Consultant in India"
									className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-contain bg-white p-2 rounded-xl"
									loading="eager"
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="py-14 bg-white">
					<div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
						<Card className="border-cyan-100 shadow-sm">
							<CardHeader>
								<CardTitle className="text-2xl text-cyan-900">What Is a CDSCO Import License?</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{[
										"Mandatory authorization to import regulated cosmetics, medical devices, and pharmaceuticals",
										"Issued under Drugs and Cosmetics Act, Medical Device Rules, and Cosmetic Rules",
										"Required before legal commercialization in India",
										"Prevents customs detention, delayed market entry, and compliance penalties",
									].map((item) => (
										<li key={item} className="flex items-start gap-2 text-slate-700">
											<CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Card className="border-cyan-100 shadow-sm">
							<CardHeader>
								<CardTitle className="text-2xl text-cyan-900">Why Use a Specialist Consultant?</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{[
										"Correct product classification from day one",
										"International document alignment to Indian format",
										"Strategic dossier preparation for smoother review",
										"Lower deficiency cycles and faster responses",
										"Better approval predictability and timeline control",
									].map((item) => (
										<li key={item} className="flex items-start gap-2 text-slate-700">
											<CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				<section className="py-14 bg-cyan-50/50">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
							<h2 className="text-3xl md:text-4xl font-bold text-cyan-950">Core Import Services</h2>
							<p className="text-slate-600">Open the dedicated service pages below.</p>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							{coreServiceCards.map((service) => (
								<Card key={service.title} className="border-cyan-100 shadow-sm hover:shadow-md transition-shadow h-full">
									<CardContent className="pt-6 space-y-3 flex flex-col h-full">
										<h3 className="text-lg font-semibold text-cyan-900">{service.title}</h3>
										<p className="text-sm text-slate-600 flex-1">{service.description}</p>
										<Link
											to={service.href}
											className="inline-flex items-center justify-center rounded-md bg-cyan-900 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800 transition-colors"
										>
											View Service
										</Link>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className="py-14 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
							<h2 className="text-3xl md:text-4xl font-bold text-cyan-950">Indian Authorized Agent (IAA) Services</h2>
							<p className="text-slate-600">Foreign manufacturers generally require compliant local representation to obtain CDSCO approvals.</p>
						</div>
						<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl mx-auto">
							{iaaCards.map((service) => (
								<Card key={service.title} className="border-cyan-100 shadow-sm hover:shadow-md transition-shadow h-full">
									<CardContent className="pt-6 space-y-3 flex flex-col h-full">
										<h3 className="text-lg font-semibold text-cyan-900">{service.title}</h3>
										<p className="text-sm text-slate-600 flex-1">{service.description}</p>
										<Link
											to={service.href}
											className="inline-flex items-center justify-center rounded-md bg-cyan-900 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800 transition-colors"
										>
											View Service
										</Link>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className="py-14 bg-cyan-50/50">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-8">
							<h2 className="text-3xl md:text-4xl font-bold text-cyan-950">Our Structured 8-Step CDSCO Process</h2>
						</div>
						<div className="max-w-4xl mx-auto grid gap-3">
							{processSteps.map((step, index) => (
								<div key={step} className="rounded-lg border border-cyan-100 bg-white px-5 py-4 flex items-start gap-3">
									<span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-900 text-white text-sm font-bold shrink-0">
										{index + 1}
									</span>
									<p className="text-slate-700">{step}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-14 bg-cyan-950 text-white">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-8">
							<h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
						</div>
						<div className="max-w-4xl mx-auto grid gap-3">
							{faqs.map((faq, index) => {
								const isOpen = openFaqIndex === index;
								return (
									<div key={faq.question} className="rounded-lg border border-white/20 bg-white/10 px-5 py-4">
										<button
											type="button"
											onClick={() => setOpenFaqIndex(isOpen ? null : index)}
											className="w-full flex items-center justify-between gap-4 text-left font-semibold"
											aria-expanded={isOpen}
										>
											<span>{faq.question}</span>
											{isOpen ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
										</button>
										{isOpen && <p className="mt-3 text-cyan-100">{faq.answer}</p>}
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="py-16 bg-cyan-950 text-white">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
							<h2 className="text-3xl md:text-4xl font-bold">Start Your CDSCO Import License Process</h2>
							<p className="text-cyan-100">Share your product category and import objective to receive a practical approval roadmap.</p>
						</div>

						<Card className="max-w-3xl mx-auto border-white/20 bg-white text-slate-900">
							<CardContent className="pt-6">
								<form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
									<Input
										placeholder="Full name *"
										value={formData.name}
										onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
										required
									/>
									<Input
										type="email"
										placeholder="Email address *"
										value={formData.email}
										onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
										required
									/>
									<Input
										type="tel"
										placeholder="Phone number *"
										value={formData.phone}
										onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
										required
									/>
									<Select
										value={formData.service}
										onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select service" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="CDSCO Import License">CDSCO Import License</SelectItem>
											<SelectItem value="Cosmetic Import License">Cosmetic Import License</SelectItem>
											<SelectItem value="Medical Device Import License">Medical Device Import License</SelectItem>
											<SelectItem value="CDSCO Drug Registration">CDSCO Drug Registration</SelectItem>
											<SelectItem value="Indian Authorized Agent Services">Indian Authorized Agent Services</SelectItem>
										</SelectContent>
									</Select>
									<div className="md:col-span-2">
										<Textarea
											placeholder="Share your product details and requirement *"
											value={formData.message}
											onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
											rows={5}
											required
										/>
									</div>
									<div className="md:col-span-2">
										<Button type="submit" className="w-full bg-cyan-900 hover:bg-cyan-800" disabled={isSubmitting}>
											{isSubmitting ? "Submitting..." : "Get Consultation"}
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>

			<ServiceInternalLinks />

			<Footer />
			<WhatsAppButton />
			<LeadPopup />
		</div>
	);
};

export default CdscoImportLicenseService;
