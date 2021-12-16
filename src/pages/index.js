import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import OSDViewer from "../templates/osd-viewer";

function App() {
	const [images, setImages] = useState([]);
	const [manifest, setManifest] = useState();

	useEffect(() => {
		getImages();
	}, []);

	const getImages = async () => {
		const response = await fetch(
			"https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json",
		);
		let image = await response.json();
		console.log("image", image);
		setImages(image.groups);
	};

	const previewImage = async (slide) => {
		setManifest(slide.slide);
	};

	return (
		<div>
			<h2>Test Images</h2>
			{images.map((group, index) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<h3 key={index}>{group.name}</h3>
						{group.slides.map((slide, index) => {
							return (
								<button
									key={index}
									onClick={() => {
										return previewImage(slide);
									}}
								>
									{slide.name}
								</button>
							);
						})}
					</div>
				);
			})}
			<div>
				<OSDViewer image={manifest} />
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
