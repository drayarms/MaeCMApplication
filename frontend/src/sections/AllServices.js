import React, { useState } from "react";
import { SERVICES } from "../data/services-data";
import { usePageTransition } from "../components/PageTransitionProvider";

export default function AllServicesPanel() {
	const { navigateWithTransition } = usePageTransition();
	const [expanded, setExpanded] = useState({});

	const toggleExpand = (index) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	const handleNav = (e, path) => {
		e.preventDefault();
		navigateWithTransition(path);
	};

	return (
		<section className="all-services-panel py-5">
			<div className="container">
				<div className="row gx-4 gy-5">
					{SERVICES.map((service, index) => {
						const isExpanded = expanded[index];
						const textLines = service.text.split(". ");
						const displayText = isExpanded
							? service.text
							: textLines.slice(0, 5).join(". ") + (textLines.length > 5 ? "..." : "");

						const showMore = !isExpanded && textLines.length > 5;

						return (
							<div key={service.link} className="col-lg-4 col-md-6 d-flex">
								<div className="service-card d-flex flex-column h-100">
									{/* Image */}
									<a
										href={`/services/${service.link}`}
										onClick={(e) => handleNav(e, `/services/${service.link}`)}
										className="service-image-link"
										style={{ display: "block", aspectRatio: "1.52 / 1" }}
									>
										<img
											src={service.image}
											alt={service.caption}
											style={{ width: "100%", height: "100%", objectFit: "cover" }}
										/>
									</a>

									{/* Caption */}
									<div className="section-heading mt-3 text-start">
										{service.caption}
									</div>

									{/* Gold line */}
									<div
										className="little-thin-gold-line mb-2"
										style={{ marginLeft: 0 }}
									/>

									{/* Literature */}
									<div className="literature text-start mb-3">
										{displayText}
										{showMore && (
											<span
												className="text-primary cursor-pointer"
												onClick={() => toggleExpand(index)}
											>
												{" "}more
											</span>
										)}
									</div>

									{/* Read More button */}
									<a
										href={`/services/${service.link}`}
										onClick={(e) => handleNav(e, `/services/${service.link}`)}
										className="gold-button service-card-gold-button mt-auto align-self-start"
									>
										Read More
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
