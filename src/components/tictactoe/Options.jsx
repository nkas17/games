import React from 'react';
import SelectInput from '../common/SelectInput';

const Options = ({
	handleThemeXChange,
	xValue,
	xOptions,
	handleThemeOChange,
	oValue,
	oOptions,
}) => (
	<div className="options">
		<p>options</p>
		<SelectInput
			label="select a theme for 'X'"
			name="themeX"
			options={xOptions}
			onChange={handleThemeXChange}
			value={xValue}
		/>
		<SelectInput
			label="select a theme for 'O'"
			name="themeO"
			options={oOptions}
			onChange={handleThemeOChange}
			value={oValue}
		/>
	</div>
);

export default Options;
