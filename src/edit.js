import {
	TextControl,
	__experimentalText as Text,
	SelectControl,
	Button,
} from "@wordpress/components";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();
	const dataTypeFn = (value) => {
		props.setAttributes({ dataType: value });
		switch (value) {
			case "userData":
				props.setAttributes({ appID: "" });
				props.setAttributes({ objectID: "" });
				props.setAttributes({
					description: "This contains organisational data",
				});
				break;
			case "bar":
				props.setAttributes({ appID: "da8c91fe-88fd-45ef-b573-596621f7ec6f" });
				props.setAttributes({ objectID: "aBGkzz" });
				props.setAttributes({ objectTitle: "Example bar plot" });
				props.setAttributes({ description: "This contains test data" });
				break;
			case "line":
				props.setAttributes({ appID: "da8c91fe-88fd-45ef-b573-596621f7ec6f" });
				props.setAttributes({
					objectID: "ec48858d-b158-432d-b60c-da7344d8bc9a",
				});
				props.setAttributes({ objectTitle: "Example line plot" });
				props.setAttributes({ description: "This contains test data" });
				break;
			case "scatterplot":
				props.setAttributes({ appID: "da8c91fe-88fd-45ef-b573-596621f7ec6f" });
				props.setAttributes({
					objectID: "e3ed1aa7-a066-4358-a64e-0beb1c433317",
				});
				props.setAttributes({ objectTitle: "Example scatterplot" });
				props.setAttributes({ description: "This contains test data" });
				break;
			case "gauge":
				props.setAttributes({ appID: "da8c91fe-88fd-45ef-b573-596621f7ec6f" });
				props.setAttributes({
					objectID: "576c5fc2-e038-4c90-b682-4e17b2fd846e",
				});
				props.setAttributes({ objectTitle: "Example gauge plot " });
				props.setAttributes({ description: "This contains test data" });
				break;
			default:
				props.setAttributes({ appID: "" });
				props.setAttributes({ objectID: "" });
				props.setAttributes({ description: "" });
				break;
		}
	};
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="wp-block-create-block-plot-beam" {...blockProps}>
			{__(
				<div className="admin-form">
					<SelectControl
						className="select first"
						label="Select data type"
						value={props.attributes.dataType}
						required
						options={[
							{ label: "Select Options", value: null },
							{ label: "Your Organisation Data", value: "userData" },
							{ label: "Example data-Bar chart", value: "bar" },
							{ label: "Example data-Line chart", value: "line" },
							{ label: "Example data-Scatterplot chart", value: "scatterplot" },
							{ label: "Example data-Gauge chart", value: "gauge" },
						]}
						onChange={(value) => dataTypeFn(value)}
					/>
					{props.attributes.dataType === "userData" && (
						<div className="button-group">
							<Button
								className="button"
								onClick={() =>
									openInNewTab("https://plot-beam.azurewebsites.net/register")
								}
							>
								Create a new Plot Beam page
								<br />
								Connect my QlikSense data and create new visualisation
							</Button>
							<Button
								className="button"
								onClick={() =>
									openInNewTab("https://plot-beam.azurewebsites.net/return")
								}
							>
								Go to my Plot Beam page
								<br />I have already created a Plot Beam site for my
								organisation
							</Button>
						</div>
					)}
					<TextControl
						className="form-text"
						label="Visualisation Title"
						type="text"
						help="Short title for the chart, 5 words max"
						value={props.attributes.objectTitle}
						onChange={(value) => props.setAttributes({ objectTitle: value })}
					/>
					{props.attributes.dataType === "userData" ? (
						<TextControl
							className="form-text"
							label="Visualisation ID"
							type="text"
							help="Object Slug Example:0gnriLVVas7CxY0Q-cZ77OKLLeEwNoumk/aBGkzz "
							value={props.attributes.objectSlug}
							onChange={(value) => props.setAttributes({ objectSlug: value })}
						/>
					) : (
						<>
							<TextControl
								className="form-text"
								label="App ID"
								type="text"
								help="Demo App ID: da8c91fe-88fd-45ef-b573-596621f7ec6f"
								value={props.attributes.appID}
								onChange={(value) => props.setAttributes({ appID: value })}
							/>
							<TextControl
								className="form-text"
								label="Object ID"
								type="text"
								help="Demo Object ID: aBGkzz"
								value={props.attributes.objectID}
								onChange={(value) => props.setAttributes({ objectID: value })}
							/>
						</>
					)}
					<TextControl
						className="form-text"
						label="Visualisation Description"
						type="text"
						help="Short description for the chart, 100 words max"
						value={props.attributes.description}
						onChange={(value) => props.setAttributes({ description: value })}
					/>
					<Text className="support">
						For assistance, please visit our Support Portal at{" "}
						<a
							className="notitia"
							src="https://notitia.atlassian.net/servicedesk/customer/portals"
						>
							Notitia Support
						</a>
					</Text>
				</div>,
			)}
		</div>
	);
}
