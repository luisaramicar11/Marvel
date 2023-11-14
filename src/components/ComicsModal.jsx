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
            <div className="modal-body">
              <div className="row">
                <div className="col-8 col-sm-6">
                  <p className="lead">{this.props.description}</p>
                </div>
                <div className="col-4 col-sm-6">
                  <img
                    src={this.props.img}
                    className="img-responsive"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
