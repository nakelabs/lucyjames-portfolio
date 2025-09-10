import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Building, Users, Target, TrendingUp, Lightbulb, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";

const responsibilities = [
	{
		icon: Target,
		title: "Strategic Planning",
		description:
			"Effectively oversee budgeting and resource allocation, ensuring financial stability and growth.",
	},
	{
		icon: Users,
		title: "Team Leadership",
		description:
			"Foster a positive and inclusive organizational culture, aligning team efforts with the company’s core values.",
	},
	{
		icon: TrendingUp,
		title: "Performance Optimization",
		description:
			"Recruit, develop, and retain high-performing teams, contributing to the organization’s overall success.",
	},
	{
		icon: Lightbulb,
		title: "Innovation Management",
		description:
			"Identify and mitigate potential risks, ensuring the organization’s long-term sustainability.",
	},
	{
		icon: Globe,
		title: "Stakeholder Relations",
		description:
			"Develop and maintain strong relationships with key stakeholders, including partners, investors, and the public, leading to enhanced collaboration and support.",
	},
	{
		icon: Building,
		title: "Organizational Development",
		description:
			"Represent the organization in public forums, media, and high-profile events, strengthening its public image and reputation.",
	},
];

export function PPDCSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	const cardVariants = {
		hidden: { y: 20, opacity: 0, scale: 0.95 },
		visible: { y: 0, opacity: 1, scale: 1 },
	};

	const statsVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: { scale: 1, opacity: 1 },
	};

	return (
		<motion.section
			ref={sectionRef}
			id="ppdc"
			className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden"
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
		>
			{/* Modern Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-2xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.7, 0.4],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Clean Section Header */}
				<motion.div
					className="text-center mb-20"
					variants={itemVariants}
					transition={{ duration: 0.8 }}
				>
					<motion.div className="inline-block mb-6">
						<span className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary text-sm font-semibold">
							🏢 Professional Excellence
						</span>
					</motion.div>

					<motion.h2
						className="text-5xl md:text-6xl font-bold mb-8"
						variants={itemVariants}
					>
						Leadership at{" "}
						<span className="bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent">
							PPDC
						</span>
					</motion.h2>

					<motion.p
						className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
						variants={itemVariants}
					>
						Driving transformational change and strategic excellence through
						visionary leadership and innovative solutions.
					</motion.p>
				</motion.div>

				{/* Modern Content Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Visual Element */}
					<motion.div
						className="relative"
						variants={itemVariants}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<motion.div
							className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							{}
							<div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
								<img
									src="/frame11.png" // Put your PPDC image here
									alt="Lucy James Abaji at PPDC"
									className="w-full h-full object-cover"
								/>

								{/* Optional overlay with gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 via-transparent to-primary/20" />

								{/* Optional text overlay */}
								<div className="absolute bottom-4 left-4 text-white z-10">
									<h3 className="text-xl font-bold">PPDC Leadership</h3>
									<p className="text-sm opacity-90">Excellence in Action</p>
								</div>
							</div>

							{/* Keep the floating decorative elements */}
							<motion.div
								className="absolute -top-3 -right-3 w-6 h-6 bg-accent-gold rounded-full"
								animate={{
									scale: [1, 1.3, 1],
									rotate: [0, 180, 360],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary rounded-full"
								animate={{
									y: [0, -8, 0],
									scale: [1, 1.2, 1],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
						</motion.div>
					</motion.div>

					{/* Content Side */}
					<motion.div
						className="space-y-8"
						variants={itemVariants}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						{/* Impact Card */}
						<motion.div
							className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8 shadow-xl"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
								Current Role & Impact
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-6">
								As the Chief Executive Officer of PPDC, She is the entrepreneurial leader responsible for fostering strategic collaborations with public and private sector donors, including bilateral, multi-lateral agencies, and foundations. In alignment with PPDC's strategy and programmatic vision, she spearheads the creation of new businesses and supervises the Business Development and Tech teams, providing guidance to achieve strategic objectives
							</p>

							{/* Modern Stats */}
							<div className="grid grid-cols-2 gap-4">
								<motion.div
									className="text-center p-4 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 backdrop-blur-sm rounded-xl border border-accent-gold/20"
									variants={statsVariants}
									transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
									whileHover={{ scale: 1.05 }}
								>
									<motion.div
										className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent"
										initial={{ opacity: 0 }}
										animate={isInView ? { opacity: 1 } : { opacity: 0 }}
										transition={{ delay: 1, duration: 0.6 }}
									>
										20+
									</motion.div>
									<div className="text-sm text-muted-foreground font-medium">
										Projects Led
									</div>
								</motion.div>
								<motion.div
									className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/20"
									variants={statsVariants}
									transition={{ delay: 1, duration: 0.4, type: "spring" }}
									whileHover={{ scale: 1.05 }}
								>
									<motion.div
										className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent"
										initial={{ opacity: 0 }}
										animate={isInView ? { opacity: 1 } : { opacity: 0 }}
										transition={{ delay: 1.2, duration: 0.6 }}
									>
										50+					
									</motion.div>
									<div className="text-sm text-muted-foreground font-medium">
										Team Members
									</div>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Floating Responsibilities */}
				<motion.div
					className="mb-20"
					variants={itemVariants}
					transition={{ duration: 0.8, delay: 0.7 }}
				>
					<div className="text-center mb-16">
						<motion.span
							className="inline-block px-4 py-2 bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/20 rounded-full text-accent-gold text-sm font-semibold mb-6"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
							transition={{ delay: 1.5, duration: 0.6 }}
						>
							💼 Core Responsibilities
						</motion.span>
						<motion.h3
							className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
							variants={itemVariants}
						>
							Key Areas of Excellence
						</motion.h3>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
						{responsibilities.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50, scale: 0.8 }}
									animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
									transition={{ 
										duration: 0.8, 
										delay: 0.2 * index,
										type: "spring",
										stiffness: 100,
										damping: 10
									}}
									whileHover={{
										y: -10,
										scale: 1.05,
										transition: { duration: 0.3, type: "spring", stiffness: 400 }
									}}
									className="group cursor-pointer text-center"
								>
									{/* Floating Icon with Glow */}
									<motion.div
										className="relative w-16 h-16 mx-auto mb-6"
										whileHover={{ 
											scale: 1.2, 
											rotate: 10,
											transition: { duration: 0.3 }
										}}
									>
										{/* Glow effect */}
										<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-accent-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
										
										{/* Icon container */}
										<div className="relative w-full h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-accent-gold/40 transition-all duration-300">
											<IconComponent className="h-8 w-8 text-accent-gold group-hover:text-yellow-400 transition-colors duration-300" />
										</div>
									</motion.div>

									{/* Title */}
									<motion.h4 
										className="text-xl font-bold mb-4 text-foreground group-hover:text-accent-gold transition-colors duration-300"
										initial={{ opacity: 0 }}
										animate={isInView ? { opacity: 1 } : { opacity: 0 }}
										transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
									>
										{item.title}
									</motion.h4>

									{/* Description */}
									<motion.p 
										className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
										initial={{ opacity: 0 }}
										animate={isInView ? { opacity: 1 } : { opacity: 0 }}
										transition={{ delay: 0.2 * index + 0.5, duration: 0.6 }}
									>
										{item.description}
									</motion.p>

									{/* Floating underline effect */}
									<motion.div 
										className="w-0 h-0.5 bg-gradient-to-r from-accent-gold to-yellow-400 mx-auto mt-4 group-hover:w-16 transition-all duration-500"
										initial={{ width: 0 }}
										whileInView={{ width: 0 }}
									/>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* Modern Quote Section */}
				<motion.div
					className="text-center"
					variants={itemVariants}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<motion.div
						className="max-w-4xl mx-auto py-8 group cursor-default"
						whileHover={{ y: -5 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="text-4xl md:text-6xl text-accent-gold/30 group-hover:text-accent-gold/50 mb-6 transition-colors duration-500"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
							transition={{ delay: 1.5, duration: 0.6 }}
						>
							"
						</motion.div>

						<motion.blockquote
							className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent-gold mb-8 leading-relaxed transition-colors duration-500"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: 1.7, duration: 0.8 }}
						>
							Nothing in life is easy, and neither is anything attainable without effort. Success is a product of grit, grace and determination, the ability to persevere no matter what.
						</motion.blockquote>

						<motion.footer
							className="flex items-center justify-center gap-4"
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ delay: 2, duration: 0.6 }}
						>
							<div className="w-16 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent group-hover:via-yellow-400 transition-colors duration-500" />
							<span className="text-lg bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent font-medium tracking-wide">
								Lucy James Abagi
							</span>
							<div className="w-16 h-px bg-gradient-to-l from-transparent via-accent-gold to-transparent group-hover:via-yellow-400 transition-colors duration-500" />
						</motion.footer>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
}