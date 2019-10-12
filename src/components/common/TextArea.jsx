import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
	name,
	label,
	onChange,
	readonly,
	rows,
	cols,
	placeholder,
	value,
	error,
}) => {
	let wrapperClass = 'form-group';
	if (error && error.length > 0) {
		wrapperClass = `${wrapperClass} has-error`;
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				className="form-control"
				rows={rows}
				cols={cols}
				placeholder={placeholder}
				readOnly={readonly}
				value={value}
				onChange={onChange}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

TextArea.defaultProps = {
	rows: '',
	cols: '',
	placeholder: '',
	value: '',
	error: '',
	readonly: false,
};

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	rows: PropTypes.string,
	cols: PropTypes.string,
	readonly: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default TextArea;
