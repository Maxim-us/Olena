import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, __experimentalNumberControl as NumberControl, RadioControl } from '@wordpress/components';
import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()

	return [
		<InspectorControls key="mx-settings">

			<PanelBody title={__('Section Options', 'olena')} initialOpen={false}>

				<PanelRow>

					<RadioControl
						label={__('Start position of animation', 'olena')}
						help={__('eg. Center of a element and Top of the screen', 'olena')}
						selected={attributes.start_position}
						options={[
							{ label: 'Center Top', value: 'center top' },
							{ label: 'Top Top', value: 'top top' },
							{ label: 'Top 20%', value: 'top 20%' },
							{ label: 'Top Center', value: 'top center' },
							{ label: 'Top 70%', value: 'top 70%' }
						]}
						onChange={start_position => setAttributes({ start_position })}
					/>

				</PanelRow>

			</PanelBody>

		</InspectorControls>,
		<div
			{...blockProps}
			key="mx-main-content"
			data-extras={attributes.extras}
			data-start-position={attributes.start_position}
		>
			<div className="mx-animated-horizontal-slider">
				<InnerBlocks />
			</div>
		</div>
	];
}