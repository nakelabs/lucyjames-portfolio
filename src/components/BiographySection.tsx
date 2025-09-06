import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Target, Users, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const milestones = [
	{
		year: "2024-Present",
		title: "Public and Private Development Centre (PPDC)",
		description:
			"Chief Executive Officer",
		icon: Target,
		achievement: "40% increase in operational efficiency",
		detailedInfo: {
			responsibilities: [
				"Represent the organization in public forums, media, and high-profile events, strengthening its public image and reputation.",
				"Make critical policy and strategic decisions that enhanced organizational growth and effectiveness",
				"Efficiently manage day-to-day operations, ensuring alignment with organizational goals and optimizing performance.",
				"Effectively oversee budgeting and resource allocation, ensuring financial stability and growth.",
        "Recruit, develop, and retain high-performing teams, contributing to the organization’s overall success."
			],
			achievements: [
				"including bilateral, multi-lateral agencies, and foundations.",
				"Enhanced organizational reputation through strategic partnerships",
				"Successfully led digital transformation initiatives",
				"spearheaded the creation of new businesses and supervise the Business Development and Tech teams",
			],
			skills: [
				"Supportive Services",
				"Financial Analysis",
				"Stakeholder Management",
				"Digital Transformation",
			],
		},
	},
	{
		year: "2020-2023",
		title: "Connected Development [CODE]",
		description:
			"Programs Director",
		icon: TrendingUp,
		achievement: "Positively transformed millions of lives across Africa",
		detailedInfo: {
			responsibilities: [
				"Manage a portfolio of complex initiatives and donor projects of the organization",
				"Manage project and program issues and risks to mitigate impact to baseline",
				"Participate in establishing practices, templates, policies, tools and partnerships to expand and mature these capabilities for CODE",
				"Set and continually manage project and program expectations while delegating and managing deliverable with team members and stakeholders",
			],
			achievements: [
				"Led 3 award-winning projects",
				"Established partnerships with 15+ major donors",
				"Launched 5 sustainable development programs",
				"Achieved 95% project success rate",
			],
			skills: [
				"Grant and Proposal Writing",
				"Community Outreach",
				" Gender Mainstreaming",
				"Team Leadership",
        "New Business Developmen",
			],
		},
	},
	{
		year: "2017-2023",
		title: "Connected Development [CODE]",
		description:
			"Programs and M&E Lead (2017-2021), Senior Program Manager (2021-2023)",
		icon: Users,
		achievement: "Mobilized $5 million for social impact initiatives",
		detailedInfo: {
			responsibilities: [
				" Manage a portfolio of complex initiatives and donor projects of the organization",
				"Provide on-site leadership for project team by building and motivating team members to meet project goals, adhering to their responsibilities and project milestones",
				"Manage all aspects of multiple related projects to ensure the overall program is aligned to and directly supports the achievement of strategic objectives of CODE",
				"Acts as the main contact person during the absence of team members, following-up on any emergencies with appropriate in-house staff, and sharing workload with Program Assistants from other teams",
        "Works with other Program Assistants to coordinate work activities, meet deadlines, and provide support where needed"
			],
			achievements: [
				"Mentored 50+ professionals successfully",
				"Mobilized $5 million for social impact initiatives",
				"Positively transformed millions of lives across Africa",
				"Achieved 90% team retention rate",
			],
			skills: [
				"Team Building",
				"Mentoring",
				"Social Impact",
				"Cross-Cultural Leadership",
				"Leadership Development",
				"Partner Relationship Management",
			],
		},
	},
	{
		year: "2015-2017",
		title: "Director, Partnership, and Business Development",
		description: "Exhale Grand Resources Limited/ Jas Fitness Center · Full-time",
		icon: Award,
		achievement: "",
		detailedInfo: {
			responsibilities: [
				"Partnership & Stakeholder Management",
				"Investment Strategy & Pipeline Development",
				"Team & Capacity Building",
				"Strategic Planning & Execution",
			],
			achievements: [
				"Successfully acquired sufficient and skilled support for investment initiatives, establishing a network of reliable and coherent relationships.",
				"Developed an investment opportunity pipeline through the effective utilization of contacts and networks.",
        "Implemented strategic plans and methodologies to enhance revenue streams, foster diversification, and generate momentum within the organization.",
        "Orchestrated partnerships, imports, exports, and international trade collaborations.",
        "Designed and managed the implementation of a comprehensive fundraising strategy and plan, incorporating diverse financial sources."
			],
			skills: [
				"Creativity and Innovation",
				"Leadership Development",
				"Project Management",
				"Strategic Partnerships",
        "Process Improvement",
        "Partner Relationship Management",
        "Fundraising Strategy"

			],
		},
	},
];

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const slideInLeft = {
	initial: { opacity: 0, x: -80 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.7, ease: "easeOut" },
};

const slideInRight = {
	initial: { opacity: 0, x: 80 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.7, ease: "easeOut" },
};

const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 0.6, ease: "easeOut" },
};

export function BiographySection() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const milestonesRef = useRef<HTMLDivElement>(null);

	const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
	const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
	const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
	const isMilestonesInView = useInView(milestonesRef, { once: true, amount: 0.2 });

	const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

	const toggleMilestone = (index: number) => {
		setExpandedMilestone(expandedMilestone === index ? null : index);
	};

	// Story paragraphs for word-by-word animation
	const storyParagraphs = [
		"Lucy James Abagi stands as a beacon of visionary leadership in today's dynamic business landscape. Her remarkable journey spans multiple industries, where she has consistently demonstrated an exceptional ability to transform challenges into opportunities for growth and innovation.",
		"With a keen strategic mindset and an unwavering commitment to excellence, Lucy has built a reputation for delivering results that exceed expectations. Her leadership philosophy centers on empowering teams, fostering innovation, and creating sustainable value for all stakeholders.",
		"As Chief Executive Officer of the Public and Private Development Centre (PPDC), She lead strategic initiatives that advance governance, transparency, and accountability across Africa. Previously, as Director of Innovation and Partnerships at PPDC, She spearheaded collaborations with public and private donors, overseeing business development and tech teams to achieve strategic goals. Earlier, at Connected Development, She led initiatives that mobilized $5 million for social impact across nine African countries, positively transforming millions of lives.",
	];

	return (
		<motion.section
			ref={sectionRef}
			id="biography"
			className="py-20 bg-gray-50 relative overflow-hidden"
			initial="initial"
			animate={isInView ? "animate" : "initial"}
		>
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 1.2 }}
			>
				<motion.div
					className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"
					initial={{ scale: 0, rotate: -180 }}
					animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
					transition={{ duration: 1.5, delay: 0.2 }}
				/>
				<motion.div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
					initial={{ scale: 0, rotate: 180 }}
					animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
					transition={{ duration: 1.5, delay: 0.4 }}
				/>
			</motion.div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<motion.div
					ref={headerRef}
					className="text-center mb-16"
					variants={staggerContainer}
					initial="initial"
					animate={isHeaderInView ? "animate" : "initial"}
				>
					<motion.span
						className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-full text-yellow-700 text-sm font-semibold mb-6"
						variants={fadeInUp}
					>
						✨ Professional Journey
					</motion.span>

					<motion.h2
						className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent"
						variants={fadeInUp}
					>
						A Journey of{" "}
						<span className="text-yellow-500">Excellence</span>
					</motion.h2>

					<motion.p
						className="text-xl text-gray-600 max-w-4xl mx-auto"
						variants={fadeInUp}
					>
						Transforming visions into reality through strategic leadership and
						Innovative excellence.
					</motion.p>
				</motion.div>

				{/* Biography Content */}
				<motion.div
					ref={contentRef}
					className="max-w-6xl mx-auto mb-20"
					initial="initial"
					animate={isContentInView ? "animate" : "initial"}
					variants={scaleIn}
				>
					<div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-2xl">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							{/* Left Side - Portrait */}
							<motion.div
								className="relative"
								variants={slideInLeft}
							>
								<div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
									<img
										src="/frame12.png"
										alt="Lucy James Abaji - Professional Portrait"
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Floating Elements */}
								<motion.div
									className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"
									initial={{ scale: 0 }}
									animate={isContentInView ? { scale: 1 } : { scale: 0 }}
									transition={{ duration: 0.5, delay: 0.8 }}
								/>
								<motion.div
									className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"
									initial={{ scale: 0 }}
									animate={isContentInView ? { scale: 1 } : { scale: 0 }}
									transition={{ duration: 0.5, delay: 1.0 }}
								/>
							</motion.div>

							{/* Right Side - Story Content */}
							<motion.div
								className="space-y-8"
								variants={slideInRight}
							>
								{storyParagraphs.map((paragraph, paragraphIndex) => (
									<motion.div
										key={paragraphIndex}
										className="space-y-4"
										initial={{ opacity: 0, y: 30 }}
										animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
										transition={{ duration: 0.6, delay: paragraphIndex * 0.2 + 0.5 }}
									>
										<div className="flex items-center gap-3 mb-4">
											<div className="w-2 h-2 bg-yellow-500 rounded-full" />
											<div className="h-px bg-gradient-to-r from-yellow-400 to-transparent flex-1" />
										</div>

										<p className="text-lg leading-relaxed text-gray-700">
											{paragraph}
										</p>
									</motion.div>
								))}

								{/* Conclusion */}
								<motion.div
									className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.6, delay: 1.5 }}
								>
									<p className="text-xl font-medium text-yellow-700">
										✨ Today, Lucy continues to write her story of excellence, one
										transformational achievement at a time.
									</p>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Milestones */}
				<motion.div
					ref={milestonesRef}
					className="space-y-8"
					variants={staggerContainer}
					initial="initial"
					animate={isMilestonesInView ? "animate" : "initial"}
				>
					<motion.div
						className="text-center mb-16"
						variants={fadeInUp}
					>
						<span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
							🏆 Career Highlights
						</span>
						<h3 className="text-3xl md:text-5xl font-bold text-gray-900">
							Key{" "}
							<span className="text-yellow-500">Milestones</span>
						</h3>
					</motion.div>

					<div className="relative max-w-6xl mx-auto">
						{/* Timeline Line */}
						<motion.div
							className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-blue-500 to-yellow-400 transform md:-translate-x-1/2"
							initial={{ scaleY: 0 }}
							animate={isMilestonesInView ? { scaleY: 1 } : { scaleY: 0 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							style={{ transformOrigin: "top" }}
						/>

						{milestones.map((milestone, index) => {
							const IconComponent = milestone.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={index}
									className={`relative flex items-center mb-16 ${
										isEven ? "md:flex-row" : "md:flex-row-reverse"
									}`}
									initial={{ opacity: 0, y: 50 }}
									animate={isMilestonesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
								>
									{/* Timeline Node */}
									<motion.div
										className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"
										initial={{ scale: 0 }}
										animate={isMilestonesInView ? { scale: 1 } : { scale: 0 }}
										transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
									/>

									{/* Content Card */}
									<motion.div
										className={`w-full md:w-5/12 ml-16 md:ml-0 ${
											isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
										}`}
										initial={{
											opacity: 0,
											x: isEven ? -50 : 50,
											scale: 0.9,
										}}
										animate={isMilestonesInView ? {
											opacity: 1,
											x: 0,
											scale: 1,
										} : {
											opacity: 0,
											x: isEven ? -50 : 50,
											scale: 0.9,
										}}
										transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
									>
										<motion.div
											className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
											onClick={() => toggleMilestone(index)}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											{/* Card Header */}
											<div className="flex items-center gap-4 mb-4">
												<div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center border border-yellow-200">
													<IconComponent className="h-6 w-6 text-yellow-600" />
												</div>
												<div className="text-lg font-bold text-yellow-600 flex-1">
													{milestone.year}
												</div>
												<motion.div
													className="transform transition-transform duration-300"
													animate={{ rotate: expandedMilestone === index ? 180 : 0 }}
												>
													<ChevronDown className="h-5 w-5 text-yellow-600" />
												</motion.div>
											</div>

											{/* Card Content */}
											<h4 className="text-xl font-bold mb-3 text-gray-900">
												{milestone.title}
											</h4>

											<p className="text-gray-600 mb-4 leading-relaxed">
												{milestone.description}
											</p>

											<div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200">
												<span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
												{milestone.achievement}
											</div>

											{/* Expanded Details */}
											<AnimatePresence>
												{expandedMilestone === index && (
													<motion.div
														className="mt-6 border-t border-gray-200 pt-6"
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: "auto" }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.3 }}
													>
														<motion.div
															className="space-y-6"
															initial={{ opacity: 0 }}
															animate={{ opacity: 1 }}
															exit={{ opacity: 0 }}
															transition={{ duration: 0.3, delay: 0.1 }}
														>
															{/* Responsibilities */}
															<div>
																<h5 className="text-sm font-semibold text-yellow-600 mb-3 flex items-center gap-2">
																	<span className="w-2 h-2 bg-yellow-500 rounded-full" />
																	Key Responsibilities
																</h5>
																<div className="space-y-2">
																	{milestone.detailedInfo.responsibilities.map(
																		(responsibility, idx) => (
																			<motion.div
																				key={idx}
																				className="text-sm text-gray-600 flex items-start gap-2"
																				initial={{ opacity: 0, x: -10 }}
																				animate={{ opacity: 1, x: 0 }}
																				transition={{ duration: 0.3, delay: idx * 0.05 }}
																			>
																				<span className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
																				<span>{responsibility}</span>
																			</motion.div>
																		)
																	)}
																</div>
															</div>

															{/* Achievements */}
															<div>
																<h5 className="text-sm font-semibold text-yellow-600 mb-3 flex items-center gap-2">
																	<span className="w-2 h-2 bg-yellow-500 rounded-full" />
																	Key Achievements
																</h5>
																<div className="space-y-2">
																	{milestone.detailedInfo.achievements.map(
																		(achievement, idx) => (
																			<motion.div
																				key={idx}
																				className="text-sm text-gray-600 flex items-start gap-2"
																				initial={{ opacity: 0, x: -10 }}
																				animate={{ opacity: 1, x: 0 }}
																				transition={{ duration: 0.3, delay: idx * 0.05 + 0.1 }}
																			>
																				<span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
																				<span>{achievement}</span>
																			</motion.div>
																		)
																	)}
																</div>
															</div>

															{/* Skills */}
															<div>
																<h5 className="text-sm font-semibold text-yellow-600 mb-3 flex items-center gap-2">
																	<span className="w-2 h-2 bg-yellow-500 rounded-full" />
																	Key Skills
																</h5>
																<div className="flex flex-wrap gap-2">
																	{milestone.detailedInfo.skills.map((skill, idx) => (
																		<motion.span
																			key={idx}
																			className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full border border-yellow-200"
																			initial={{ opacity: 0, scale: 0.8 }}
																			animate={{ opacity: 1, scale: 1 }}
																			transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
																		>
																			{skill}
																		</motion.span>
																	))}
																</div>
															</div>
														</motion.div>
													</motion.div>
												)}
											</AnimatePresence>
										</motion.div>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}