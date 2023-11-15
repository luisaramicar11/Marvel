import "./Error404.css";
import Groot from "../assets/images/groot.png";
export function Error404() {
  return (
    <div className="d-flex p-2 bg-color min-vh-100 ">
      <article className=" error col-12 col-md-6 col-l-3 bg-color min-vh-100">
        <h2 className="mb-3 fw-bold">PAGE NOT FOUND</h2>
        <h3 className="mb-3 fw-bold">OH NO!!</h3>
        <p className="fs-5">
          The page you're looking for appears to have gone missing! It's
          possible that it has been removed, changed or might be temporarily
          unavailable, but fear not, we've got our best guys on it. In the mean
          time... Below are some suggestions to help you find what you're
          looking for: Make sure you typed in the page address correctly within
          the Address bar.
        </p>
      </article>
      <article className="col-12 col-md-6 col-l-3 bg-color">
        <img
          className="img-fluid img-groot mt-5"
          src={Groot}
          alt="Groot"
          style={{ width: "30rem", height: "30rem" }}
        />
      </article>
    </div>
  );
}

{
  /* <div classNameName="min-vh-100">
      <div classNameName="container">
        <section classNameName="row text-white mb-5">
          <article classNameName="col-12 col-md-6 col-l-3 d-flex flex-column p-4 mt-4">
            <h2 classNameName="mb-3 fw-bold">PAGE NOT FOUND</h2>
            <h3 classNameName="mb-3 fw-bold">OH NO!!</h3>
            <p classNameName="fs-5">
              The page you're looking for appears to have gone missing! It's
              possible that it has been removed, changed or might be temporarily
              unavailable, but fear not, we've got our best guys on it. In the
              mean time... Below are some suggestions to help you find what
              you're looking for: Make sure you typed in the page address
              correctly within the Address bar.
            </p>
          </article>
        </section>
      </div>
    </div> */
}
