import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalImage from "react-modal-image";
import "react-multi-carousel/lib/styles.css";

export const ProjectCard = ({
  title,
  description,
  mission,
  features,
  pages,
  visit,
  repoClient,
  repoServer,
  technologies,
  info,
  images,
  videos,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="proj-imgbx">
      <div className="proj-txtx">
        <h4>{title}</h4>
        <p>{technologies}</p>
        <button className="gotoproject-btn" onClick={handleShow}>
          <span>Discover {title}</span>
        </button>

        <Modal
          show={show}
          style={{ color: "white" }}
          className="modal-dialog-scrollable"
          onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
            <button
              onClick={handleClose}
              className="btn-close btn-close-white"></button>
          </Modal.Header>
          <Modal.Body>
            <div className="headband">
              <div className="technologies">
                <p>{technologies}</p>
              </div>
            </div>
            <hr style={{ margin: "10px" }} />
            <div className="layout-second-container">
              <div className="second-container-text">
                <p>{mission && mission}</p>
                <p>{description && description}</p>
                <p>{info && info}</p>
                <br />
                <p>
                  {features && <p>Features:</p> &&
                    features.map((feature, index) => {
                      return <li key={feature + index}>{feature}</li>;
                    })}
                </p>
                <br />
                <p>
                  {pages && <p>Pages:</p> &&
                    pages.map((page, index) => {
                      return <li key={page + index}>{page}</li>;
                    })}
                </p>
                <br />
              </div>
              {videos.length > 0 && (
                <div className="second-container-video">
                  {videos &&
                    videos.map((video, index) => {
                      return (
                        <iframe
                          key={video + index}
                          className="project-video"
                          src={video}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                      );
                    })}
                </div>
              )}
              <div className="second-container-img">
                {/* <Carousel responsive={responsive}   showDots={true} infinite={true}> */}
                  {images &&
                    images.map((image, index) => {
                      return (
                        <ModalImage
                          key={image + index}
                          small={image}
                          large={image}
                          className="project-img"
                        />
                      );
                    })}
                {/* </Carousel> */}
              </div>

              <div className="btns">
                {visit && (
                  <button onClick={() => window.open(visit)}>
                    <span>Visit Now</span>
                  </button>
                )}
                {repoClient && (
                  <button onClick={() => window.open(repoClient)}>
                    <span>Client Code</span>
                  </button>
                )}
                {repoServer && (
                  <button onClick={() => window.open(repoServer)}>
                    <span>Server Code</span>
                  </button>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
