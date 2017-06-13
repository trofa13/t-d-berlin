import React from 'react';
import PropTypes from 'prop-types';
import uuidV4 from 'uuid/v4';

class Form extends React.Component {

  constructor(){
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return(
      <form className="form-inline" onSubmit={this.onSubmit}>

        <div className="form-group">
          <label htmlFor="itemText">Название элемента</label>
            <input type="text" placeholder="Введите название элемента"
                   className="form-control" id="itemText"
                   ref={(input) => this.textInput = input} />
        </div>

        <button type="submit" className="btn btn-info" style={{marginLeft: '20px'}}>
          Добавить элемент
        </button>

      </form>
    )
  }

  onSubmit(e){
    e.preventDefault();
    if (this.textInput.value) {
      this.props.addItem({
        id: uuidV4(),
        text: this.textInput.value,
        count: 0
      });
    }
  }
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
