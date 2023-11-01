import { Component } from "react";

export default class ComicsModal extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };

    return (
      <div className="modal fade show bd-example-modal-lg" style={modelStyle}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={this.props.hide}
              ></button>
            </div>
            <div className="modal-body col-lg-8">
              <img
                src={this.props.img}
                className="img-thumbnail rounded float-right"
              />
              <p className="text-sm-right text-muted">
                {this.props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
