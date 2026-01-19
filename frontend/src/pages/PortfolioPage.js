import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import TransitionLink from "../components/TransitionLink";

import { PROJECTS } from "../data/projects-data";
import Footer from "../sections/Footer";
import PortfolioHero from "../sections/PortfolioHero";
import { resolveImagePath } from "../utils/resolveImagePath";

const formatList = (value) => {
	if (!value) return "";
	if (Array.isArray(value)) return value.filter(Boolean).join(", ");
	return String(value);
};

export default function PortfolioPage() {
	const { slug } = useParams();

	//Hook is always called (no early return before it)
	const project = useMemo(() => {
		return PROJECTS.find((p) => p.link === slug) || null;
	}, [slug]);

	console.log("slug:", slug);
	console.log("PROJECTS links:", PROJECTS.map(p => p.link));	

	//Also safe: still called every render (even if project is null)
	const relatedProjects = useMemo(() => {
		if (!project) return [];

		const currentCategories = new Set((project.categories || []).filter(Boolean));
		const currentProjectType = project.project_type;

		return PROJECTS
			.filter((p) => p.link !== project.link)
			.filter((p) => Array.isArray(p.types) && p.types.length > 0)
			.filter((p) => {
				const types = p.types || [];
				const matchesCategory = types.some((t) => currentCategories.has(t));
				const matchesProjectType = currentProjectType
					? types.includes(currentProjectType)
					: false;

				return matchesCategory || matchesProjectType;
			});
	}, [project]);

	//Early return happens AFTER hooks
	//if (!project) return <Navigate to="/portfolio" replace />;

	if (!project) {
		return <Navigate to="/404" replace />;
		/*return (
			<div style={{ padding: "6rem 1rem", textAlign: "center" }}>
				<h2 className="section-heading">Project not found</h2>
				<p className="literature" style={{ marginTop: "1rem" }}>
					The portfolio page “{slug}” doesn’t exist.
				</p>
				<div style={{ marginTop: "1.5rem", display: "inline-block" }}>
					<TransitionLink className="gold-button" to={`/portfolio/${PROJECTS[0]?.link || ""}`}>
						Go to first project
					</TransitionLink>
				</div>
			</div>
		);*/
	}	

	const title = project.seo?.title || `${project.title} - MaeCMServices Portfolio`;

	const description = project.seo?.description || project.summary || "Project details and scope.";

	const keywords = project.seo?.keywords || "construction, engineering, project portfolio";

	const url = project.seo?.url //|| `${BASE_URL}/portfolio/${project.link}`;	

	const headers = [
		"Project Type",
		"Project Name",
		"Categories",
		"Work",
		"City",
		"State",
		"Zipcode",
		"Year"
	];

	const values = [
		project.project_type,
		project.location, // using location as "Project Name"
		formatList(project.categories),
		formatList(project.work),
		project.city,
		project.state,
		project.zip,
		project.year
	];

	const galleryImages = [
		project.image,
		...(project.additional_images || []).map(resolveImagePath)
	].filter(Boolean);

	return (
		<>

	      <SEO
	        title={title}
	        description={description}
	        keywords={keywords}
	        url={url}
	        // if your SEO component supports these:
	        // image={project.seo?.image}
	      />

			<PortfolioHero caption={project.location} />

			<section className="portfolio-info-section">
				<div className="portfolio-info-table">
					{headers.map((h) => (
						<div key={h} className="portfolio-info-cell portfolio-info-head">
							{h}
						</div>
					))}

					{values.map((v, idx) => (
						<div key={idx} className="portfolio-info-cell portfolio-info-body literature">
							{v || "\u00A0"}
						</div>
					))}

				</div>
			</section>

			<section className="portfolio-gallery">
				<div className="portfolio-gallery-grid">
					{galleryImages.map((src, index) => (
						<div key={index} className="portfolio-gallery-tile">
							<div
								className="portfolio-gallery-image"
								style={{ backgroundImage: `url(${src})` }}
							/>
						</div>
					))}
				</div>
			</section>

			<section className="portfolio-related">
				<div className="small-section-heading portfolio-related-heading">
					Related Projects
				</div>

				<div className="portfolio-related-grid">
					{relatedProjects.map((p) => (
						<div key={p.link} className="portfolio-related-card">

							<div
								className="portfolio-related-image"
								style={{ backgroundImage: `url(${p.image})` }}
							>
								<div className="portfolio-related-overlay">
									<TransitionLink
										to={`/portfolio/${p.link}`}
										className="gold-button portfolio-related-btn"
									>
										VIEW
									</TransitionLink>
								</div>
							</div>

							<div className="tiny-section-heading portfolio-related-title">
								{p.location}
							</div>

							<div className="portfolio-related-types">
								{(p.types || []).join(", ")} 
							</div>
						</div>
					))}
				</div>
			</section>

			<Footer />
		</>
	);
}
