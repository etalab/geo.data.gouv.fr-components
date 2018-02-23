import React from 'react'
import PropTypes from 'prop-types'

class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {handleSelect} = this.props
    handleSelect(e.target.value)
  }

  render() {
    const {value, label, options, renderOption} = this.props

    return (
      <div>
        {label && <label>{label}</label>}
        <select onChange={this.handleChange} value={value}>
          {options.map(renderOption)}
        </select>
      </div>
    )
  }
}

SelectInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  renderOption: PropTypes.func,
  options: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
}

SelectInput.defaultProps = {
  value: '',
  label: null,
  renderOption: option => <option key={`option-${option}`}>{option}</option>
}

export default SelectInput
